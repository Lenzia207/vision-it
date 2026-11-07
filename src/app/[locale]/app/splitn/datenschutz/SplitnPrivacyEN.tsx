import BackgroundEffect from "@/components/BackgroundEffect";
import TitleHeader from "@/components/TitleHeader";
import Table, { privacyH2ClassName as H2 } from "./PrivacyTable";

export default function SplitnPrivacyEN() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffect />

      {/* Teal strip behind the fixed header, whose links are white */}
      <div aria-hidden="true" className="relative z-10 bg-(--teal) h-[73px] min-[1060px]:h-[69px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-16 max-w-4xl">
        <TitleHeader as="h1" title="Splitn – Privacy Policy" />

        <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-(--text-300)">
          <p className="text-sm">Last updated: 24 October 2026</p>

          <h2 className={H2}>1. Controller</h2>
          <p>The controller responsible for processing personal data in the Splitn app is:</p>
          <p>
            VisionIT
            <br />
            Zuckerkandlgasse 48/2,
            <br />
            1190 Vienna, Austria
            <br />
            <br />
            Email: <a href="mailto:developer@vision-it.at" className="underline">developer@vision-it.at</a>
          </p>
          <p>For any questions about data protection and to exercise your rights, you can reach us at this email address.</p>

          <h2 className={H2}>2. What data we process</h2>
          <p>Splitn only processes the data needed to split expenses together.</p>
          <Table
            head={["Category", "Data", "Required?"]}
            rows={[
              ["Account", "Email address, username, password (stored only as a hash) or Google account ID when using “Sign in with Google”", "Yes"],
              ["Profile", "First name, last name, phone number, profile picture, preferred currency and language", "No (except currency/language, which are preset)"],
              ["Groups and expenses", "Group name and icon, members, expenses (description, amount, currency, date, who paid, split), settlement payments between members", "Yes, to use the app"],
              ["Notifications", "Device token for push notifications and platform (Android/iOS)", "No, only if you allow notifications"],
              ["Technical data", "Login sessions, request times, server logs for troubleshooting", "Yes"],
            ]}
          />
          <p>
            Other members of your groups can see your name, username, profile picture and the shared expenses and balances. Your email
            address and phone number are not shown to other users. Other users can only find you by your username, your exact email
            address or your QR code.
          </p>
          <p>
            On your device, the app stores your login (encrypted), your settings and a copy of your profile so that the app starts
            faster.
          </p>

          <h2 className={H2}>3. Purposes and legal bases</h2>
          <p>We process your data to provide you with the app and rely on the GDPR to do so.</p>
          <Table
            head={["Purpose", "Legal basis"]}
            rows={[
              ["Creating an account, signing in, managing groups and expenses, calculating balances", "Performance of a contract (Art. 6(1)(b) GDPR)"],
              ["Emails with verification and password reset codes", "Performance of a contract (Art. 6(1)(b) GDPR)"],
              ["Push notifications about new expenses and settlement requests", "Consent (Art. 6(1)(a) GDPR), which you can withdraw at any time in your device settings"],
              ["Security, abuse prevention and troubleshooting (server logs)", "Legitimate interest (Art. 6(1)(f) GDPR)"],
              ["First name and expenses remain visible in shared groups after an account is deleted (see section 6)", "Legitimate interest of the other group members in correct settlements (Art. 6(1)(f) GDPR)"],
            ]}
          />
          <p>We do not use your data for advertising, we do not sell it and we do not create profiles about you.</p>

          <h2 className={H2}>4. Recipients and processors</h2>
          <p>
            We use the following service providers to operate the app. Data processing agreements under Art. 28 GDPR are in place with
            all of them.
          </p>
          <Table
            head={["Service", "Provider", "Purpose", "Data location"]}
            rows={[
              ["Render", "Render Services, Inc., USA", "Running the app server", "Frankfurt"],
              ["Supabase", "Supabase, Inc., USA", "Database with account, group and expense data, storage for profile pictures", "EU (Ireland)"],
              ["Firebase Cloud Messaging", "Google Ireland Ltd. / Google LLC", "Delivery of push notifications", "EU/USA"],
              ["Google Sign-In", "Google Ireland Ltd. / Google LLC", "Signing in with a Google account, only if you choose this option", "EU/USA"],
              ["Resend", "Resend, Inc., USA", "Sending emails with verification and password reset codes", "USA"],
            ]}
          />
          <p>
            Other members of your groups receive the group data listed in section 2. Beyond that, we only share data if we are legally
            required to do so.
          </p>

          <h2 className={H2}>5. Transfers to third countries</h2>
          <p>
            Some of the providers listed are based in the USA, so data may be transferred there. Such transfers are based on the
            European Commission&apos;s adequacy decision for the EU-US Data Privacy Framework where the provider is certified under it,
            and otherwise on the European Commission&apos;s standard contractual clauses (Art. 46(2)(c) GDPR).
          </p>
          <p>The database with your account, group and expense data is located in the EU (Ireland).</p>

          <h2 className={H2}>6. Retention period and deleting your account</h2>
          <p>
            We store your data for as long as your account exists. You can delete your account at any time in the app under “Delete
            account” or request deletion by email to{" "}
            <a href="mailto:developer@vision-it.at" className="underline">developer@vision-it.at</a>.
          </p>
          <p>When your account is deleted:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Deleted:</strong> email address, last name, phone number, profile picture, password, Google sign-in data, all
              login sessions and device tokens for notifications. It is no longer possible to sign in with this account.
            </li>
            <li>
              <strong>Retained:</strong> your first name (or username) with the suffix “(deleted)” as well as your expenses and
              settlement payments in groups where other members are still active. Without this information, the other members&apos;
              settlements and balances would be wrong.
            </li>
            <li>
              <strong>Completely deleted:</strong> groups with no active member left after your deletion, including all their
              expenses.
            </li>
          </ul>
          <p>Server logs are deleted automatically after [number] days. Statutory retention obligations remain unaffected.</p>

          <h2 className={H2}>7. Permissions on your device</h2>
          <p>The app only requests the permissions a feature needs, and only when you use that feature.</p>
          <Table
            head={["Permission", "Used for"]}
            rows={[
              ["Camera", "Scanning other users' QR codes to create a group; optionally taking a profile photo"],
              ["Photo picker", "Choosing a profile picture. The app only sees the photo you select, not your entire gallery"],
              ["Notifications", "Alerts about new expenses and settlement requests"],
              ["Internet", "Connecting to the Splitn server"],
            ]}
          />
          <p>You can revoke these permissions at any time in your device settings.</p>

          <h2 className={H2}>8. Your rights</h2>
          <p>You have the right at any time to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the data stored about you (Art. 15 GDPR)</li>
            <li>Rectification of inaccurate data (Art. 16 GDPR)</li>
            <li>Erasure (Art. 17 GDPR), subject to the restriction for shared groups described in section 6</li>
            <li>Restriction of processing (Art. 18 GDPR)</li>
            <li>Data portability (Art. 20 GDPR)</li>
            <li>Object to processing based on our legitimate interest (Art. 21 GDPR)</li>
            <li>Withdraw consent with effect for the future (Art. 7(3) GDPR)</li>
          </ul>
          <p>
            To do so, write to us at <a href="mailto:developer@vision-it.at" className="underline">developer@vision-it.at</a>. You can
            also lodge a complaint with the Austrian Data Protection Authority (Datenschutzbehörde): Barichgasse 40–42, 1030 Vienna,{" "}
            <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="underline">www.dsb.gv.at</a>.
          </p>

          <h2 className={H2}>9. No advertising, no tracking</h2>
          <p>Splitn contains no advertising, no analytics or tracking services and no social media plugins.</p>
          <p>
            <strong>Minimum age:</strong> The app is intended for people aged 16 and over. We do not knowingly process data of children
            under 16 without the consent of their parents or guardians.
          </p>
          <p>
            <strong>Changes:</strong> If the app or the services we use change, we will update this privacy policy. You can always find
            the current version at{" "}
            <a href="https://www.vision-it.at/en/app/splitn/datenschutz" className="underline">www.vision-it.at/en/app/splitn/datenschutz</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
