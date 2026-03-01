"use client";
import { Link } from "@/app/i18n/routing";
import { getLocalizedPath } from "@/app/i18n/routing";

export default function Footer({locale}: {locale: string}) {
    const imprint = getLocalizedPath(locale, 'imprint');
    const privacy = getLocalizedPath(locale, 'privacy');

    return (
        <footer className="py-8 pb-10 border-t border-white/5 text-center text-zinc-600 text-sm">
             <div className="flex flex-col items-center gap-6">
                <div className="flex gap-8">
                    <Link href={imprint.path as string} locale={locale} className="hover:text-zinc-400 transition-colors">
                        {imprint.text}
                    </Link>
                    <Link href={privacy.path as string} locale={locale} className="hover:text-zinc-400 transition-colors">
                        {privacy.text}
                    </Link>
                </div>
                <p>&copy; 2026 VisionIT</p>
            </div>
        </footer>
    );
}