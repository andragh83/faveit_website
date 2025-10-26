import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - FaveIT",
  description:
    "Terms of Service for FaveIT - Learn about the rules and guidelines for using our social FAVEs app.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-baseText mb-8">
          Terms of Service for FaveIT
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-textLighter mb-8">
            <strong>Last updated:</strong> October 26, 2025
          </p>

          <p className="text-textLighter mb-8">
            <strong>Effective date:</strong> October 26, 2025
          </p>

          <p className="text-textLighter mb-8">
            Welcome to FaveIT, a social wishlist app operated by Andromeda
            Technologies SRL ("we", "our", or "us").
          </p>

          <p className="text-textLighter mb-8">
            These Terms of Service ("Terms") govern your use of the FaveIT
            mobile application (the "App") and related services.
          </p>

          <p className="text-textLighter mb-8">
            By creating an account or using FaveIT, you agree to these Terms.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              1. Eligibility
            </h2>
            <p className="text-textLighter mb-4">To use FaveIT, you must:</p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                Be at least 16 years old, or the age of digital consent in your
                country.
              </li>
              <li>Have the legal capacity to agree to these Terms.</li>
            </ul>
            <p className="text-textLighter mb-4">
              If you are under 16, you may not use or register for FaveIT.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              2. Your Account
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                You must provide accurate and up-to-date information when
                creating an account.
              </li>
              <li>
                You are responsible for keeping your login credentials secure.
              </li>
              <li>
                We reserve the right to suspend or delete accounts that violate
                these Terms or misuse the platform.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              3. User Content
            </h2>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              a. Ownership
            </h3>
            <p className="text-textLighter mb-4">
              You retain full ownership of the content (FAVEs items, photos,
              descriptions, etc.) you upload to FaveIT.
            </p>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              b. License to Us
            </h3>
            <p className="text-textLighter mb-4">
              By posting or uploading content, you grant us a non-exclusive,
              worldwide, royalty-free license to store, display, and share your
              content within the app to provide the service.
            </p>
            <p className="text-textLighter mb-4">
              We do not sell or share your content with third parties outside
              the FaveIT ecosystem.
            </p>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              c. Responsibility
            </h3>
            <p className="text-textLighter mb-4">
              You are solely responsible for the content you share. You must not
              upload:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Copyrighted material without permission</li>
              <li>Illegal, abusive, or offensive content</li>
              <li>Misleading or fraudulent product information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              4. Social and Sharing Features
            </h2>
            <p className="text-textLighter mb-4">FaveIT allows you to:</p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Connect with friends by searching for their app handles</li>
              <li>
                Share FAVEs lists and view others' FAVEs lists within the app
              </li>
            </ul>
            <p className="text-textLighter mb-4">
              You must respect other users' privacy and not misuse or
              redistribute their shared content outside the app without consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              5. Data and Privacy
            </h2>
            <p className="text-textLighter mb-4">
              Your use of FaveIT is also governed by our{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              , which explains how we collect and use personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              6. App Availability and Changes
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                We may modify, update, or discontinue parts of the App at any
                time without notice.
              </li>
              <li>
                We are not liable for any loss resulting from changes or
                interruptions in service.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              7. Intellectual Property
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                All branding, logos, and software components of FaveIT are the
                property of Andromeda Technologies SRL.
              </li>
              <li>
                You may not copy, distribute, or reverse-engineer any part of
                the App.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              8. Termination
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                You may delete your account at any time from within the App.
              </li>
              <li>
                We may suspend or terminate accounts that violate these Terms or
                harm other users or the service.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-textLighter mb-4">FaveIT is provided "as is."</p>
            <p className="text-textLighter mb-4">
              To the extent permitted by law, we are not liable for:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Loss of data, profits, or goodwill</li>
              <li>Errors or downtime</li>
              <li>User-generated content or actions of other users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              10. Changes to the Terms
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>We may update these Terms occasionally.</li>
              <li>
                Continued use of the App after updates means you accept the
                revised Terms.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              11. Governing Law
            </h2>
            <p className="text-textLighter mb-4">
              These Terms are governed by the laws of Romania, and any disputes
              shall be resolved in Romanian courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              12. Contact
            </h2>
            <p className="text-textLighter mb-4">
              For questions about these Terms, contact us at:
            </p>
            <div className="bg-primaryLight/20 p-6 rounded-lg">
              <p className="text-textLighter mb-2">
                <a
                  href="mailto:legal@andromeda-technologies.com"
                  className="text-primary hover:underline"
                >
                  legal@andromeda-technologies.com
                </a>
              </p>
              <p className="text-textLighter mb-2">
                <a
                  href="https://www.faveitapp.com"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.faveitapp.com
                </a>
              </p>
              <p className="text-textLighter">
                Andromeda Technologies SRL, Romania
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
