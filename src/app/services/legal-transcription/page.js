'use client';

import Link from 'next/link';
import styles from '../service-detail.module.css';

export default function LegalTranscriptionPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Legal Transcription Service',
    description: 'Secure, timely, and highly accurate transcription services for legal, medicolegal, and law enforcement professionals.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Advance Transcription'
    },
    areaServed: 'United States',
    serviceType: 'Legal Transcription'
  };

  return (
    <div className={styles.legalPage}>
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
          <h1 className={styles.title}>Legal Transcription</h1>
          <p className={styles.subtitle}>
             Secure, timely, and highly accurate transcription services for legal, 
             medicolegal, and law enforcement professionals. Advance Transcription delivers 
             transcripts that meet the highest standards of clarity, compliance, and formatting.
          </p>
          <a href="/#contact" className="btn-primary" style={{ padding: '1.25rem 2.5rem', borderRadius: '50px' }}>Request Legal Services</a>
        </div>
      </section>

      {/* Specialized Section */}
      <section className={styles.deliveredFast}>
        <div className={`${styles.container} ${styles.deliveredGrid}`}>
          <div>
            <h2 className={styles.deliveredTitle}>Confidentiality & Precision.</h2>
            <p className={styles.deliveredText}>
               We specialize in handling sensitive content where precision and confidentiality are non-negotiable. 
               Whether it{"'"}s dictated case notes or full medicolegal evaluations, our experienced 
               transcriptionists ensure every detail is captured accurately. We are a strategic partner 
               committed to supporting your operations with efficiency and professionalism.
            </p>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', padding: '3rem', borderRadius: '12px', border: '1px solid #bbf7d0', textAlign: 'center' }}>
                <span style={{ fontSize: '5rem' }}>⚖️</span>
                <div style={{ marginTop: '1.5rem', fontWeight: '800', fontSize: '1.1rem', color: '#166534' }}>Legal-Grade Confidentiality</div>
          </div>
        </div>
      </section>

      {/* Legal Services List */}
      <section className={styles.busyProvidersSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0f172a' }}>Our Legal Expertise</h2>
            <div style={{ width: '80px', height: '4px', background: '#0d9488', margin: '1.5rem auto' }}></div>
          </div>
          
          <div className={styles.busyGrid}>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>🧬</div>
               <h3 className={styles.busyCardTitle}>Medicolegal</h3>
               <p className={styles.busyCardText}>IMEs, functional assessments, and narrative reports</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>📖</div>
               <h3 className={styles.busyCardTitle}>Legal Transcription</h3>
               <p className={styles.busyCardText}>Case dictations, deposition summaries, and statements</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>🚔</div>
               <h3 className={styles.busyCardTitle}>Law Enforcement</h3>
               <p className={styles.busyCardText}>Police interviews, incident reports, and surveillance logs</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>📄</div>
               <h3 className={styles.busyCardTitle}>Documentation</h3>
               <p className={styles.busyCardText}>Workers{"'"}s Compensation, Peer Reviews, & Witness Interviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className={styles.ehrSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>Technical Excellence</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <h4 style={{ color: '#0f172a', marginBottom: '1rem', fontWeight: '800' }}>Formats Supported</h4>
                <p style={{ color: '#64748b' }}>Audio/Video: MP3, MP4, WAV, M4A, AAC, and more.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <h4 style={{ color: '#0f172a', marginBottom: '1rem', fontWeight: '800' }}>Submit Files</h4>
                <p style={{ color: '#64748b' }}>Submit via email, secure portal, or cloud link (Dropbox/Drive).</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <h4 style={{ color: '#0f172a', marginBottom: '1rem', fontWeight: '800' }}>Output Options</h4>
                <p style={{ color: '#64748b' }}>Word, PDF, TXT, RTF — customized to your legal workflow.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ padding: '6rem 0', background: '#0f172a', textAlign: 'center', color: 'white' }}>
          <div className={styles.container}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '900' }}>Reliable. Confidential. Always On Time.</h2>
             <p style={{ maxWidth: '750px', margin: '0 auto 3rem auto', color: '#94a3b8', fontSize: '1.2rem', lineHeight: '1.6' }}>
                At Advance Transcription, we combine speed, accuracy, and attention to detail to support legal professionals. 
                Whether you need one report or ongoing transcription support, we{"'"}re here to help — 
                with no compromise on quality or turnaround.
             </p>
             <Link href="/#contact" className="btn-primary" style={{ padding: '1.25rem 3.5rem', borderRadius: '50px', background: '#38bdf8', color: '#0f172a' }}>GET STARTED NOW</Link>
          </div>
      </section>
    </div>
  );
}
