import './globals.css';
import Link from 'next/link';
import Navbar from './Navbar';

export const metadata = {
  title: 'Advance Transcription | Reliable Medical & Legal Transcription',
  description: 'Fast, secure, and accurate medical and legal transcription services with guaranteed 12-hour turnaround.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

          <Navbar />

          {/* Main Content */}
          <main style={{ flex: '1', backgroundColor: '#ffffff' }}>
            {children}
          </main>

          {/* Epic-style Footer */}
          <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)', padding: '4rem 0 0 0' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', paddingBottom: '3rem' }}>
                {/* Column 1 */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'white', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>About Us</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                    Advance Transcription is a premier healthcare-focused transcription service committed to delivering timely, accurate, and secure documentation.
                  </p>
                </div>
                {/* Column 2 */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'white', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>Quick Links</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/testimonials">Testimonials</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'white', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>Services</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <li><Link href="/services/medical-transcription">Medical Transcription</Link></li>
                    <li><Link href="/services/ime-transcription">IME Transcription</Link></li>
                    <li><Link href="/services/legal-transcription">Legal Transcription</Link></li>
                    <li><Link href="/services/ai-transcription">AI Transcription</Link></li>
                    <li><Link href="/services/general-transcription">General Transcription</Link></li>
                  </ul>
                </div>
                {/* Column 4 */}
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'white', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>Contact Info</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                    <li><strong>Email:</strong> {process.env.NEXT_PUBLIC_CLIENT_EMAIL}</li>
                    <li><strong>Phone:</strong> {process.env.NEXT_PUBLIC_CLIENT_PHONE}</li>
                    <li style={{ marginTop: '0.5rem', opacity: 0.8, fontSize: '0.85rem', lineHeight: '1.5' }}>
                      <strong>Address:</strong><br/>
                      {process.env.NEXT_PUBLIC_CLIENT_ADDRESS_LINE1}<br/>
                      {process.env.NEXT_PUBLIC_CLIENT_ADDRESS_LINE2}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Copyright Bar */}
            <div style={{ backgroundColor: '#0f172a', padding: '1.5rem 0', textAlign: 'center', fontSize: '0.85rem' }}>
              <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span>&copy; {new Date().getFullYear()} Advance Transcription. All Rights Reserved.</span>
                <a
                  href="https://www.linkedin.com/in/puneettkushwaha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-dev-link"
                >
                  Developed by Puneet Kushwaha
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
