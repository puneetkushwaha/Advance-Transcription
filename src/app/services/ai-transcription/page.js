'use client';

import Link from 'next/link';
import styles from '../service-detail.module.css';

export default function AITranscriptionPage() {
  return (
    <div className={styles.aiPage}>
      {/* Editorial Hero */}
      <section className={styles.medicalHero}>
        <div className={styles.container}>
          <div style={{ padding: '0 0 2rem 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link> &nbsp; / &nbsp; Services
          </div>
          <h1 className={styles.title}>AI-Powered Transcription</h1>
          <p className={styles.subtitle}>
             Fast Transcription with Human-Level Accuracy. 
             Advance Transcription now offers AI-enhanced transcription for clients who want rapid turnaround 
             and scalable support — perfect for business, education, media, and research use cases.
          </p>
          <a href="/#contact" className="btn-primary" style={{ padding: '1.25rem 2.5rem', borderRadius: '50px' }}>Try AI Transcription</a>
        </div>
      </section>

      {/* Hybrid Approach Section */}
      <section className={styles.deliveredFast}>
        <div className={styles.container} style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className={styles.deliveredTitle}>Speed Meets Quality.</h2>
            <p className={styles.deliveredText}>
               Our solutions combine cutting-edge speech recognition with optional human review, 
               giving you both speed and accuracy at competitive rates. You get transcripts that are reliable, 
               secure, and tailored to your specific needs. With our hybrid approach, you save time 
               without compromising on quality. Our transcription services are designed to support your workflow — not interrupt it.
            </p>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', padding: '3rem', borderRadius: '12px', border: '1px solid #bbf7d0', textAlign: 'center' }}>
                <span style={{ fontSize: '5rem' }}>🤖</span>
                <div style={{ marginTop: '1.5rem', fontWeight: '800', fontSize: '1.1rem', color: '#166534' }}>AI-Driven Efficiency</div>
          </div>
        </div>
      </section>

      {/* Built for Busy Providers Grid */}
      <section className={styles.busyProvidersSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0f172a' }}>Rapid Turnaround Times</h2>
            <div style={{ width: '80px', height: '4px', background: '#0d9488', margin: '1.5rem auto' }}></div>
          </div>
          
          <div className={styles.busyGrid}>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>📜</div>
               <h3 className={styles.busyCardTitle}>Standard Time</h3>
               <p className={styles.busyCardText}>12-hour turnaround (Monday to Saturday)</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>⚡</div>
               <h3 className={styles.busyCardTitle}>STAT Time</h3>
               <p className={styles.busyCardText}>2–6 hour delivery for urgent cases</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>🎙️</div>
               <h3 className={styles.busyCardTitle}>Easy Dictation</h3>
               <p className={styles.busyCardText}>Mobile, landline, recorder, or toll-free system</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>📦</div>
               <h3 className={styles.busyCardTitle}>Fast Delivery</h3>
               <p className={styles.busyCardText}>Reports via email, direct EHR upload, or secure portal download</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className={styles.ehrSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>Best Suited For</h2>
            <p style={{ color: '#475569', maxWidth: '800px', margin: '1.5rem auto', fontSize: '1.1rem' }}>
              AI transcription uses advanced machine learning models to automatically convert speech to text. 
              It{"'"}s best suited for clear, structured recordings such as:
            </p>
          </div>

          <div className={styles.ehrGrid} style={{ marginTop: '4rem' }}>
             <div className={styles.ehrItem}>✅ Business Meetings</div>
             <div className={styles.ehrItem}>✅ Academic Lectures</div>
             <div className={styles.ehrItem}>✅ Media Interviews</div>
             <div className={styles.ehrItem}>✅ Focus Group Discussions</div>
             <div className={styles.ehrItem}>✅ Legal Depositions (Draft)</div>
             <div className={styles.ehrItem}>✅ Podcast Transcriptions</div>
             <div className={styles.ehrItem}>✅ Seminar Documentation</div>
             <div className={styles.ehrItem}>✅ General Research Interviews</div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <p style={{ margin: 0, color: '#0d9488', fontSize: '1.1rem', fontWeight: '700' }}>
              Volume discounts and subscription plans available for high-capacity needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ padding: '6rem 0', background: '#0f172a', textAlign: 'center', color: 'white' }}>
          <div className={styles.container}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '900' }}>Scalable Solutions for the AI Era</h2>
             <p style={{ maxWidth: '700px', margin: '0 auto 3rem auto', color: '#94a3b8', fontSize: '1.1rem' }}>
                Advance Transcription provides a strategic bridge between cutting-edge technology 
                and human-level precision. Our team is ready to scale with your organization.
             </p>
             <Link href="/#contact" className="btn-primary" style={{ padding: '1.25rem 3.5rem', borderRadius: '50px', background: '#38bdf8', color: '#0f172a' }}>EXPLORE AI PLANS</Link>
          </div>
      </section>
    </div>
  );
}
