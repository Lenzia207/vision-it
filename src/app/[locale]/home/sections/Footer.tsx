"use client";
import { Link } from "@/app/i18n/routing";

const getLocalizedPath = (locale: string, page: 'imprint' | 'privacy') => {
    const paths = {
        imprint: {
            de: { path: "/impressum", text: "Impressum" },
            en: { path: "/imprint", text: "Imprint" }
        },
        privacy: {
            de: { path: "/datenschutz", text: "Datenschutz" },
            en: { path: "/data-privacy", text: "Data Privacy" }
        }
    };
    
    return paths[page][locale as 'de' | 'en'];
};

export default function Footer({locale}: {locale: string}) {
    const imprint = getLocalizedPath(locale, 'imprint');
    const privacy = getLocalizedPath(locale, 'privacy');

    return (
        <footer className="py-8 pb-10 border-t border-white/5 text-center text-zinc-600 text-sm">
             <div className="flex flex-col items-center gap-6">
                <div className="flex gap-8">
                    <Link href={imprint.path as string} className="hover:text-zinc-400 transition-colors">
                        {imprint.text}
                    </Link>
                    <Link href={privacy.path as string} className="hover:text-zinc-400 transition-colors">
                        {privacy.text}
                    </Link>
                </div>
                <p>&copy; 2026 GENZY</p>
            </div>
        </footer>
    );
}