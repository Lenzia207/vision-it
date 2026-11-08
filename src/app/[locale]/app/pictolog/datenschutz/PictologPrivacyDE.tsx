import BackgroundEffect from "@/components/BackgroundEffect";
import TitleHeader from "@/components/TitleHeader";
import { privacyH2ClassName as H2 } from "../../splitn/datenschutz/PrivacyTable";

const mail = <a href="mailto:office@vision-it.at" className="underline">office@vision-it.at</a>;

export default function PictologPrivacyDE() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffect />

      {/* Teal strip behind the fixed header, whose links are white */}
      <div aria-hidden="true" className="relative z-10 bg-(--teal) h-[73px] min-[1060px]:h-[69px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-16 max-w-4xl">
        <TitleHeader as="h1" title="Pictolog – Datenschutzerklärung" />

        <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-(--text-300)">
          <p className="text-sm">Stand: November 2026</p>
          <p>Diese Datenschutzerklärung gilt für die mobile App „Pictolog“ für Android und iOS.</p>

          <h2 className={H2}>Verantwortlicher</h2>
          <p>
            Lena Zyadeh, BSc.
            <br />
            Zuckerkandlgasse 48/2
            <br />
            1190 Wien, Österreich
          </p>

          <h2 className={H2}>Kontakt</h2>
          <p>Bei Fragen zum Datenschutz erreichen Sie uns unter {mail}.</p>

          <h2 className={H2}>Das Wichtigste in Kürze</h2>
          <p>
            Pictolog funktioniert vollständig auf Ihrem Gerät. Die App benötigt kein Benutzerkonto, verbindet sich mit keinem Server
            von uns und überträgt keine Ihrer Inhalte an uns oder an Dritte. Wir erhalten keine Daten über Sie oder Ihre Nutzung der
            App.
          </p>

          <h2 className={H2}>Welche Daten verarbeitet die App?</h2>
          <p>Die App speichert ausschließlich lokal auf Ihrem Gerät:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Projekte („Pictologs“) mit Titel, Beschreibung, Erstellungs- und Bearbeitungsdatum</li>
            <li>
              Fotos, die Sie mit der Kamera aufnehmen oder aus Ihrer Galerie auswählen, sowie die Beschreibungen zu den einzelnen
              Seiten
            </li>
            <li>Ihre Einstellungen (Design und Sprache)</li>
          </ul>
          <p>
            Diese Daten verlassen Ihr Gerät nur, wenn Sie selbst ein PDF teilen oder drucken (siehe unten) oder wenn Sie eine
            Gerätesicherung aktiviert haben.
          </p>

          <h2 className={H2}>Berechtigungen</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Kamera:</strong> um Fotos als Seiten aufzunehmen. Die Kamera wird nur verwendet, während Sie die Aufnahmeansicht
              geöffnet haben.
            </li>
            <li>
              <strong>Fotos / Galerie:</strong> um vorhandene Bilder als Seiten auszuwählen. Die App liest nur die Bilder, die Sie
              auswählen, und kopiert sie in ihren eigenen Speicherbereich.
            </li>
          </ul>
          <p>
            Sie können diese Berechtigungen jederzeit in den Einstellungen Ihres Geräts widerrufen. Die übrigen Funktionen der App
            bleiben nutzbar.
          </p>

          <h2 className={H2}>Teilen und Drucken von PDFs</h2>
          <p>
            Wenn Sie ein PDF teilen oder speichern, öffnet die App den Teilen- bzw. Druckdialog Ihres Betriebssystems. Das PDF geht
            nur an die App oder den Empfänger, den Sie dort auswählen (z. B. E-Mail, Messenger, Cloud-Speicher, Drucker). Für die
            weitere Verarbeitung ist der jeweilige Anbieter verantwortlich.
          </p>

          <h2 className={H2}>Gerätesicherung</h2>
          <p>
            Wenn Sie auf Ihrem Gerät eine Sicherung aktiviert haben (z. B. Google-Sicherung unter Android oder iCloud-Backup unter
            iOS), können die Daten der App vom Betriebssystem in diese Sicherung aufgenommen werden. Dies erfolgt durch Google bzw.
            Apple nach deren Datenschutzbestimmungen und nach Ihren Geräteeinstellungen.
          </p>

          <h2 className={H2}>Keine Analytik, kein Tracking, keine Werbung</h2>
          <p>Die App enthält keine Analyse-, Tracking- oder Werbedienste und erstellt keine Nutzungsprofile.</p>

          <h2 className={H2}>App Stores</h2>
          <p>
            Die App wird über Google Play und den Apple App Store bereitgestellt. Beim Herunterladen verarbeiten Google bzw. Apple
            Daten (z. B. Ihr Konto und Kaufinformationen) in eigener Verantwortung. Es gelten die Datenschutzerklärungen dieser
            Anbieter. Wir erhalten von den App Stores lediglich anonymisierte Statistiken, z. B. Download-Zahlen und Absturzberichte,
            sofern Sie der Weitergabe in Ihren Geräteeinstellungen zugestimmt haben.
          </p>

          <h2 className={H2}>Speicherdauer und Löschung</h2>
          <p>
            Die Daten bleiben auf Ihrem Gerät, bis Sie sie löschen. Sie können einzelne Seiten oder ganze Pictologs direkt in der App
            löschen. Wenn Sie die App deinstallieren, werden alle in der App gespeicherten Daten von Ihrem Gerät entfernt.
          </p>

          <h2 className={H2}>Fotos mit personenbezogenen Daten</h2>
          <p>
            Fotos können Personen, Adressen oder andere personenbezogene Daten Dritter zeigen. Bitte beachten Sie beim Aufnehmen und
            Weitergeben solcher Fotos die Rechte der abgebildeten Personen.
          </p>

          <h2 className={H2}>Ihre Rechte</h2>
          <p>
            Da wir keine personenbezogenen Daten über Sie erhalten, liegen uns keine Daten vor, auf die sich Auskunft, Berichtigung
            oder Löschung beziehen könnten. Die in der App gespeicherten Daten können Sie jederzeit selbst einsehen, ändern und
            löschen. Bei Fragen wenden Sie sich gerne an {mail}.
          </p>

          <h2 className={H2}>Beschwerde</h2>
          <p>
            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der
            österreichischen Datenschutzbehörde beschweren: Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Wien,{" "}
            <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="underline">www.dsb.gv.at</a>.
          </p>

          <h2 className={H2}>Änderungen</h2>
          <p>
            Wir passen diese Datenschutzerklärung an, wenn sich die App oder die rechtlichen Anforderungen ändern. Es gilt die
            jeweils auf dieser Seite veröffentlichte Fassung.
          </p>
        </div>
      </div>
    </div>
  );
}
