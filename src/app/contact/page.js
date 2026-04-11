import Link from 'next/link';
import styles from './contact.module.css';
import { getSettings } from '@/lib/db';
import ContactForm from './ContactForm';

export const revalidate = 0;

export default async function ContactUsPage() {
  const settings = await getSettings();

  return (
    <div className={styles.contactPage}>
      {/* Editorial Hero */}
      <section className={styles.contactHero}>
        <div className={styles.container}>
          <div style={{ color: '#38bdf8', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Get In Touch
          </div>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto 0 auto' }}>
            We{"'"}re here to help you optimize your documentation workflow.
          </p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left: Contact Info */}
          <div className={styles.infoSection}>
            <div className={styles.infoBlock}>
              <h3>Contact Support</h3>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>{' '}
                <a href={`mailto:${settings.client_email}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{settings.client_email}</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Phone:</span>{' '}
                <a href={`tel:${(settings.client_phone || '').replace(/[^0-9+]/g, '')}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{settings.client_phone}</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Toll-Free Dictation Line:</span><br/>
                <span style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#6b7280' }}>Provided upon account setup</span>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h3>Business Hours</h3>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Monday to Saturday:</span><br/>
                9:00 AM – 6:00 PM (EST)
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Sunday:</span><br/>
                Available for STAT/Weekend Clients (On Request)
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h3>Mailing Address (U.S.)</h3>
              <div className={styles.infoItem} style={{ lineHeight: '1.6' }}>
                {settings.address_line1}<br/>
                {settings.address_line2}
              </div>
            </div>
          </div>

          {/* Right: Contact Form (Client Component) */}
          <ContactForm settings={settings} />
        </div>
      </div>
    </div>
  );
}
