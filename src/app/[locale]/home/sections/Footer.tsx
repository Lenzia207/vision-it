"use client";
import { Link } from "@/app/i18n/routing";
import useCurrentLocale from "@/app/i18n/use-current-locale";

export default function Footer({locale}: {locale: string}) {
    const imprintText = locale === 'de' ? "Impressum" : "Imprint";
    const privacyText = locale === 'de' ? "Datenschutz" : "Data Privacy";
    const currentLocale = useCurrentLocale();

    return (
        <footer className="py-8 pb-10 border-t border-white/5 text-center text-zinc-600 text-sm">
             <div className="flex flex-col items-center gap-6">
                <div className="flex gap-8">
                    <Link href="/impressum" locale={currentLocale} className="hover:text-zinc-400 transition-colors">
                        {imprintText}
                    </Link>
                    <Link href="/datenschutz" locale={currentLocale} className="hover:text-zinc-400 transition-colors">
                        {privacyText}
                    </Link>
                </div>
                <p>&copy; 2026 GENZY</p>
            </div>
        </footer>
    );
}