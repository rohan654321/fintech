import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email } = data;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mondalrohan201@gmail.com",
        pass: "bikj srmk yhbx pdtj" // Use App Password from Google
      },
    });

    // Email to organization
    const organizationMailOptions = {
      from: "mondalrohan201@gmail.com",
      to: process.env.EMAIL_TO || "info@africafintechfest.com",
      subject: "New Startup Nexus Inquiry",
      html: `
        <h1>Startup Nexus Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // Email to sender (confirmation)
    const senderMailOptions = {
      from: "mondalrohan201@gmail.com",
      to: email,
      subject: "Thank You for Your Interest in Startup Nexus",
      html: `
        <h1>Thank You for Reaching Out</h1>
        <p>Dear ${name},</p>
        <p>We appreciate your interest in Startup Nexus at the Africa FinTech Fest & Awards 2025.</p>
        <p>Our team will contact you soon with more details.</p>
        <p>Best regards,</p>
        <p>The Africa FinTech Fest & Awards Team</p>
      `,
    };

    // Send emails
    await transporter.sendMail(organizationMailOptions);
    await transporter.sendMail(senderMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}