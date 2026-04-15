import './globals.css';
import Link from 'next/link';
import Navbar from './Navbar';
import { getSettings } from '@/lib/db';

export const revalidate = 0;

export const metadata = {
  metadataBase: new URL('https://advancetranscription.com'),
  title: {
    default: 'Advance Transcription | Reliable Medical & Legal Transcription Services',
    template: '%s | Advance Transcription'
  },
  description: 'Advance Transcription provides fast, secure, and accurate medical and legal transcription services with guaranteed 12-hour turnaround. HIPAA compliant and EHR integrated.',
  keywords: [
    'transcription services',
    'medical transcription',
    'legal transcription',
    'advance transcription',
    'HIPAA compliant transcription',
    'EHR integrated transcription',
    'IME transcription',
    'AI transcription',
    'accurate transcription',
    'fast transcription turnaround'
  ],
  authors: [{ name: 'Verve Nova Private Limited' }],
  creator: 'Verve Nova Private Limited',
  publisher: 'Advance Transcription',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Advance Transcription | Reliable Medical & Legal Transcription',
    description: 'Fast, secure, and accurate medical and legal transcription services. 100% HIPAA compliant.',
    url: 'https://advancetranscription.com',
    siteName: 'Advance Transcription',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advance Transcription | Reliable Medical & Legal Transcription',
    description: 'Fast, secure, and accurate medical and legal transcription services.',
  },
  icons: {
    icon: '/transparent.png',
    apple: '/transparent.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Advance Transcription',
  url: 'https://advancetranscription.com',
  logo: 'https://advancetranscription.com/logo.jpg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-xxx-xxx-xxxx', // Will be dynamic if possible, but Organization needs a fixed one usually
    contactType: 'customer service',
    availableLanguage: 'en'
  },
  sameAs: [
    'https://www.linkedin.com/company/advancetranscription',
    'https://www.vervenovatech.com/'
  ]
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Advance Transcription',
  url: 'https://advancetranscription.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://advancetranscription.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default async function RootLayout({ children }) {
  const settings = await getSettings();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

          <Navbar settings={settings} />

          {/* Main Content */}
          <main style={{ flex: '1', backgroundColor: '#ffffff' }}>
            {children}
          </main>

          {/* Epic-style Footer */}
          <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)', padding: '4rem 0 0 0', borderTop: '4px solid var(--primary)' }}>
            <div className="container">
              <div className="footer-grid">
                {/* Column 1 */}
                <div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'white' }}>
                      Advance <span style={{ color: 'var(--primary)' }}>Transcription</span>
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: 'white', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>About Us</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                    Advance Transcription is a premier healthcare-focused transcription service committed to delivering timely, accurate, and secure documentation.
                  </p>
                </div>
                {/* Column 2 */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'white', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>Quick Links</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <li><Link href="/" className="footer-link">Home</Link></li>
                    <li><Link href="/about" className="footer-link">About Us</Link></li>
                    <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
                    <li><Link href="/testimonials" className="footer-link">Testimonials</Link></li>
                    <li><Link href="/blog" className="footer-link">Blog</Link></li>
                    <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
                    <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'white', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>Services</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <li><Link href="/services/medical-transcription" className="footer-link">Medical Transcription</Link></li>
                    <li><Link href="/services/ime-transcription" className="footer-link">IME Transcription</Link></li>
                    <li><Link href="/services/legal-transcription" className="footer-link">Legal Transcription</Link></li>
                    <li><Link href="/services/ai-transcription" className="footer-link">AI Transcription</Link></li>
                    <li><Link href="/services/general-transcription" className="footer-link">General Transcription</Link></li>
                  </ul>
                </div>
                {/* Column 4 */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'white', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>Contact Info</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                    <li><strong style={{ color: 'var(--primary)' }}>Email:</strong> {settings.client_email}</li>
                    <li><strong style={{ color: 'var(--primary)' }}>Phone:</strong> {settings.client_phone}</li>
                    <li style={{ marginTop: '0.5rem', opacity: 0.8, fontSize: '0.85rem', lineHeight: '1.5' }}>
                      <strong style={{ color: 'var(--primary)' }}>Address:</strong><br/>
                      {settings.address_line1}<br/>
                      {settings.address_line2}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Copyright Bar */}
            <div style={{ backgroundColor: '#0f172a', padding: '1.5rem 0', fontSize: '0.85rem' }}>
              <div className="container footer-copyright">
                <p style={{ margin: 0, opacity: 0.8 }}>
                  © {new Date().getFullYear()} Advance Transcription. All rights reserved.
                </p>
                <a
                  href="https://www.vervenovatech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-dev-link"
                >
                  Developed by Verve Nova Technologies Pvt. Ltd.
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
