import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#F8F9FA] text-[#212529] min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-sm font-semibold text-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent-hover)] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>

        {/* Header */}
        <header className="mb-10 pb-6 border-b border-gray-200">
          <span className="text-xs font-bold font-montserrat tracking-wider uppercase py-1 px-3 bg-white text-[var(--color-brand-accent)] rounded-full border border-gray-200">
            Legal & Governance
          </span>
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat mt-4 mb-2 text-[#212529]">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 font-sourcesanspro">
            Last updated: November 2026 &bull; Cognaterra Limited (Company No. 16858068)
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8 text-gray-700 font-sourcesanspro leading-relaxed">
          {/* Section 1 */}
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold font-montserrat text-[#212529] mb-3">
              1. Introduction & Overview
            </h2>
            <p className="mb-3">
              Cognaterra Limited (&ldquo;Cognaterra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a private limited company registered in England and Wales under Company Registration Number 16858068. We are committed to protecting the privacy, confidentiality, and integrity of personal information entrusted to us by clients, partners, and users.
            </p>
            <p>
              This Privacy Policy explains how we collect, process, store, and safeguard personal data when you visit our website (<a href="https://cognaterra.co.uk" className="text-[var(--color-brand-accent)] hover:underline font-medium">https://cognaterra.co.uk</a>), engage our advisory services, or interact with our integrated applications and software tools (including integrations connecting to third-party services such as Google Workspace).
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold font-montserrat text-[#212529] mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information only to the extent necessary to fulfill our legitimate business, consulting, and operational obligations:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>
                <strong>Direct Communications:</strong> Information provided directly when contacting us via email, web enquiry, or scheduled discussions (e.g. name, professional email address, organisation name, job title, and message content).
              </li>
              <li>
                <strong>Client Engagement Data:</strong> Operational, technical, or project documentation provided by client organisations in the course of advisory, horizon scanning, or digital strategy mandates.
              </li>
              <li>
                <strong>Google User Data (OAuth):</strong> Where you authorise our applications or developer tools to access your Google account via OAuth 2.0 (for example, Google Workspace APIs including Google Calendar, Gmail, Google Drive, or Google Docs), our application accesses only the specific scopes requested and granted by you (such as profile information, calendar event metadata, or communication drafts).
              </li>
              <li>
                <strong>Technical & Usage Data:</strong> Standard server logs, IP addresses, browser types, and operating system information gathered automatically for website diagnostic, security, and performance monitoring purposes.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold font-montserrat text-[#212529] mb-3">
              3. Purpose & Legal Basis for Processing
            </h2>
            <p className="mb-3">
              Under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018, we process personal data under the following legal bases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Performance of a Contract:</strong> To deliver requested digital transformation, strategy, horizon scanning, and software tooling services.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> To respond to professional enquiries, maintain infrastructure security, prevent fraudulent activity, and ensure service reliability.
              </li>
              <li>
                <strong>User Consent:</strong> Where you explicitly authorise third-party integrations (e.g. Google OAuth consent) to connect your accounts and execute automated tasks.
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with statutory UK corporate, accounting, and taxation record-keeping obligations.
              </li>
            </ul>
          </section>

          {/* Section 4: Google API Services User Data Policy / Limited Use (CRITICAL COMPLIANCE NOTICE) */}
          <section className="bg-emerald-50/70 p-6 md:p-8 rounded-lg border-2 border-[var(--color-brand-accent)] shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <svg className="h-6 w-6 text-[var(--color-brand-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-bold font-montserrat text-[#212529]">
                  4. Google API Services & User Data Policy Compliance
                </h2>
                <p className="text-gray-800">
                  Cognaterra tools and integrations adhere strictly to Google&rsquo;s security and developer requirements. 
                </p>
                <div className="p-4 bg-white rounded border border-emerald-200 text-gray-900 font-medium">
                  Cognaterra&rsquo;s use and transfer to any other app of information received from Google APIs will adhere to the{' '}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-brand-accent)] underline hover:text-[var(--color-brand-accent-hover)]"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including the Limited Use requirements.
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  <li>
                    <strong>No Sale of Google User Data:</strong> We never sell, lease, commercialise, or trade Google user data to any third party under any circumstances.
                  </li>
                  <li>
                    <strong>No Advertising:</strong> We never use or transfer Google user data for serving advertisements, retargeting, behavioural targeting, or interest-based advertising.
                  </li>
                  <li>
                    <strong>No AI/ML Training:</strong> Google user data accessed via Google Workspace or Google APIs is never used to train, retrain, or fine-tune generalised machine learning or artificial intelligence models.
                  </li>
                  <li>
                    <strong>Limited Human Access:</strong> Human personnel do not read or view your Google user data unless you have given explicit prior consent for debugging, where strictly required for security investigations, or where mandated by law.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold font-montserrat text-[#212529] mb-3">
              5. Data Sharing & Third-Party Disclosures
            </h2>
            <p className="mb-3">
              We do not sell, rent, or disclose personal data to third parties for commercial or promotional purposes. We may share information only in the following controlled circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Infrastructure Providers:</strong> Highly vetted cloud infrastructure, hosting (e.g. GitHub Pages), and authenticated software providers operating under robust data processing agreements compliant with UK GDPR.
              </li>
              <li>
                <strong>Statutory & Legal Requirements:</strong> If required by law, court order, or governmental authorities (e.g. HM Revenue and Customs or the Information Commissioner&rsquo;s Office).
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold font-montserrat text-[#212529] mb-3">
              6. Data Storage, Security & Retention
            </h2>
            <p className="mb-3">
              We apply technical and organisational measures to prevent unauthorised access, modification, disclosure, or loss of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>All web traffic is encrypted in transit using industry-standard TLS / HTTPS encryption.</li>
              <li>OAuth tokens and credentials are encrypted and stored in secure, access-controlled environments.</li>
              <li>Data is retained only for as long as necessary to fulfill the operational purpose for which it was collected, or to comply with applicable statutory limitation periods and legal obligations.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold font-montserrat text-[#212529] mb-3">
              7. User Controls, Access Revocation & Data Deletion
            </h2>
            <p className="mb-3">
              You maintain full control over your data and any third-party services connected to Cognaterra:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li>
                <strong>Revoking Google Access:</strong> You can revoke Cognaterra&rsquo;s access to your Google account at any time via the official Google Security permissions dashboard at{' '}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-brand-accent)] underline hover:text-[var(--color-brand-accent-hover)]"
                >
                  https://myaccount.google.com/permissions
                </a>.
              </li>
              <li>
                <strong>Requesting Data Deletion:</strong> You may request the permanent deletion of your personal information, communication records, or cached data at any time by sending an email to{' '}
                <a
                  href="mailto:contact@cognaterra.co.uk"
                  className="text-[var(--color-brand-accent)] underline font-medium"
                >
                  contact@cognaterra.co.uk
                </a>. We process all deletion requests promptly and confirm completion in writing.
              </li>
              <li>
                <strong>Your Statutory Rights:</strong> Under UK GDPR, you have the right to request access, rectification, erasure, restriction of processing, data portability, and the right to lodge a complaint with the UK Information Commissioner&rsquo;s Office (ICO).
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold font-montserrat text-[#212529] mb-3">
              8. Contact & Data Controller Information
            </h2>
            <p className="mb-3">
              For any questions, requests, or concerns regarding this Privacy Policy or our data practices, please contact our data controller:
            </p>
            <div className="bg-gray-50 p-4 rounded border border-gray-200 text-sm space-y-1">
              <p><strong>Entity:</strong> Cognaterra Limited</p>
              <p><strong>Registration:</strong> England and Wales &bull; Company No. 16858068</p>
              <p><strong>Email:</strong> <a href="mailto:contact@cognaterra.co.uk" className="text-[var(--color-brand-accent)] underline font-medium">contact@cognaterra.co.uk</a></p>
              <p><strong>Website:</strong> <a href="https://cognaterra.co.uk" className="text-[var(--color-brand-accent)] underline font-medium">https://cognaterra.co.uk</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
