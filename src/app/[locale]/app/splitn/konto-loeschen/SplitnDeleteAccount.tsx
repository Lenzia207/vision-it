import BackgroundEffect from "@/components/BackgroundEffect";
import TitleHeader from "@/components/TitleHeader";
import { splitnPrivacyUrl } from "@/app/configs/configs";
import { privacyH2ClassName as H2 } from "../datenschutz/PrivacyTable";

const mail = "developer@vision-it.at";

const MailLink = () => (
  <a href={`mailto:${mail}`} className="underline">
    {mail}
  </a>
);

export default function SplitnDeleteAccount({ locale }: { locale: "de" | "en" }) {
  const de = locale === "de";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffect />

      {/* Teal strip behind the fixed header, whose links are white */}
      <div aria-hidden="true" className="relative z-10 bg-(--teal) h-[73px] min-[1060px]:h-[69px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-16 max-w-4xl">
        <TitleHeader as="h1" title={de ? "Splitn – Konto löschen" : "Splitn – Delete your account"} />

        <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-(--text-300)">
          {de ? (
            <p>
              Auf dieser Seite erfahren Sie, wie Sie Ihr Konto in der App <strong>Splitn</strong> von VisionIT löschen und
              welche Daten dabei gelöscht oder aufbewahrt werden.
            </p>
          ) : (
            <p>
              This page explains how to delete your account in the <strong>Splitn</strong> app by VisionIT and which data is
              deleted or kept.
            </p>
          )}

          <h2 className={H2}>{de ? "Option 1: Direkt in der App" : "Option 1: Directly in the app"}</h2>
          {de ? (
            <ol className="list-decimal pl-6 space-y-2">
              <li>Öffnen Sie Splitn und melden Sie sich an.</li>
              <li>Tippen Sie auf der Startseite oben rechts auf Ihr Profilbild.</li>
              <li>Scrollen Sie auf der Kontoseite ganz nach unten und tippen Sie auf „Account löschen“.</li>
              <li>Bestätigen Sie mit „Account löschen“.</li>
            </ol>
          ) : (
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open Splitn and sign in.</li>
              <li>On the home screen, tap your profile picture in the top right corner.</li>
              <li>Scroll to the bottom of the account page and tap “Delete Account”.</li>
              <li>Confirm with “Delete Account”.</li>
            </ol>
          )}
          <p>
            {de
              ? "Ihr Konto wird sofort gelöscht. Dieser Schritt kann nicht rückgängig gemacht werden."
              : "Your account is deleted immediately. This cannot be undone."}
          </p>

          <h2 className={H2}>{de ? "Option 2: Per E-Mail" : "Option 2: By email"}</h2>
          {de ? (
            <p>
              Wenn Sie keinen Zugriff mehr auf die App haben, schreiben Sie an <MailLink /> mit dem Betreff „Splitn – Konto
              löschen“. Senden Sie die E-Mail bitte von der Adresse, mit der Sie bei Splitn registriert sind, oder nennen Sie
              Ihren Benutzernamen. Wir löschen Ihr Konto innerhalb von 30 Tagen und bestätigen Ihnen die Löschung per E-Mail.
            </p>
          ) : (
            <p>
              If you can no longer access the app, write to <MailLink /> with the subject “Splitn – delete account”. Please
              send the email from the address you registered with Splitn, or include your username. We delete your account
              within 30 days and confirm the deletion by email.
            </p>
          )}

          <h2 className={H2}>{de ? "Welche Daten gelöscht werden" : "Which data is deleted"}</h2>
          {de ? (
            <ul className="list-disc pl-6 space-y-2">
              <li>E-Mail-Adresse, Benutzername, Nachname, Telefonnummer und Profilbild</li>
              <li>Passwort, Google-Anmeldedaten und alle Anmelde-Sitzungen</li>
              <li>Geräte-Token für Push-Benachrichtigungen</li>
              <li>Ihre Liste blockierter Nutzer</li>
              <li>Offene Ausgleichsanfragen, an denen Sie beteiligt sind (sie werden abgelehnt)</li>
              <li>Gruppen, in denen nach Ihrer Löschung kein aktives Mitglied mehr ist, samt allen Ausgaben</li>
            </ul>
          ) : (
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address, username, last name, phone number and profile picture</li>
              <li>Password, Google sign-in data and all login sessions</li>
              <li>Device tokens for push notifications</li>
              <li>Your list of blocked users</li>
              <li>Open settlement requests you are part of (they are rejected)</li>
              <li>Groups with no active member left after your deletion, including all their expenses</li>
            </ul>
          )}
          <p>
            {de
              ? "Eine Anmeldung mit dem gelöschten Konto ist danach nicht mehr möglich."
              : "You can no longer sign in with the deleted account."}
          </p>

          <h2 className={H2}>{de ? "Welche Daten erhalten bleiben" : "Which data is kept"}</h2>
          {de ? (
            <p>
              In Gruppen, in denen noch andere Mitglieder aktiv sind, bleiben Ihr Vorname (bzw. Benutzername) mit dem Zusatz
              „(gelöscht)“ sowie Ihre Ausgaben und Ausgleichszahlungen erhalten. Ohne diese Angaben wären die Abrechnungen und
              Salden der anderen Mitglieder falsch. Diese Daten bleiben so lange bestehen wie die jeweilige Gruppe und werden
              gelöscht, sobald die Gruppe kein aktives Mitglied mehr hat.
            </p>
          ) : (
            <p>
              In groups that still have other active members, your first name (or username) marked “(deleted)” and your
              expenses and settlements are kept. Without them, the other members’ expenses and balances would be wrong. This
              data is kept for as long as the group exists and is deleted once the group has no active member left.
            </p>
          )}

          <h2 className={H2}>{de ? "Weitere Informationen" : "More information"}</h2>
          {de ? (
            <p>
              Details zur Verarbeitung Ihrer Daten finden Sie in der{" "}
              <a href={`/de${splitnPrivacyUrl}`} className="underline">
                Datenschutzerklärung von Splitn
              </a>
              . Bei Fragen erreichen Sie uns unter <MailLink />.
            </p>
          ) : (
            <p>
              For details on how your data is processed, see the{" "}
              <a href={`/en${splitnPrivacyUrl}`} className="underline">
                Splitn privacy policy
              </a>
              . If you have any questions, contact us at <MailLink />.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
