import BackgroundEffect from "@/components/BackgroundEffect";
import TitleHeader from "@/components/TitleHeader";
import Table, { privacyH2ClassName as H2 } from "./PrivacyTable";

export default function SplitnPrivacyDE() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffect />

      {/* Teal strip behind the fixed header, whose links are white */}
      <div aria-hidden="true" className="relative z-10 bg-(--teal) h-[73px] min-[1060px]:h-[69px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-16 max-w-4xl">
        <TitleHeader as="h1" title="Splitn – Datenschutzerklärung" />

        <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-(--text-300)">
          <p className="text-sm">Stand: 24. Oktober 2026</p>

          <h2 className={H2}>1. Verantwortlicher</h2>
          <p>Verantwortlich für die Verarbeitung personenbezogener Daten in der App Splitn ist:</p>
          <p>
            VisionIT
            <br />
            Zuckerkandlgasse 48/2,
            <br />
            1190 Wien, Österreich
            <br />
            <br />
            E-Mail: <a href="mailto:developer@vision-it.at" className="underline">developer@vision-it.at</a>
          </p>
          <p>Für alle Fragen zum Datenschutz und zur Ausübung Ihrer Rechte erreichen Sie uns unter dieser E-Mail-Adresse.</p>

          <h2 className={H2}>2. Welche Daten wir verarbeiten</h2>
          <p>Splitn verarbeitet nur die Daten, die für das gemeinsame Aufteilen von Ausgaben nötig sind.</p>
          <Table
            head={["Kategorie", "Daten", "Pflicht?"]}
            rows={[
              ["Konto", "E-Mail-Adresse, Benutzername, Passwort (nur als Hash gespeichert) bzw. Google-Konto-Kennung bei „Mit Google anmelden“", "Ja"],
              ["Profil", "Vorname, Nachname, Telefonnummer, Profilbild, bevorzugte Währung und Sprache", "Nein (außer Währung/Sprache, die voreingestellt sind)"],
              ["Gruppen und Ausgaben", "Gruppenname und -symbol, Mitglieder, Ausgaben (Beschreibung, Betrag, Währung, Datum, wer bezahlt hat, Aufteilung), Ausgleichszahlungen zwischen Mitgliedern", "Ja, zur Nutzung der App"],
              ["Benachrichtigungen", "Geräte-Token für Push-Benachrichtigungen und Plattform (Android/iOS)", "Nein, nur wenn Sie Benachrichtigungen erlauben"],
              ["Technische Daten", "Anmelde-Sitzungen, Zeitpunkte von Anfragen, Server-Protokolle zur Fehlersuche", "Ja"],
            ]}
          />
          <p>
            Andere Mitglieder Ihrer Gruppen sehen Ihren Namen, Benutzernamen, Ihr Profilbild sowie die gemeinsamen Ausgaben und
            Salden. Ihre E-Mail-Adresse und Telefonnummer werden anderen Nutzern nicht angezeigt. Andere Nutzer können Sie nur über
            Ihren Benutzernamen, Ihre genaue E-Mail-Adresse oder Ihren QR-Code finden.
          </p>
          <p>
            Auf Ihrem Gerät speichert die App Ihre Anmeldung (verschlüsselt), Ihre Einstellungen und eine Kopie Ihres Profils, damit
            die App schneller startet.
          </p>

          <h2 className={H2}>3. Zwecke und Rechtsgrundlagen</h2>
          <p>Wir verarbeiten Ihre Daten, um Ihnen die App bereitzustellen, und stützen uns dabei auf die DSGVO.</p>
          <Table
            head={["Zweck", "Rechtsgrundlage"]}
            rows={[
              ["Konto anlegen, Anmeldung, Gruppen und Ausgaben verwalten, Salden berechnen", "Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)"],
              ["E-Mails mit Bestätigungs- und Passwort-Reset-Codes", "Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)"],
              ["Push-Benachrichtigungen über neue Ausgaben und Ausgleichsanfragen", "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), jederzeit in den Geräteeinstellungen widerrufbar"],
              ["Sicherheit, Missbrauchsschutz und Fehlersuche (Server-Protokolle)", "Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)"],
              ["Vorname und Ausgaben bleiben nach einer Kontolöschung in gemeinsamen Gruppen sichtbar (siehe Abschnitt 6)", "Berechtigtes Interesse der anderen Gruppenmitglieder an korrekten Abrechnungen (Art. 6 Abs. 1 lit. f DSGVO)"],
            ]}
          />
          <p>Wir nutzen Ihre Daten nicht für Werbung, verkaufen sie nicht und erstellen keine Profile über Sie.</p>

          <h2 className={H2}>4. Empfänger und Auftragsverarbeiter</h2>
          <p>
            Für den Betrieb der App setzen wir folgende Dienstleister ein. Mit allen bestehen Verträge zur Auftragsverarbeitung nach
            Art. 28 DSGVO.
          </p>
          <Table
            head={["Dienst", "Anbieter", "Zweck", "Standort der Daten"]}
            rows={[
              ["Render", "Render Services, Inc., USA", "Betrieb des App-Servers", "Frankfurt"],
              ["Supabase", "Supabase, Inc., USA", "Datenbank mit Konto-, Gruppen- und Ausgabendaten, Speicher für Profilbilder", "EU (Irland)"],
              ["Firebase Cloud Messaging", "Google Ireland Ltd. / Google LLC", "Zustellung von Push-Benachrichtigungen", "EU/USA"],
              ["Google Sign-In", "Google Ireland Ltd. / Google LLC", "Anmeldung mit Google-Konto, nur wenn Sie diese Option wählen", "EU/USA"],
              ["Resend", "Resend, Inc., USA", "Versand von E-Mails mit Bestätigungs- und Passwort-Reset-Codes", "USA"],
            ]}
          />
          <p>
            Andere Mitglieder Ihrer Gruppen erhalten die in Abschnitt 2 genannten Gruppendaten. Darüber hinaus geben wir Daten nur
            weiter, wenn wir gesetzlich dazu verpflichtet sind.
          </p>

          <h2 className={H2}>5. Übermittlung in Drittländer</h2>
          <p>
            Einige der genannten Anbieter haben ihren Sitz in den USA, daher können Daten dorthin übermittelt werden. Die Übermittlung
            stützt sich auf den Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework, soweit der Anbieter danach
            zertifiziert ist, und andernfalls auf die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).
          </p>
          <p>Die Datenbank mit Ihren Konto-, Gruppen- und Ausgabendaten liegt in der EU (Irland).</p>

          <h2 className={H2}>6. Speicherdauer und Löschung Ihres Kontos</h2>
          <p>
            Wir speichern Ihre Daten, solange Ihr Konto besteht. Sie können Ihr Konto jederzeit in der App unter „Account löschen“
            löschen oder die Löschung per E-Mail an{" "}
            <a href="mailto:developer@vision-it.at" className="underline">developer@vision-it.at</a> beantragen.
          </p>
          <p>Bei der Löschung passiert Folgendes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Gelöscht werden:</strong> E-Mail-Adresse, Nachname, Telefonnummer, Profilbild, Passwort, Google-Anmeldedaten,
              alle Anmelde-Sitzungen und Geräte-Token für Benachrichtigungen. Eine Anmeldung mit diesem Konto ist danach nicht mehr
              möglich.
            </li>
            <li>
              <strong>Bleiben erhalten:</strong> Ihr Vorname (bzw. Benutzername) mit dem Zusatz „(gelöscht)“ sowie Ihre Ausgaben und
              Ausgleichszahlungen in Gruppen, in denen noch andere Mitglieder aktiv sind. Ohne diese Angaben wären die Abrechnungen und
              Salden der anderen Mitglieder falsch.
            </li>
            <li>
              <strong>Vollständig gelöscht werden:</strong> Gruppen, in denen nach Ihrer Löschung kein aktives Mitglied mehr ist, samt
              allen Ausgaben.
            </li>
          </ul>
          <p>Server-Protokolle werden nach [Anzahl] Tagen automatisch gelöscht. Gesetzliche Aufbewahrungspflichten bleiben unberührt.</p>

          <h2 className={H2}>7. Berechtigungen auf Ihrem Gerät</h2>
          <p>
            Die App fragt nur die Berechtigungen an, die für eine Funktion nötig sind, und erst dann, wenn Sie diese Funktion nutzen.
          </p>
          <Table
            head={["Berechtigung", "Wofür"]}
            rows={[
              ["Kamera", "QR-Codes anderer Nutzer scannen, um eine Gruppe zu erstellen; optional ein Profilfoto aufnehmen"],
              ["Fotoauswahl", "Ein Profilbild auswählen. Die App sieht nur das Foto, das Sie auswählen, nicht Ihre gesamte Galerie"],
              ["Benachrichtigungen", "Hinweise auf neue Ausgaben und Ausgleichsanfragen"],
              ["Internet", "Verbindung zum Splitn-Server"],
            ]}
          />
          <p>Sie können diese Berechtigungen jederzeit in den Einstellungen Ihres Geräts widerrufen.</p>

          <h2 className={H2}>8. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Auskunft über die zu Ihnen gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO), mit der in Abschnitt 6 beschriebenen Einschränkung für gemeinsame Gruppen</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen Verarbeitungen auf Grundlage unseres berechtigten Interesses (Art. 21 DSGVO)</li>
            <li>Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
          <p>
            Schreiben Sie uns dazu an <a href="mailto:developer@vision-it.at" className="underline">developer@vision-it.at</a>.
            Außerdem können Sie sich bei der österreichischen Datenschutzbehörde beschweren: Barichgasse 40–42, 1030 Wien,{" "}
            <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="underline">www.dsb.gv.at</a>.
          </p>

          <h2 className={H2}>9. Keine Werbung, kein Tracking</h2>
          <p>Splitn enthält keine Werbung, keine Analyse- oder Tracking-Dienste und keine Social-Media-Plugins.</p>
          <p>
            <strong>Mindestalter:</strong> Die App richtet sich an Personen ab 16 Jahren. Wir verarbeiten wissentlich keine Daten von
            Kindern unter 16 Jahren ohne Zustimmung der Erziehungsberechtigten.
          </p>
          <p>
            <strong>Änderungen:</strong> Wenn sich die App oder die eingesetzten Dienste ändern, passen wir diese Datenschutzerklärung
            an. Die aktuelle Fassung finden Sie immer unter{" "}
            <a href="https://www.vision-it.at/app/splitn/datenschutz" className="underline">www.vision-it.at/app/splitn/datenschutz</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
