export const metadata = {
  title: 'Privacy Policy | Advance Transcription',
  description: 'Read the Privacy Policy for Advance Transcription Services. Learn how we collect, use, and protect your personal and medical information.',
};

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ backgroundColor: '#0f172a', padding: '5rem 0 4rem 0', textAlign: 'center' }}>
        <div className="container">
          <span style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(56,189,248,0.15)', color: '#38bdf8', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>
            Legal
          </span>
          <h1 style={{ fontSize: '3rem', color: '#ffffff', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

          <div style={{ background: '#ffffff', borderRadius: '12px', padding: '3rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: '2rem' }}>
              Advance Transcription ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website. Please read this policy carefully.
            </p>

            {[
              {
                title: '1. Information We Collect',
                content: `We may collect the following types of information:

• Personal Identification Information: Name, email address, phone number, mailing address, and professional credentials.
• Medical & Clinical Information: Dictation recordings, transcribed documents, and healthcare-related data submitted by authorized clients.
• Technical Data: IP address, browser type, device information, and usage data collected automatically when you visit our website.
• Business Information: Organization name, specialty, EMR/EHR system details, and service preferences.`
              },
              {
                title: '2. How We Use Your Information',
                content: `We use the information we collect to:

• Provide, operate, and maintain our transcription services.
• Process and deliver transcribed documents to authorized recipients.
• Communicate with you regarding your account, inquiries, and service updates.
• Improve our website and services through analytics.
• Comply with applicable legal obligations, including HIPAA requirements.
• Send administrative and transactional communications.`
              },
              {
                title: '3. HIPAA Compliance',
                content: `As a transcription service provider working with healthcare clients, we operate as a Business Associate under HIPAA (Health Insurance Portability and Accountability Act). We:

• Enter into Business Associate Agreements (BAAs) with covered entities.
• Implement administrative, physical, and technical safeguards to protect PHI.
• Limit the use and disclosure of PHI to purposes permitted by law and our agreements.
• Train our staff on HIPAA requirements and data handling procedures.`
              },
              {
                title: '4. Information Sharing & Disclosure',
                content: `We do not sell, trade, or rent your personal information to third parties. We may share information only in these limited circumstances:

• With Your Consent: We share information only as directed by you or your authorized representative.
• Service Providers: Trusted third-party vendors who assist us in operating our business (e.g., secure cloud storage, email services), bound by confidentiality agreements.
• Legal Requirements: When required by law, court order, or governmental authority.
• Business Transfers: In the event of a merger, acquisition, or asset sale, your information may be transferred.`
              },
              {
                title: '5. Data Security',
                content: `We implement industry-standard security measures to protect your data, including:

• Encrypted transmission (SSL/TLS) for all data in transit.
• Secure, access-controlled storage for all transcribed documents.
• Regular security audits and vulnerability assessments.
• Strict internal access controls — only authorized personnel can access client data.
• Secure deletion protocols for data no longer needed.`
              },
              {
                title: '6. Data Retention',
                content: `We retain personal and medical information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Upon termination of services, client data is securely deleted or returned according to the terms of our service agreement.`
              },
              {
                title: '7. Your Rights',
                content: `You have the right to:

• Access the personal information we hold about you.
• Request correction of inaccurate or incomplete data.
• Request deletion of your personal data (subject to legal obligations).
• Opt out of marketing communications at any time.
• Request a copy of your data in a portable format.

To exercise any of these rights, please contact us using the information below.`
              },
              {
                title: '8. Cookies & Tracking Technologies',
                content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. Note that some features of our website may not function properly without cookies.`
              },
              {
                title: '9. Third-Party Links',
                content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`
              },
              {
                title: '10. Changes to This Policy',
                content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the "Last Updated" date at the top of this page. Continued use of our services after any modifications constitutes your acceptance of the updated policy.`
              },
              {
                title: '11. Contact Us',
                content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

Advance Transcription
Email: ${process.env.NEXT_PUBLIC_CLIENT_EMAIL || 'info@advancetranscription.com'}
Phone: ${process.env.NEXT_PUBLIC_CLIENT_PHONE || '+1 (727) 308-2312'}
Address: ${process.env.NEXT_PUBLIC_CLIENT_ADDRESS_LINE1 || '4604 49th St N #5095'}, ${process.env.NEXT_PUBLIC_CLIENT_ADDRESS_LINE2 || 'Saint Petersburg, FL 33709'}`
              }
            ].map((section, i) => (
              <div key={i} style={{ marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: i < 10 ? '1px solid #f1f5f9' : 'none' }}>
                <h2 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.3' }}>
                  {section.title}
                </h2>
                <p style={{ color: '#475569', lineHeight: '1.9', fontSize: '0.95rem', whiteSpace: 'pre-line', margin: 0 }}>
                  {section.content}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}
