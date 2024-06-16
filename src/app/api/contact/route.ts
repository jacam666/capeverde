import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { firstName, lastName, company, email, phoneNumber, message } = await req.json();

    try {
        if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD || !process.env.CONTACT_EMAIL) {
            throw new Error('Email credentials are not set in the environment variables.');
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, // Your Gmail email address
                pass: process.env.EMAIL_PASSWORD, // Your Gmail email password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.CONTACT_EMAIL,
            subject: `Contact Us Form Submission from ${firstName} ${lastName}`,
            text: `
        Name: ${firstName} ${lastName}
        Company: ${company}
        Email: ${email}
        Phone Number: ${phoneNumber}

        Message:
        ${message}
    `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Internal server error' });
    }
}