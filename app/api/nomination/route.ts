import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = ["companyName", "contactPerson", "email", "nominatorName", "nominatorEmail"]
    const missingFields = requiredFields.filter((field) => !data[field])

    if (missingFields.length > 0) {
      return NextResponse.json({ error: `Missing required fields: ${missingFields.join(", ")}` }, { status: 400 })
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chvamshi03@gmail.com", // Your email address
        pass: "zfie hmte iyxt wyto", // Your email password or app password
      },
    })

    // Email to nominator
    if (data.nominatorEmail) {
      await transporter.sendMail({
        from: "chvamshi03@gmail.com",
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
        `,
      })
    }

    // Email to admin (only if ADMIN_EMAIL is set)
    if (process.env.ADMIN_EMAIL) {
      await transporter.sendMail({
        from: "chvamshi03@gmail.com",
        to: process.env.ADMIN_EMAIL,
        subject: `New Nomination: ${data.companyName}`,
        html: `
          <h1>New Nomination Received</h1>
          <p><strong>Company/Individual:</strong> ${data.companyName}</p>
          <p><strong>Category:</strong> ${data.awardCategory}</p>
          <p><strong>Submitted by:</strong> ${data.nominatorName} (${data.nominatorEmail})</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <p>View details in the admin dashboard.</p>
        `,
      })
    }

    return NextResponse.json({
      success: true,
      message: "Nomination submitted successfully",
    })
  } catch (error: unknown) {
    console.error("Error submitting nomination:", error)

    let errorMessage = "Failed to submit nomination"
    const statusCode = 500

    // Type-safe error handling
    if (error instanceof Error) {
      if (error.message.includes("EENVELOPE")) {
        errorMessage = "Email configuration error - please contact support"
      } else {
        errorMessage = error.message
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode })
  }
}

