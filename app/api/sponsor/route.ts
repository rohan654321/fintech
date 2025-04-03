import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, company, job, phone, package: sponsorPackage, goals, message } = data

    // Validate required fields
    if (!name || !email || !company || !job || !phone || !sponsorPackage) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Configure nodemailer transporter with Gmail
    // For Gmail, you need to use an "App Password" if 2FA is enabled
    const transporter = nodemailer.createTransport({
      service: "gmail", // or 'outlook', 'yahoo', etc.
      auth: {
        user: "mondalrohan201@gmail.com" ,
        pass: "bikj srmk yhbx pdtj"
      },
    })

    // Email to organization
    const organizationMailOptions = {
      from: "mondalrohan201@gmail.com",
      to: process.env.EMAIL_TO || "sponsors@africafintechfest.com",
      subject: `New Sponsorship Application: ${sponsorPackage} - ${company}`,
      html: `
        <h1>New Sponsorship Application</h1>
        <p><strong>Package:</strong> ${sponsorPackage}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Contact Name:</strong> ${name}</p>
        <p><strong>Job Title:</strong> ${job}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${goals ? `<p><strong>Sponsorship Goals:</strong> ${goals}</p>` : ""}
        ${message ? `<p><strong>Additional Information:</strong> ${message}</p>` : ""}
      `,
    }

    // Email to applicant
    const applicantMailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: email,
      subject: "Thank You for Your Global FinTech Fest Sponsorship Application",
      html: `
        <h1>Thank You for Your Sponsorship Application</h1>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in sponsoring the Global FinTech Fest & Awards 2025. We have received your application for the ${sponsorPackage} package.</p>
        <p>Our sponsorship team will review your application and contact you within 2-3 business days to discuss next steps.</p>
        <p>If you have any immediate questions, please contact our sponsorship team at sponsors@africafintechfest.com.</p>
        <p>Best regards,</p>
        <p>The Africa FinTech Fest & Awards Team</p>
      `,
    }

    // Send emails
    await transporter.sendMail(organizationMailOptions)
    await transporter.sendMail(applicantMailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

