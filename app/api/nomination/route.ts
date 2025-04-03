import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

interface PrismaError extends Error {
  code?: string;
  meta?: {
    target?: string[];
  };
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['companyName', 'contactPerson', 'email', 'nominatorName', 'nominatorEmail'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Create nomination in database
    const nomination = await prisma.nomination.create({
      data: {
        companyName: data.companyName,
        website: data.website || null,
        contactPerson: data.contactPerson,
        email: data.email,
        phone: data.phone,
        country: data.country,
        awardCategory: data.awardCategory,
        description: data.description,
        innovation: data.innovation,
        evidence: data.evidence,
        links: data.links || null,
        socialMedia: data.socialMedia || null,
        nominatorName: data.nominatorName,
        nominatorOrg: data.nominatorOrg || null,
        nominatorEmail: data.nominatorEmail,
        nominatorPhone: data.nominatorPhone
      }
    });

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:  "mondalrohan201@gmail.com",
        pass:  "bikj srmk yhbx pdtj"
      },
    });

    // Email to nominator
    if (data.nominatorEmail) {
      await transporter.sendMail({
        from:  "mondalrohan201@gmail.com",
        to: data.nominatorEmail,
        subject: "Nomination Received - Fintech Pioneer Awards",
        html: `
          <h1>Thank You for Your Nomination</h1>
          <p>Dear ${data.nominatorName},</p>
          <p>We have received your nomination for the Fintech Pioneer Awards 2025.</p>
          <p><strong>Nominee:</strong> ${data.companyName}</p>
          <p><strong>Award Category:</strong> ${data.awardCategory}</p>
          <p>Our team will review all submissions and notify you of the outcome by June 30, 2025.</p>
          <p>Best regards,</p>
          <p>The Fintech Pioneer Awards Team</p>
        `
      });
    }

    // Email to admin (only if ADMIN_EMAIL is set)
    if (process.env.ADMIN_EMAIL) {
      await transporter.sendMail({
        from:  "mondalrohan201@gmail.com",
        to: process.env.ADMIN_EMAIL,
        subject: `New Nomination: ${data.companyName}`,
        html: `
          <h1>New Nomination Received</h1>
          <p><strong>Company/Individual:</strong> ${data.companyName}</p>
          <p><strong>Category:</strong> ${data.awardCategory}</p>
          <p><strong>Submitted by:</strong> ${data.nominatorName} (${data.nominatorEmail})</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p>View details in the admin dashboard.</p>
        `
      });
    }

    return NextResponse.json({ success: true, nomination });
  } catch (error: unknown) {
    console.error("Error submitting nomination:", error);
    
    let errorMessage = "Failed to submit nomination";
    let statusCode = 500;
    let errorDetails: string[] | undefined = undefined;

    // Type-safe error handling
    if (typeof error === 'object' && error !== null) {
      const err = error as PrismaError;
      
      if (err.code === 'P2002') {
        errorMessage = "This email has already been used for a nomination";
        statusCode = 409;
      } else if (err.code === 'EENVELOPE') {
        errorMessage = "Email configuration error - please contact support";
        statusCode = 500;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      if (err.meta?.target) {
        errorDetails = err.meta.target;
      }
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: errorDetails 
      },
      { status: statusCode }
    );
  }
}