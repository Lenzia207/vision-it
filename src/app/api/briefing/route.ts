export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { transporter } from "../_shared/mailer";
import { formatBriefingEmail } from "./email-format";
import { parseAndValidate } from "./validation";

export async function POST(request: Request) {
    // Payload size guard
    const contentLength = request.headers.get("content-length");
    if (contentLength && Number(contentLength) > 50_000) {
        return NextResponse.json({ success: false, error: "Payload too large" }, { status: 413 });
    }

    // Parse JSON
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
    }

    // Validate & sanitize — never trust raw input
    const result = parseAndValidate(body);
    if ("error" in result) {
        return NextResponse.json(
            { success: false, error: result.error },
            { status: 400 }
        );
    }

    const { data } = result;
    const replyTo = data.emailPhone.split("/")[0].trim();

    try {
        const { subject, html, text } = formatBriefingEmail(data);

        await transporter.sendMail({
            from:    process.env.SMTP_USER,
            to:      process.env.SMTP_USER,
            replyTo, // sanitized — no header injection possible
            subject,
            text,
            html,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Briefing email error:", err);
        return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }
}
