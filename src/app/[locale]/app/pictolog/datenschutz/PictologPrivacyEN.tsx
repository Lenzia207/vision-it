import BackgroundEffect from "@/components/BackgroundEffect";
import TitleHeader from "@/components/TitleHeader";
import { privacyH2ClassName as H2 } from "../../splitn/datenschutz/PrivacyTable";

const mail = <a href="mailto:office@vision-it.at" className="underline">office@vision-it.at</a>;

export default function PictologPrivacyEN() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffect />

      {/* Teal strip behind the fixed header, whose links are white */}
      <div aria-hidden="true" className="relative z-10 bg-(--teal) h-[73px] min-[1060px]:h-[69px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 md:pt-20 pb-16 max-w-4xl">
        <TitleHeader as="h1" title="Pictolog – Privacy Policy" />

        <div className="space-y-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-(--text-300)">
          <p className="text-sm">Last updated: November 2026</p>
          <p>This privacy policy applies to the mobile app &quot;Pictolog&quot; for Android and iOS.</p>

          <h2 className={H2}>Data controller</h2>
          <p>
            Lena Zyadeh, BSc.
            <br />
            Zuckerkandlgasse 48/2
            <br />
            1190 Vienna, Austria
          </p>

          <h2 className={H2}>Contact</h2>
          <p>For privacy questions, contact us at {mail}.</p>

          <h2 className={H2}>Summary</h2>
          <p>
            Pictolog works entirely on your device. The app needs no account, does not connect to any server of ours and does not
            transfer any of your content to us or to third parties. We receive no data about you or your use of the app.
          </p>

          <h2 className={H2}>What data does the app process?</h2>
          <p>The app stores only locally on your device:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Projects (&quot;Pictologs&quot;) with title, description, creation and last-edited date</li>
            <li>Photos you take with the camera or choose from your gallery, and the descriptions of the individual pages</li>
            <li>Your settings (theme and language)</li>
          </ul>
          <p>
            This data only leaves your device when you share or print a PDF yourself (see below) or when you have enabled a device
            backup.
          </p>

          <h2 className={H2}>Permissions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Camera:</strong> to take photos as pages. The camera is only used while the capture screen is open.
            </li>
            <li>
              <strong>Photos / gallery:</strong> to choose existing images as pages. The app only reads the images you select and
              copies them into its own storage.
            </li>
          </ul>
          <p>You can revoke these permissions at any time in your device settings. The rest of the app remains usable.</p>

          <h2 className={H2}>Sharing and printing PDFs</h2>
          <p>
            When you share or save a PDF, the app opens your operating system&apos;s share or print dialog. The PDF only goes to the
            app or recipient you choose there (for example email, messenger, cloud storage or a printer). The respective provider is
            responsible for any further processing.
          </p>

          <h2 className={H2}>Device backup</h2>
          <p>
            If you have enabled a backup on your device (for example Google backup on Android or iCloud Backup on iOS), the operating
            system may include the app&apos;s data in that backup. This is done by Google or Apple under their privacy policies and
            according to your device settings.
          </p>

          <h2 className={H2}>No analytics, no tracking, no advertising</h2>
          <p>The app contains no analytics, tracking or advertising services and creates no usage profiles.</p>

          <h2 className={H2}>App stores</h2>
          <p>
            The app is distributed through Google Play and the Apple App Store. When you download it, Google or Apple process data
            (for example your account and purchase information) under their own responsibility and privacy policies. From the app
            stores we only receive anonymised statistics such as download numbers and crash reports, if you have agreed to share them
            in your device settings.
          </p>

          <h2 className={H2}>Retention and deletion</h2>
          <p>
            Your data stays on your device until you delete it. You can delete individual pages or whole Pictologs directly in the
            app. Uninstalling the app removes all data stored by the app from your device.
          </p>

          <h2 className={H2}>Photos containing personal data</h2>
          <p>
            Photos may show people, addresses or other personal data of third parties. Please respect the rights of the people shown
            when you take and share such photos.
          </p>

          <h2 className={H2}>Your rights</h2>
          <p>
            As we receive no personal data about you, we hold no data that access, rectification or erasure requests could relate to.
            You can view, change and delete the data stored in the app yourself at any time. If you have questions, contact us at{" "}
            {mail}.
          </p>

          <h2 className={H2}>Complaints</h2>
          <p>
            If you believe that the processing of your data violates data protection law, you can lodge a complaint with the Austrian
            Data Protection Authority: Österreichische Datenschutzbehörde, Barichgasse 40–42, 1030 Vienna,{" "}
            <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="underline">www.dsb.gv.at</a>.
          </p>

          <h2 className={H2}>Changes</h2>
          <p>
            We update this privacy policy when the app or legal requirements change. The version published on this page applies.
          </p>
        </div>
      </div>
    </div>
  );
}
