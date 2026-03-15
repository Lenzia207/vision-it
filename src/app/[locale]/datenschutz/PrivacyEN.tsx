import type { Metadata } from "next";
import BackgroundEffect from "@/components/BackgroundEffect";
import HeaderSimple from "@/components/HeaderSimple";

export const metadata: Metadata = {
  title: "Privacy Policy — VisionIT",
  description: "How we process data, cookies and contact options.",
};

export default function PrivacyEN() {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffect />

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 max-w-4xl">
        <HeaderSimple title="Privacy Policy" />

        <div className="space-y-8 text-zinc-300 text-lg leading-relaxed max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold">Data Controler</h3>

          <p>Lena Zyadeh, BSc.</p>

          <h3 className="text-2xl font-bold">Contact</h3>
          <p>
            For privacy inquiries please contact:{" "}
            <strong>office@vision-it.at</strong>.
          </p>

          <h3 className="text-2xl font-bold">What data we process</h3>
          <p>
            We only process data you provide directly (e.g. name, email address
            and message via the contact form). Technical data (e.g. IP address,
            timestamps) may be stored short‑term in server logs for operational
            and security reasons.
          </p>

          <h3 className="text-2xl font-bold">Purposes and legal bases</h3>
          <ul>
            <li>
              Contact handling: processing necessary to handle and respond to
              your inquiry (Art. 6(1)(b) and/or 6(1)(f) GDPR).
            </li>
            <li>
              Website operation and security: legitimate interest to operate and
              secure the site (Art. 6(1)(f) GDPR).
            </li>
          </ul>

          <h3 className="text-2xl font-bold">No analytics / tracking</h3>
          <p>
            We do not use analytics or tracking services. There is no profiling
            or marketing tracking on this site.
          </p>

          <h3 className="text-2xl font-bold">Contact form / Email</h3>
          <p>
            When you submit the contact form, the message is sent by email to{" "}
            <strong>office@genzy.dev</strong>. The email service provider
            processes these messages as part of delivering email; please refer
            to your mail provider’s privacy information. The processing is
            necessary to respond to your request.
          </p>

          <h3 className="text-2xl font-bold">External links</h3>
          <p>
            The site may contain links to external websites. We are not
            responsible for the privacy practices or content of those sites;
            visiting them may involve data transfer to third parties.
          </p>

          <h3 className="text-2xl font-bold">Retention</h3>
          <p>
            Personal data is retained only as long as necessary to fulfil the
            purpose or to comply with legal obligations.
          </p>

          <h3 className="text-2xl font-bold">Recipients</h3>
          <p>
            Service providers (hosting, email) may process data as processors.
            Where applicable, processors are contractually bound to protect
            data.
          </p>

          <h3 className="text-2xl font-bold">Your rights</h3>
          <p>
            You have the right to access, rectify, erase, restrict processing,
            data portability and to object. To exercise these rights contact{" "}
            <strong>hello@genzy.com</strong>.
          </p>

          <h3 className="text-2xl font-bold">Withdrawal &amp; complaints</h3>
          <p>
            You may withdraw any consent at any time. If you consider that data
            processing violates GDPR you may complain to a supervisory
            authority.
          </p>

          <h3 className="text-2xl font-bold">Security</h3>
          <p>
            We implement appropriate technical and organisational measures to
            protect personal data, but absolute security cannot be guaranteed.
          </p>
          <h3 className="text-2xl font-bold">Google Fonts</h3>
          <p>
            This website uses the Google Fonts <em>Urbanist</em> and
            <em> Playfair Display</em>. When using Next.js font optimization
            (next/font) the required font files are typically downloaded at build
            time and served locally from the site, so no external requests to
            Google (fonts.googleapis.com / fonts.gstatic.com) occur at runtime.
            If the fonts are loaded directly from Googles servers, requests to
            Google may occur and data could be transferred to Google (potentially
            outside the EU). In that case processing is based on legitimate
            interests (Art. 6(1)(f) GDPR). To avoid external transfers consider
            self‑hosting the fonts.
          </p>

          <p>
            This privacy notice is tailored to the described setup: no
            analytics, contact form delivers messages directly to{" "}
            <strong>hello@genzy.com</strong>, and the site may contain external
            links. Add exact provider names and details about cross‑border
            transfers if applicable.
          </p>
        </div>
      </div>
    </main>
  );
}
