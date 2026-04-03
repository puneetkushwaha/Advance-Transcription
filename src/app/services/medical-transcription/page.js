'use client';

import Link from 'next/link';
import styles from '../service-detail.module.css';

export default function MedicalTranscriptionPage() {
  return (
    <div className={styles.medicalPage}>
      {/* Editorial Hero */}
      <section className={styles.medicalHero}>
        <div className={styles.container}>
          <div style={{ padding: '0 0 2rem 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link> &nbsp; / &nbsp; Services
          </div>
          <h1 className={styles.title}>Medical Transcription</h1>
          <p className={styles.subtitle}>
            Advance Transcription offers fast, secure, and accurate medical transcription for healthcare providers of all sizes. 
            We ensure every note is clear, consistent, and fully HIPAA compliant. Partner with us to simplify your workflow 
            and improve overall efficiency in patient care.
          </p>
          <a href="/#contact" className="btn-primary" style={{ padding: '1.25rem 2.5rem', borderRadius: '50px' }}>Contact Us Today</a>
        </div>
      </section>

      {/* Delivered Fast Section */}
      <section className={styles.deliveredFast}>
        <div className={styles.container} style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className={styles.deliveredTitle}>Delivered Fast.</h2>
            <p className={styles.deliveredText}>
              Advance Transcription provides fast, secure, and highly accurate medical transcription services tailored to the needs 
              of today{"'"}s healthcare providers. Whether you run a solo practice or a multi-provider clinic, our team ensures 
              that your dictated notes are transcribed clearly, consistently, and with full HIPAA compliance. We leverage 
              skilled professionals and advanced tools to deliver documentation you can trust.
            </p>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', padding: '3rem', borderRadius: '12px', border: '1px solid #bbf7d0', textAlign: 'center' }}>
                <span style={{ fontSize: '5rem' }}>👨‍⚕️</span>
                <div style={{ marginTop: '1.5rem', fontWeight: '800', fontSize: '1.1rem', color: '#166534' }}>100% HIPAA-Compliant Processes</div>
          </div>
        </div>
      </section>

      {/* Built for Busy Providers Grid */}
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

      {/* EHR/EMR Integration */}
      <section className={styles.ehrSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>Integrated with Your EHR/EMR</h2>
            <p style={{ color: '#475569', maxWidth: '800px', margin: '1.5rem auto', fontSize: '1.1rem' }}>
              We work directly within your existing electronic health record or medical records system — 
              ensuring every report is accurately entered into the correct patient chart without disrupting your workflow.
            </p>
          </div>

          <div className={styles.ehrGrid}>
             <div className={styles.ehrItem}>✅ Practice Fusion</div>
             <div className={styles.ehrItem}>✅ NextGen</div>
             <div className={styles.ehrItem}>✅ Allscripts</div>
             <div className={styles.ehrItem}>✅ Amazing Charts</div>
             <div className={styles.ehrItem}>✅ Athenahealth</div>
             <div className={styles.ehrItem}>✅ Greenway Health</div>
             <div className={styles.ehrItem}>✅ eClinicalWorks (eCW)</div>
             <div className={styles.ehrItem}>✅ MDOffice</div>
             <div className={styles.ehrItem}>✅ CareCloud</div>
             <div className={styles.ehrItem}>✅ Cerner</div>
             <div className={styles.ehrItem}>✅ Meditech</div>
             <div className={styles.ehrItem}>✅ Centricity</div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>
              And many more — including specialty-specific systems for behavioral health, 
              urgent care, physical therapy, and surgical practices.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Templates Section */}
      <section className={styles.templatesSection}>
        <div className={styles.container} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
             <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0f172a', marginBottom: '1.5rem' }}>Custom Templates. No Extra Charge.</h2>
             <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.7' }}>
               We adapt to your preferred templates, formatting style, and workflow at no additional cost. 
               Whether you use structured SOAP notes, narrative reports, or specialty-specific formats, 
               we{"'"}ll match your exact requirements — and adjust as you evolve.
             </p>

             <div className={styles.checklist}>
                <div className={styles.checkItem}><span className={styles.checkIcon}>►</span> 100% HIPAA-compliant processes</div>
                <div className={styles.checkItem}><span className={styles.checkIcon}>►</span> Encrypted file transfer and storage</div>
                <div className={styles.checkItem}><span className={styles.checkIcon}>►</span> U.S.-focused quality standards</div>
                <div className={styles.checkItem}><span className={styles.checkIcon}>►</span> Confidentiality agreements in place with all team members</div>
             </div>
          </div>

          <div>
             <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '2.5rem', fontWeight: '800' }}>Who This Service Is For</h3>
             <ul className={styles.whoGrid} style={{ listStyle: 'none', padding: 0 }}>
                <li className={styles.whoItem}>
                   <span style={{ fontSize: '2rem' }}>🏥</span>
                   <span className={styles.whoText}>Group Practices & Multispecialty Clinics</span>
                </li>
                <li className={styles.whoItem}>
                   <span style={{ fontSize: '2rem' }}>🩺</span>
                   <span className={styles.whoText}>Urgent Care & Walk-In Clinics</span>
                </li>
                <li className={styles.whoItem}>
                   <span style={{ fontSize: '2rem' }}>🤝</span>
                   <span className={styles.whoText}>Specialists (Cardiology, Neurology, etc.)</span>
                </li>
             </ul>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section style={{ padding: '6rem 0', background: '#0f172a', textAlign: 'center', color: 'white' }}>
          <div className={styles.container}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '900' }}>Ready to Streamline Your Practice?</h2>
             <Link href="/#contact" className="btn-primary" style={{ padding: '1.25rem 3.5rem', borderRadius: '50px', background: '#38bdf8', color: '#0f172a' }}>GET STARTED NOW</Link>
          </div>
      </section>
    </div>
  );
}
