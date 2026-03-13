
import BackgroundEffect from "@/components/BackgroundEffect";
import HeaderSimple from "@/components/HeaderSimple";
export default function ImprintDE() {
    return (
        <main className="relative min-h-screen">
            {/* Background Effect */}
            <BackgroundEffect />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-4xl">

                {/* Header */}
                <HeaderSimple title="Impressum" />

                {/* Imprint Details */}
                <div className="space-y-8 text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">

                    <div className="space-y-1">
                        <p className="text-xl font-medium text-white">Lena Zyadeh, BSc.</p>
                        <p>Softwareentwicklung für Webseiten und Applikationen</p>
                    </div>

                    <div className="space-y-1">
                        <p>Zuckerkandlgasse 48/2</p>
                        <p>1190 Wien</p>
                        <p>Österreich</p>
                    </div>

                    <div className="space-y-1">
                        {/* <p><span className="text-zinc-500">Tel:</span> +43 6765700757</p> */}
                        <p><span className="text-zinc-500">E-Mail:</span> <a href="mailto:office@vision-it.at" className="text-blue-400 hover:text-blue-300 transition-colors">office@vision-it.at</a></p>
                    </div>

                    <div className="pt-4 space-y-4">
                        <p>
                            <span className="block text-sm text-zinc-500 uppercase tracking-wider mb-1">UID-Nummer</span>
                            k.A.
                        </p>

                        {/* <p>
                            <span className="block text-sm text-zinc-500 uppercase tracking-wider mb-1">Mitgliedschaften</span>
                            Mitglied der WKÖ
                        </p> */}

                        <p>
                            <span className="block text-sm text-zinc-500 uppercase tracking-wider mb-1">Gewerbeordnung</span>
                            EPU                        </p>

                        <p>
                            <span className="block text-sm text-zinc-500 uppercase tracking-wider mb-1">Aufsichtsbehörde</span>
                            Bezirkshauptmannschaft Wien
                        </p>

                        {/* <p>
                            <span className="block text-sm text-zinc-500 uppercase tracking-wider mb-1">Meisterbetrieb</span>
                            Meisterprüfung abgelegt in Österreich
                        </p> */}
                    </div>

                </div>
            </div>
        </main>
    );
}