"use client";
import { Link } from "@/app/i18n/routing";
import { getLocalizedPath } from "@/app/i18n/routing";

export default function Footer({locale}: {locale: string}) {
    const imprint = getLocalizedPath(locale, 'imprint');
    const privacy = getLocalizedPath(locale, 'privacy');

    return (
        <footer className="py-12 pb-28 md:pb-14 text-center text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
             <div className="flex flex-col items-center gap-6">
                <p className="font-prompt font-bold text-lg" style={{ color: "var(--text-secondary)" }}>Vision<span className="text-gradient-logo-IT">IT</span></p>
                <div className="flex gap-8">
                    <Link href={imprint.path as string} locale={locale} className="transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                        {imprint.text}
                    </Link>
                    <Link href={privacy.path as string} locale={locale} className="transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                        {privacy.text}
                    </Link>
                </div>
                <p>&copy; 2026 VisionIT. All rights reserved.</p>
            </div>
        </footer>
    );
}