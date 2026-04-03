'use client';

import Link from 'next/link';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Editorial Hero */}
      <section className={styles.aboutHero}>
        <div className={styles.container}>
          <div style={{ padding: '0 0 2rem 0', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            Est. 1999 &nbsp; / &nbsp; Advance Transcription
          </div>
          <h1 className={styles.heroTitle}>About Advance Transcription</h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
            A legacy of precision and integrity in healthcare documentation. 
            Supporting medical professionals across the United States for over two decades.
          </p>
        </div>
      </section>

      {/* Precision Section with Image Grid */}
      <section className={styles.precisionSection}>
        <div className={styles.container} style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h2 className={styles.precisionTitle}>Precision. Integrity. Reliability.</h2>
            <p className={styles.precisionText}>
              Advance Transcription is a healthcare-focused transcription service committed to 
              delivering timely, accurate, and secure documentation to medical professionals 
              across the United States. We serve as a dependable extension of your practice — 
              ensuring that every dictated report is transcribed with clarity, consistency, and compliance.
            </p>
            <p className={styles.precisionText} style={{ marginTop: '2rem' }}>
              Our team combines industry expertise with advanced technology to streamline your 
              documentation process. With us, you gain more time to focus on patient care 
              while we take care of your records.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
             <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '16px', backgroundColor: '#f8fafc' }}>
                <span style={{ fontSize: '5rem' }}>👨‍⚕️</span>
                <div style={{ marginTop: '1.5rem', fontWeight: '900', fontSize: '1.2rem', color: '#0f172a' }}>Human Expertise</div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.5rem' }}>Dedicated medical transcriptionists with specialization in 20+ clinical areas.</p>
             </div>
             <div style={{ width: '150px', height: '150px', backgroundColor: '#0d9488', borderRadius: '50%', position: 'absolute', top: '-40px', right: '-40px', opacity: '0.1', zIndex: '-1' }}></div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Satisfied Healthcare Providers</div>
            </div>
            <div>
              <div className={styles.statNumber}>25+ Yrs</div>
              <div className={styles.statLabel}>Experience in Medical Transcription</div>
            </div>
            <div>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>HIPAA Compliant & Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center' }}>
             <span style={{ color: '#0d9488', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Our Purpose</span>
             <h2 style={{ fontSize: '3rem', fontWeight: '950', marginTop: '1rem', color: '#0f172a' }}>Mission, Vision & Commitment</h2>
          </div>
          
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
               <h3 className={styles.cardTitle}>Mission Statement</h3>
               <p className={styles.cardText}>
                  To provide exceptional transcription services that enhance clinical efficiency, 
                  reduce documentation burden, and support better patient care — all while 
                  maintaining the highest standards of accuracy, security, and professionalism.
               </p>
            </div>
            <div className={styles.missionCard} style={{ backgroundColor: '#0f172a', color: 'white' }}>
               <h3 className={styles.cardTitle} style={{ color: 'white' }}>Vision Statement</h3>
               <p className={styles.cardText} style={{ color: '#94a3b8' }}>
                  To be a trusted, long-term partner in healthcare documentation — empowering 
                  providers through seamless, technology-enabled transcription solutions that 
                  adapt to the ever-evolving needs of modern medicine.
               </p>
            </div>
            <div className={styles.missionCard}>
               <h3 className={styles.cardTitle}>Our Commitment</h3>
               <p className={styles.cardText}>
                  Accurate documentation is critical to quality patient care, smooth clinical workflows, 
                  and medical-legal processes. Our services ease the administrative burden while ensuring 
                  accuracy and security in every single report.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart 5-column grid */}
      <section className={styles.apartSection}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center' }}>
             <h2 style={{ fontSize: '3rem', fontWeight: '950', color: '#0f172a' }}>What Sets Us Apart</h2>
             <div style={{ width: '100px', height: '4px', background: '#0d9488', margin: '1.5rem auto' }}></div>
          </div>

          <div className={styles.apartGrid}>
            <div className={styles.apartCard}>
               <div className={styles.apartIcon}>⏱️</div>
               <h4 className={styles.apartTitle}>Timely Delivery</h4>
               <p className={styles.apartText}>Standard turnaround of 12 hours, with expedited STAT options available (2–6 hours).</p>
            </div>
            <div className={styles.apartCard}>
               <div className={styles.apartIcon}>🎙️</div>
               <h4 className={styles.apartTitle}>Easy Dictation</h4>
               <p className={styles.apartText}>Dictate using mobile, landline, digital recorder, or our dedicated 24/7 toll-free system.</p>
            </div>
            <div className={styles.apartCard}>
               <div className={styles.apartIcon}>🔄</div>
               <h4 className={styles.apartTitle}>Seamless Integration</h4>
               <p className={styles.apartText}>Transcripts delivered by secure email, uploaded into your EHR/EMR, or accessed via portal.</p>
            </div>
            <div className={styles.apartCard}>
               <div className={styles.apartIcon}>⚙️</div>
               <h4 className={styles.apartTitle}>Free Customization</h4>
               <p className={styles.apartText}>Templates and formatting tailored to your specific preferences — at no additional cost.</p>
            </div>
            <div className={styles.apartCard}>
               <div className={styles.apartIcon}>💰</div>
               <h4 className={styles.apartTitle}>Fair Pricing</h4>
               <p className={styles.apartText}>Competitive per-line and monthly flat-rate plans. No hidden costs. No minimum usage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className={styles.whoSection}>
        <div className={styles.container}>
          <div className={styles.whoGrid}>
             <div>
                <h2 style={{ fontSize: '3.5rem', fontWeight: '950', color: '#0f172a', marginBottom: '3rem' }}>Who We Serve</h2>
                <div className={styles.whoList}>
                   <div className={styles.whoItem}>
                      <span className={styles.whoIcon}>🩺</span>
                      <span className={styles.whoText}>Independent Physicians & Specialists</span>
                   </div>
                   <div className={styles.whoItem}>
                      <span className={styles.whoIcon}>🏢</span>
                      <span className={styles.whoText}>Multi-provider Clinics & Group Practices</span>
                   </div>
                   <div className={styles.whoItem}>
                      <span className={styles.whoIcon}>⚖️</span>
                      <span className={styles.whoText}>IME Providers and Evaluators</span>
                   </div>
                   <div className={styles.whoItem}>
                      <span className={styles.whoIcon}>👔</span>
                      <span className={styles.whoText}>Legal & Medicolegal Professionals</span>
                   </div>
                   <div className={styles.whoItem}>
                      <span className={styles.whoIcon}>🔬</span>
                      <span className={styles.whoText}>Diagnostic Centers & Healthcare Networks</span>
                   </div>
                </div>
             </div>
             <div style={{ textAlign: 'center', backgroundColor: '#f0fdf4', padding: '5rem', borderRadius: '50% 50% 50% 0' }}>
                 <span style={{ fontSize: '8rem' }}>👩‍⚕️</span>
                 <div style={{ marginTop: '2rem', fontWeight: '900', fontSize: '1.5rem', color: '#065f46' }}>Trusted Excellence</div>
                 <p style={{ color: '#065f46', opacity: 0.7, marginTop: '1rem' }}>Supporting providers across the US.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section style={{ padding: '8rem 0', background: '#0f172a', textAlign: 'center', color: 'white' }}>
        <div className={styles.container}>
           <h2 style={{ fontSize: '3rem', fontWeight: '950', marginBottom: '2rem' }}>Ready to Experience Better Documentation?</h2>
           <Link href="/request-demo" className="btn-primary" style={{ padding: '1.5rem 4rem', borderRadius: '50px', background: '#38bdf8', color: '#0f172a', fontSize: '1.1rem' }}>REQUEST A FREE DEMO</Link>
           <p style={{ marginTop: '2rem', color: '#94a3b8', fontSize: '0.9rem' }}>Or call us at +1 (727) 308-2312 to speak with a representative.</p>
        </div>
      </section>
    </div>
  );
}
