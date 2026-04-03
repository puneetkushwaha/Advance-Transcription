'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', serviceType: 'Medical Transcription', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formSource: 'contacts' })
      });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', serviceType: 'Medical Transcription', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <div className={styles.homeContainer}>

      {/* Compact & Striking Hero Section */}
      <section className={styles.heroSection}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>HIPAA Compliant Documentation</span>
            <h1 className={styles.heroTitle}>Advanced Transcription Services</h1>
            <p className={styles.heroSubtitle}>
              Committed to delivering timely, accurate, and secure documentation to medical professionals across the United States.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1rem', borderRadius: '50px', textDecoration: 'none' }}>START FREE TRIAL</Link>
              <a href="#services" className="btn-outline" style={{ padding: '1.25rem 2.5rem', fontSize: '1rem', borderRadius: '50px', textDecoration: 'none' }}>Services</a>
            </div>
          </div>

          <div className={styles.heroGraphic}>
            <div className={styles.dashboardMockup}>
              <div className={styles.dashHeader}>
                <div className={styles.dot} style={{ background: '#ef4444' }}></div>
                <div className={styles.dot} style={{ background: '#f59e0b' }}></div>
                <div className={styles.dot} style={{ background: '#10b981' }}></div>
              </div>
              <div className={styles.dashBody}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <div style={{ width: '40%', height: '8px', background: '#e2e8f0', borderRadius: '4px' }}></div>
                  <div style={{ width: '20%', height: '8px', background: '#0088cc', borderRadius: '4px' }}></div>
                </div>
                <div className={styles.dashRow} style={{ width: '100%' }}></div>
                <div className={styles.dashRow} style={{ width: '85%' }}></div>
                <div className={styles.dashRow} style={{ width: '90%' }}></div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem', padding: '1rem', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                  <div style={{ color: '#16a34a', fontSize: '1.5rem', fontWeight: 'bold' }}>✓</div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#166534' }}>EHR Sync Complete</div>
                    <div style={{ fontSize: '0.8rem', color: '#15803d' }}>Ready for physician review</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Trust Stats */}
      <div className="container">
        <section className={styles.statsSection}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className={styles.statBlock}>
              <div className={styles.statNumber}>12<span style={{ fontSize: '1.5rem' }}>hr</span></div>
              <div className={styles.statText}>Delivery standard</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statNumber}>EHR</div>
              <div className={styles.statText}>Direct Integration</div>
            </div>
            <div className={styles.statBlock}>
              <div className={styles.statNumber}>HIPAA</div>
              <div className={styles.statText}>100% Compliant</div>
            </div>
            <div className={styles.statBlock} style={{ borderRight: 'none' }}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statText}>Secure Dictation</div>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Section (New) */}
      <section className={styles.whyChooseSection}>
        <div className="container" id="why-choose">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a' }}>Why Choose Advance Transcription?</h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <img src="/images/fast_turnaround.png" alt="Fast Turnaround" className={styles.whyImage} />
              <div className={styles.whyTitle}>Fast Turnaround</div>
              <div className={styles.whyText}>12-hour standard delivery</div>
            </div>
            <div className={styles.whyCard}>
              <img src="/images/ehr.png" alt="EHR Integration" className={styles.whyImage} />
              <div className={styles.whyTitle}>EHR/EMR Integration</div>
              <div className={styles.whyText}>We transcribe directly into your system</div>
            </div>
            <div className={styles.whyCard}>
              <img src="/images/pricing.png" alt="Transparent Pricing" className={styles.whyImage} />
              <div className={styles.whyTitle}>Transparent Pricing</div>
              <div className={styles.whyText}>Starting at just $0.06 per line</div>
            </div>
            <div className={styles.whyCard}>
              <img src="/images/hipaa.png" alt="HIPAA Compliant" className={styles.whyImage} />
              <div className={styles.whyTitle}>HIPAA Compliant</div>
              <div className={styles.whyText}>Secure, reliable, and U.S. healthcare focused</div>
            </div>
            <div className={styles.whyCard}>
              <img src="/images/support.png" alt="Weekend Support" className={styles.whyImage} />
              <div className={styles.whyTitle}>Weekend Support</div>
              <div className={styles.whyText}>Available on request</div>
            </div>
            <div className={styles.whyCard}>
              <img src="/images/gear.png" alt="Fully Customizable" className={styles.whyImage} />
              <div className={styles.whyTitle}>Fully Customizable</div>
              <div className={styles.whyText}>Templates tailored to your practice (free!)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.sectionPadding} style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2>Our Transcription Services</h2>
            <p style={{ maxWidth: '700px', margin: '1rem auto 0 auto', fontSize: '1.1rem' }}>
              Well renowned medical transcription & virtual scribe service acting as a dependable extension of your practice.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {[
              {
                title: 'Medical Transcription',
                slug: '/services/medical-transcription',
                desc: 'Advance Transcription offers fast, secure, and accurate medical transcription for healthcare providers of all sizes. We ensure every note is clear, consistent, and fully HIPAA compliant.',
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              },
              {
                title: 'IME Transcription',
                slug: '/services/ime-transcription',
                desc: 'We deliver Independent Medical Examination reports precisely formatted to your specifications. Each report is accurate, professional, and tailored to meet medical and legal standards.',
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6" /><path d="M8 11h6" /></svg>
              },
              {
                title: 'AI Transcription',
                slug: '/services/ai-transcription',
                desc: 'Advance Transcription now offers AI-enhanced transcription for clients who want rapid turnaround and scalable support perfect for general business, educational or research use cases.',
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              },
              {
                title: 'Legal Transcription',
                slug: '/services/legal-transcription',
                desc: 'Legal, Law Enforcement & Medicolegal Transcription services for attorneys, law firms, insurers, and case managers.',
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 13V9a2 2 0 0 0-4 0v4" /><path d="M4 17h16" /><line x1="12" y1="13" x2="12" y2="17" /><path d="M8 17v4H4" /><path d="M20 17v4h-4" /></svg>
              },
              {
                title: 'General Transcription',
                slug: '/services/general-transcription',
                desc: 'Flexible, non-medical transcription services for administrative, academic, or corporate use.',
                icon: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
              },
            ].map((srv, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{srv.icon}</div>
                <h3 className={styles.serviceTitle}>{srv.title}</h3>
                <p className={styles.serviceDesc}>{srv.desc}</p>
                <Link 
                  href={srv.slug || '#contact'} 
                  style={{ 
                    display: 'inline-block', 
                    marginTop: '1.5rem', 
                    color: 'var(--primary)', 
                    fontWeight: '800', 
                    textTransform: 'uppercase', 
                    fontSize: '0.85rem', 
                    letterSpacing: '1px', 
                    textDecoration: 'none',
                    borderBottom: '2px solid transparent',
                    transition: 'border-color 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
                >
                  Know More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium How It Works Section */}
      <section id="how-it-works" className="section-white" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'center' }}>

          {/* Left: Phone Graphic */}
          <div className={styles.phoneContainer}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneNotch}></div>
              <div className={styles.phoneScreen}>
                {/* Brand Logo inside phone */}
                <div style={{ textAlign: 'center', margin: '3.5rem 0 2rem 0' }}>
                  <img src="/images/stethoscope.png" alt="Logo" style={{ width: '45px', marginBottom: '0.5rem' }} />
                  <div style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.25rem', lineHeight: '1.1' }}>
                    Advance<br />
                    <span style={{ color: '#0f172a', fontSize: '1.05rem' }}>Transcription</span>
                  </div>
                </div>

                {/* Content inside phone */}
                <div className={styles.phoneAppBlock} style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                  <svg width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.75rem' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><circle cx="12" cy="13" r="2" /><path d="M12 11v-1" /></svg>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>Strong technological support</div>
                </div>

                <div className={styles.phoneAppBlock} style={{ backgroundColor: '#eff6ff', color: 'var(--primary)', border: '1px solid #bfdbfe', padding: '1.5rem 1rem' }}>
                  <svg width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.75rem' }}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>24/7 Dictation</div>
                </div>
              </div>
            </div>
            {/* Flab badge similar to the user's mockup */}
            <div className={styles.phoneFloatingBadge}>ADVANCE</div>
          </div>

          {/* Right: Steps Content */}
          <div style={{ padding: '0 2rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '3rem', fontWeight: '800' }}>How It Works?</h2>
            <div className={styles.stepsList}>
              <div className={styles.stepItem}>
                <div className={styles.stepIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32 0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05A1.976 1.976 0 0 0 23 12v-2zM3 21h3V9H3v12z" /></svg>
                </div>
                <div>
                  <h3 className={styles.stepTitle}>Dictate</h3>
                  <p className={styles.stepText}>Use your <strong>mobile device, landline, digital recorder,</strong> or our <strong>toll-free dictation system</strong> — available 24/7.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32 0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05A1.976 1.976 0 0 0 23 12v-2zM3 21h3V9H3v12z" /></svg>
                </div>
                <div>
                  <h3 className={styles.stepTitle}>We Transcribe</h3>
                  <p className={styles.stepText}>Your audio is securely processed by our expert transcription team, ensuring accuracy and compliance.</p>
                </div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32 0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05A1.976 1.976 0 0 0 23 12v-2zM3 21h3V9H3v12z" /></svg>
                </div>
                <div>
                  <h3 className={styles.stepTitle}>Get Reports</h3>
                  <p className={styles.stepText}>Transcripts are delivered to your inbox, directly into your EHR, or you can securely download them from our encrypted server at your convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section id="pricing" className={styles.sectionPadding} style={{ backgroundColor: '#ffffff', padding: '5rem 0 0 0', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '3rem', alignItems: 'center' }}>

          {/* Left Content */}
          <div style={{ padding: '0 2rem 2rem 2rem' }}>
            <h2 style={{ fontSize: '2.8rem', color: '#1e3a8a', marginBottom: '2.5rem', fontWeight: '800' }}>Transparent Pricing</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ color: '#10b981', fontSize: '1.25rem', marginTop: '0.1rem' }}>👉</span>
                <div style={{ fontSize: '1.25rem', color: '#0f172a' }}>
                  <strong>Per-Line:</strong> Starting at <strong>$0.06/line.</strong>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ color: '#10b981', fontSize: '1.25rem', marginTop: '0.1rem' }}>👉</span>
                <div style={{ fontSize: '1.25rem', color: '#0f172a' }}>
                  <strong>Unlimited Plan:</strong> $350/month flat.
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ color: '#10b981', fontSize: '1.25rem', marginTop: '0.1rem' }}>👉</span>
                <div style={{ fontSize: '1.25rem', color: '#0f172a' }}>
                  <strong>No Setup Fees. No Minimums. Full EMR Support.</strong>
                </div>
              </div>
            </div>

            <Link href="/pricing" className="pricing-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2rem', border: '2px solid #1e3a8a', borderRadius: '50px', color: '#1e3a8a', fontWeight: '700', fontSize: '1.1rem', transition: 'all 0.3s', textDecoration: 'none' }}>
              View Pricing Table
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 21A10 10 0 1 0 11 1V21z" /><path d="M1 11H21" /><path d="M16 11A5 5 0 1 1 6 11" /></svg>
            </Link>
          </div>

          {/* Right Image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'flex-end', position: 'relative' }}>
            <img
              src="/images/doctor_portrait.png"
              alt="Healthcare Professional"
              style={{ width: '100%', maxWidth: '380px', objectFit: 'contain', borderBottom: 'none', display: 'block' }}
            />
          </div>

        </div>
      </section>

      {/* Trusted By Section / Testimonials Intro */}
      <section style={{ backgroundColor: '#ffffff', padding: '5rem 0 2rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: '#10b981', fontSize: '3rem', marginBottom: '1.5rem' }}>💎</div>
          <h2 style={{ fontSize: '2rem', color: '#0f172a', fontWeight: '800', marginBottom: '1.5rem' }}>Trusted by Healthcare Providers, IME Specialists, and Legal Professionals Nationwide</h2>
          <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: '1.7', margin: '0 auto' }}>
            At Advance Transcription, we{"'"}re proud to serve a wide range of clients — from busy medical practices and IME evaluators to attorneys and independent providers. Here{"'"}s what some of them have to say about our service:
          </p>
        </div>
      </section>

      {/* Contact Form Section (White and Green Split) */}
      <section id="contact" style={{ backgroundColor: '#ffffff', padding: '6rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'stretch' }}>

          {/* Left Side: Text and Icon */}
          <div style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>A Trusted Partner In Healthcare Documentation</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.7', marginBottom: '3rem' }}>
              <strong>Advance Transcription</strong> is not just a service provider — we are a strategic partner committed to supporting your clinical operations with efficiency and professionalism. Our team is experienced, responsive, and dedicated to maintaining the integrity of your documentation process.
            </p>

            <div style={{ color: '#10b981', marginBottom: '1.5rem' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L2 12h3v8h14v-8h3L12 3zm-3 12h2v2h2v-2h2v-2h-2v-2h-2v2H9v2z" />
              </svg>
            </div>

            <h3 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: '800', marginBottom: '1rem' }}>Let{"'"}s Connect</h3>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              If you are seeking a reliable transcription partner that understands the unique demands of the healthcare industry, we invite you to get in touch.
            </p>

            <div>
              <Link href="/contact" style={{ display: 'inline-block', padding: '1rem 3rem', backgroundColor: '#0f172a', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', textDecoration: 'none' }}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side: Form on Dark Slate Background */}
          <div id="contactForm" style={{ background: 'linear-gradient(160deg, #1e293b 0%, #0f172a 100%)', padding: '3.5rem', borderRadius: '4px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)' }}>
            {submitStatus === 'success' ? (
              <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="60" height="60" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                <h3 style={{ color: '#bae6fd', marginBottom: '1rem', fontSize: '1.5rem' }}>Message Sent!</h3>
                <p style={{ color: '#e0f2fe', fontSize: '1rem' }}>Thank you. Our team will contact you shortly.</p>
                <button onClick={() => setSubmitStatus(null)} style={{ marginTop: '2.5rem', padding: '0.8rem 2rem', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '1rem', top: '1.1rem', color: '#444' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                  </div>
                  <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={styles.inputField} placeholder="Your Name*" style={{ paddingLeft: '3.2rem', paddingRight: '1rem', paddingTop: '1.1rem', paddingBottom: '1.1rem', border: 'none', borderRadius: '4px', fontSize: '1rem' }} />
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '1rem', top: '1.1rem', color: '#444' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  </div>
                  <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={styles.inputField} placeholder="Your Email*" style={{ paddingLeft: '3.2rem', paddingRight: '1rem', paddingTop: '1.1rem', paddingBottom: '1.1rem', border: 'none', borderRadius: '4px', fontSize: '1rem' }} />
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '1rem', top: '1.1rem', color: '#444' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  </div>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className={styles.inputField} placeholder="Your Telephone Number*" style={{ paddingLeft: '3.2rem', paddingRight: '1rem', paddingTop: '1.1rem', paddingBottom: '1.1rem', border: 'none', borderRadius: '4px', fontSize: '1rem' }} />
                </div>

                <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'absolute', left: '1rem', top: '1.1rem', color: '#444' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" /></svg>
                  </div>
                  <textarea required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className={styles.inputField} placeholder="Your Message*" style={{ paddingLeft: '3.2rem', paddingRight: '1rem', paddingTop: '1.1rem', paddingBottom: '1.1rem', border: 'none', borderRadius: '4px', minHeight: '180px', flex: 1, resize: 'none', fontSize: '1rem' }}></textarea>
                </div>

                <button type="submit" disabled={submitStatus === 'sending...'} style={{ backgroundColor: '#38bdf8', color: '#0f172a', width: '100%', padding: '1.25rem', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', marginTop: '0.5rem', transition: 'background-color 0.3s' }}>
                  {submitStatus === 'sending...' ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
