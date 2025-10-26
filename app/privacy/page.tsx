import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - FaveIT",
  description:
    "Privacy Policy for FaveIT - Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-baseText mb-8">
          Privacy Policy for FaveIT
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-textLighter mb-8">
            <strong>Last updated:</strong> October 26, 2025
          </p>

          <p className="text-textLighter mb-8">
            This Privacy Policy describes how FaveIT, owned and operated by
            Andromeda Technologies SRL ("we", "our", or "us"), collects, uses,
            and protects your personal data when you use the FaveIT mobile
            application (the "App") and its related services.
          </p>

          <p className="text-textLighter mb-8">
            By using the App, you agree to this Privacy Policy.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              1. Information We Collect
            </h2>
            <p className="text-textLighter mb-4">
              We collect the following types of information when you use FaveIT:
            </p>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              a. Account Information
            </h3>
            <p className="text-textLighter mb-4">
              When you register, we collect your email address and other
              optional profile information such as name, username/handle, and
              profile photo.
            </p>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              b. User Content
            </h3>
            <p className="text-textLighter mb-4">
              When you create or edit your FAVEs, we collect and store the data
              you provide, including:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Item title, description, price, and image</li>
              <li>Product details scraped from links you add</li>
              <li>Any manually uploaded photos or text</li>
            </ul>
            <p className="text-textLighter mb-4">
              This data is stored securely in our Supabase database.
            </p>

            <h3 className="text-xl font-semibold text-baseText mb-3">
              c. Usage Information
            </h3>
            <p className="text-textLighter mb-4">
              We may collect limited usage data such as:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>When you add, edit, or share wishlist items</li>
              <li>Social interactions (friend requests, shared lists, etc.)</li>
            </ul>
            <p className="text-textLighter mb-4">
              This data helps us improve app performance and prevent abuse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-textLighter mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                Provide and maintain the FaveIT app and its social features
              </li>
              <li>Save, sync, and display your FAVEs lists</li>
              <li>Allow you to connect with friends and share items</li>
              <li>Securely manage your account and authentication</li>
              <li>
                Communicate updates, respond to inquiries, and offer support
              </li>
              <li>Improve app functionality and plan future features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              3. Data Storage and Security
            </h2>
            <p className="text-textLighter mb-4">
              Your personal and FAVEs lists data are stored securely using{" "}
              <a
                href="https://supabase.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Supabase
              </a>
              .
            </p>
            <p className="text-textLighter mb-4">
              Data is encrypted in transit and at rest. We implement reasonable
              administrative, technical, and physical safeguards to protect your
              data, but no system is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              4. Sharing and Visibility
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                Your FAVEs and profile are only visible to other registered
                FaveIT users within the app.
              </li>
              <li>
                You can search for and connect with other users via their app
                handles.
              </li>
              <li>We do not make FAVEs publicly available outside the app.</li>
              <li>We do not sell or rent personal data to third parties.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              5. Third-Party Services
            </h2>
            <p className="text-textLighter mb-4">
              Currently, FaveIT does not use third-party analytics or tracking
              tools.
            </p>
            <p className="text-textLighter mb-4">
              However, we may integrate such services in the future (e.g.,
              analytics, crash reporting, or performance monitoring tools like
              Sentry or PostHog).
            </p>
            <p className="text-textLighter mb-4">
              If this happens, the Privacy Policy will be updated to list these
              services and explain their data use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              6. Data Retention and Deletion
            </h2>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>We retain user data as long as your account is active.</li>
              <li>
                You can delete your account and all associated data directly
                from within the app.
              </li>
              <li>
                Alternatively, you may contact us at the email below to request
                deletion.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              7. Legal Basis for Processing (GDPR)
            </h2>
            <p className="text-textLighter mb-4">
              We process your personal data under the following lawful bases:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>
                <strong>Performance of a contract:</strong> to provide the app
                and its core features
              </li>
              <li>
                <strong>Consent:</strong> for optional profile data or
                communication
              </li>
              <li>
                <strong>Legitimate interests:</strong> to maintain security and
                prevent abuse
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              8. Your Rights (EU & UK GDPR)
            </h2>
            <p className="text-textLighter mb-4">
              Under GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-textLighter mb-4">
              <li>Access, correct, or delete your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Request data portability</li>
              <li>Restrict or object to processing</li>
            </ul>
            <p className="text-textLighter mb-4">
              To exercise these rights, contact us at the email below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-textLighter mb-4">
              FaveIT is not intended for children under the age of 16.
            </p>
            <p className="text-textLighter mb-4">
              We do not knowingly collect data from children. If you believe a
              child has provided personal data, please contact us immediately
              and request the deletion of the data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-textLighter mb-4">
              Our services are operated from the European Union (Romania).
            </p>
            <p className="text-textLighter mb-4">
              If you access the app from outside the EU/UK, your data may be
              transferred and processed in Romania in compliance with GDPR.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-textLighter mb-4">
              We may update this Privacy Policy periodically.
            </p>
            <p className="text-textLighter mb-4">
              All changes will be posted at{" "}
              <a
                href="https://www.faveitapp.com/privacy"
                className="text-primary hover:underline"
              >
                https://www.faveitapp.com/privacy
              </a>{" "}
              with the updated "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-baseText mb-4">
              12. Contact Us
            </h2>
            <p className="text-textLighter mb-4">
              If you have any questions or privacy-related requests, please
              contact us at:
            </p>
            <div className="bg-primaryLight/20 p-6 rounded-lg">
              <p className="text-textLighter mb-2">
                <a
                  href="mailto:privacy@andromeda-technologies.com"
                  className="text-primary hover:underline"
                >
                  privacy@andromeda-technologies.com
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
