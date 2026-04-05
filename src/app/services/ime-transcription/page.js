'use client';

import Link from 'next/link';
import styles from '../service-detail.module.css';

export default function IMETranscriptionPage() {
  return (
    <div className={styles.imePage}>
      {/* Editorial Hero */}
      <section className={styles.medicalHero}>
        <div className={styles.container}>
          <div style={{ padding: '0 0 2rem 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link> &nbsp; / &nbsp; Services
          </div>
          <h1 className={styles.title}>IME Transcription Services</h1>
          <p className={styles.subtitle}>
             Independent Medical Examination Reports. 
             Advance Transcription provides specialized transcription services for IMEs, 
             supporting physicians, evaluators, case managers, and legal teams with precise, 
             timely, and fully formatted documentation.
          </p>
          <a href="/#contact" className="btn-primary" style={{ padding: '1.25rem 2.5rem', borderRadius: '50px' }}>Schedule a Consultation</a>
        </div>
      </section>

      {/* Precision Section */}
      <section className={styles.deliveredFast}>
        <div className={`${styles.container} ${styles.deliveredGrid}`}>
          <div>
            <h2 className={styles.deliveredTitle}>Defensible Accuracy.</h2>
            <p className={styles.deliveredText}>
               We understand the high stakes involved in IME reporting — where every detail must be clear, objective, and defensible. 
               That{"'"}s why the Advance Transcription team is trained to handle complex medical-legal language, 
               structured templates, and strict formatting standards required for these reports. 
               Our transcription services are designed to support your workflow — not interrupt it.
            </p>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', padding: '3rem', borderRadius: '12px', border: '1px solid #bbf7d0', textAlign: 'center' }}>
                <span style={{ fontSize: '5rem' }}>⚖️</span>
                <div style={{ marginTop: '1.5rem', fontWeight: '800', fontSize: '1.1rem', color: '#166534' }}>Precision Focused & Legally Defensible</div>
          </div>
        </div>
      </section>

      {/* IME Features Grid */}
      <section className={styles.busyProvidersSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0f172a' }}>Built for Busy Providers</h2>
            <div style={{ width: '80px', height: '4px', background: '#0d9488', margin: '1.5rem auto' }}></div>
          </div>
          
          <div className={styles.busyGrid}>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>📜</div>
               <h3 className={styles.busyCardTitle}>Standard Time</h3>
               <p className={styles.busyCardText}>12-hour delivery, STAT options available (2–6 hours)</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>📐</div>
               <h3 className={styles.busyCardTitle}>Template Precision</h3>
               <p className={styles.busyCardText}>We work with your custom format or provide one upon request</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>🛡️</div>
               <h3 className={styles.busyCardTitle}>Confidential & HIPAA</h3>
               <p className={styles.busyCardText}>All data processed under strict privacy protocols</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>📦</div>
               <h3 className={styles.busyCardTitle}>Flexible Delivery</h3>
               <p className={styles.busyCardText}>Reports via email, direct EHR upload, or secure portal download</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>🎙️</div>
               <h3 className={styles.busyCardTitle}>Dictation Flexibility</h3>
               <p className={styles.busyCardText}>Dictate using landline, mobile, digital recorder, or toll-free system</p>
            </div>
            <div className={styles.busyCard}>
               <div className={styles.busyIcon}>🧠</div>
               <h3 className={styles.busyCardTitle}>Complex Case Handling</h3>
               <p className={styles.busyCardText}>Experience with orthopedic, neurological, psychiatric, and multi-specialty IMEs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise List */}
      <section className={styles.whoSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>IME Reports Expertise</h2>
            <p style={{ color: '#475569', maxWidth: '800px', margin: '1.5rem auto', fontSize: '1.1rem' }}>
              We provide accurate transcription for a wide variety of independent medical evaluations (IMEs) 
              and related reports, ensuring each document is clear, compliant, and tailored to your needs.
            </p>
          </div>

          <div className={styles.ehrGrid} style={{ marginTop: '4rem' }}>
             <div className={styles.ehrItem}>✅ General IME Reports</div>
             <div className={styles.ehrItem}>✅ Permanent Impairment Ratings</div>
             <div className={styles.ehrItem}>✅ Disability Determinations</div>
             <div className={styles.ehrItem}>✅ Functional Capacity Evaluations</div>
             <div className={styles.ehrItem}>✅ Addendums and Record Reviews</div>
             <div className={styles.ehrItem}>✅ Workers{"'"}s Compensation</div>
             <div className={styles.ehrItem}>✅ Auto Injury Assessments</div>
             <div className={styles.ehrItem}>✅ Pre-employment Evaluations</div>
             <div className={styles.ehrItem}>✅ Peer Reviews</div>
             <div className={styles.ehrItem}>✅ Neuropsychological IMEs</div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ padding: '6rem 0', background: '#0f172a', textAlign: 'center', color: 'white' }}>
          <div className={styles.container}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '900' }}>Reliable Partnership In Documentation</h2>
             <p style={{ maxWidth: '700px', margin: '0 auto 3rem auto', color: '#94a3b8', fontSize: '1.1rem' }}>
                Advance Transcription is not just a service provider — we are a strategic partner 
                committed to supporting your clinical operations with efficiency and professionalism.
             </p>
             <Link href="/#contact" className="btn-primary" style={{ padding: '1.25rem 3.5rem', borderRadius: '50px', background: '#38bdf8', color: '#0f172a' }}>CONTACT ADVANCE TRANSCRIPTION</Link>
          </div>
      </section>
    </div>
  );
}
