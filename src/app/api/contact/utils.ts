import nodemailer from 'nodemailer';
// Email validation
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Create a reusable transporter object using SMTP transport
export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // use app password or OAuth2
    },
    tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'production',
    },
});