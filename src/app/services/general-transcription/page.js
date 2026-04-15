'use client';

import Link from 'next/link';
import styles from '../service-detail.module.css';

export default function GeneralTranscriptionPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'General Transcription Service',
    description: 'Professional, accurate, and confidential transcription services for research, business meetings, academics, and media.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Advance Transcription'
    },
    areaServed: 'United States',
    serviceType: 'General Transcription'
  };

  return (
    <div className={styles.generalPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* Editorial Hero */}
      <section className={styles.medicalHero}>
        <div className={styles.container}>
          <div style={{ padding: '0 0 2rem 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link> &nbsp; / &nbsp; Services
          </div>
          <h1 className={styles.title}>General Transcription</h1>
          <p className={styles.subtitle}>
             Professional Transcription for Research & Business. 
             Advance Transcription offers accurate and confidential transcription services for professionals, 
             organizations, and institutions that require clean, well-formatted text.
          </p>
          <a href="/#contact" className="btn-primary" style={{ padding: '1.25rem 2.5rem', borderRadius: '50px' }}>Get a Quote</a>
        </div>
      </section>

      {/* Versatility Section */}
      <section className={styles.deliveredFast}>
        <div className={`${styles.container} ${styles.deliveredGrid}`}>
          <div>
            <h2 className={styles.deliveredTitle}>Clean. Clear. Consistent.</h2>
            <p className={styles.deliveredText}>
               Whether you{"'"}re recording interviews, meetings, webinars, or documentation for internal use, 
               we deliver transcripts that are clear, consistent, and tailored to your formatting needs. 
               Our transcription services are designed to support your workflow — not interrupt it.
               We combine speed, accuracy, and attention to detail to support professionals across industries.
            </p>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', padding: '3rem', borderRadius: '12px', border: '1px solid #bbf7d0', textAlign: 'center' }}>
                <span style={{ fontSize: '5rem' }}>📑</span>
                <div style={{ marginTop: '1.5rem', fontWeight: '800', fontSize: '1.1rem', color: '#166534' }}>Human-Verified Accuracy</div>
          </div>
        </div>
      </section>

      {/* General Services Grid */}
      <section className={styles.busyProvidersSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0f172a' }}>Versatile Transcription Support</h2>
            <div style={{ width: '80px', height: '4px', background: '#0d9488', margin: '1.5rem auto' }}></div>
          </div>
          
          <div className={styles.busyGrid}>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>💼</div>
               <h3 className={styles.busyCardTitle}>Corporate</h3>
               <p className={styles.busyCardText}>Business Meetings, Conference Calls, & Internal Reports</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>🎓</div>
               <h3 className={styles.busyCardTitle}>Academic</h3>
               <p className={styles.busyCardText}>Research Interviews, Lectures, & Focus Groups</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>🎧</div>
               <h3 className={styles.busyCardTitle}>Media</h3>
               <p className={styles.busyCardText}>Podcasts, Media Content, & Zoom Recordings</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>💒</div>
               <h3 className={styles.busyCardTitle}>Institutions</h3>
               <p className={styles.busyCardText}>Church Sermons, Public Events, & Non-Profit Documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className={styles.ehrSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>Our Expertise Covers</h2>
          </div>

          <div className={styles.ehrGrid} style={{ marginTop: '4rem' }}>
             <div className={styles.ehrItem}>✅ Business Meetings</div>
             <div className={styles.ehrItem}>✅ Zoom Recordings</div>
             <div className={styles.ehrItem}>✅ Academic Interviews</div>
             <div className={styles.ehrItem}>✅ Podcast Content</div>
             <div className={styles.ehrItem}>✅ Corporate Presentations</div>
             <div className={styles.ehrItem}>✅ Panel Discussions</div>
             <div className={styles.ehrItem}>✅ Market Research</div>
             <div className={styles.ehrItem}>✅ Training Sessions</div>
             <div className={styles.ehrItem}>✅ Public Events</div>
             <div className={styles.ehrItem}>✅ Personal Dictations</div>
             <div className={styles.ehrItem}>✅ Scientific Recordings</div>
             <div className={styles.ehrItem}>✅ Real Estate Audio</div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ padding: '6rem 0', background: '#0f172a', textAlign: 'center', color: 'white' }}>
          <div className={styles.container}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '900' }}>Reliable. Confidential. Always On Time.</h2>
             <p style={{ maxWidth: '750px', margin: '0 auto 3rem auto', color: '#94a3b8', fontSize: '1.2rem', lineHeight: '1.6' }}>
                At Advance Transcription, we understand the specific needs of the academic and corporate sectors. 
                Whether you need one report or ongoing transcription support, we{"'"}re here to help.
             </p>
             <Link href="/#contact" className="btn-primary" style={{ padding: '1.25rem 3.5rem', borderRadius: '50px', background: '#38bdf8', color: '#0f172a' }}>START YOUR PROJECT</Link>
          </div>
      </section>
    </div>
  );
}
