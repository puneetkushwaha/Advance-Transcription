'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './contact.module.css';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Medical',
    organizationName: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', serviceType: 'Medical', organizationName: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
            We're here to help you optimize your documentation workflow.
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
                <a href={`mailto:${process.env.NEXT_PUBLIC_CLIENT_EMAIL}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{process.env.NEXT_PUBLIC_CLIENT_EMAIL}</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Phone:</span>{' '}
                <a href={`tel:${(process.env.NEXT_PUBLIC_CLIENT_PHONE || '').replace(/[^0-9+]/g, '')}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>{process.env.NEXT_PUBLIC_CLIENT_PHONE}</a>
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
                {process.env.NEXT_PUBLIC_CLIENT_ADDRESS_LINE1}<br/>
                {process.env.NEXT_PUBLIC_CLIENT_ADDRESS_LINE2}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={styles.formSection}>
            <div className={styles.formWrapper}>
              {status === 'success' ? (
                <div className={styles.successMsg}>
                  <a href={`tel:${(process.env.NEXT_PUBLIC_CLIENT_PHONE || '').replace(/[^0-9+]/g, '')}`} style={{ fontWeight: 'bold', borderBottom: '1px solid #f3f4f6', paddingBottom: '0.5rem' }}>📞 {process.env.NEXT_PUBLIC_CLIENT_PHONE}</a>
                  <h2 className={styles.formTitle}>Consultation Requested!</h2>
                  <p style={{ color: '#4b5563', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Thank you for reaching out. Our team will contact you within one business day.
                  </p>
                  <button onClick={() => setStatus(null)} className={styles.submitBtn}>Send Another Message</button>
                </div>
              ) : (
                <>
                  <h2 className={styles.formTitle}>Request a Consultation</h2>
                  <p className={styles.formSubtitle}>We’re Here To Help</p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Name*</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Enter your name" 
                        className={styles.input}
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Email*</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="Enter your email" 
                        className={styles.input}
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Phone Number*</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="Enter your phone no." 
                        className={styles.input}
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Type of Service</label>
                        <select 
                          className={styles.select}
                          value={formData.serviceType}
                          onChange={e => setFormData({...formData, serviceType: e.target.value})}
                        >
                          <option>Medical</option>
                          <option>IME</option>
                          <option>Legal</option>
                          <option>General</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Organization Name</label>
                        <input 
                          type="text" 
                          placeholder="Your Clinic/Organization" 
                          className={styles.input}
                          value={formData.organizationName}
                          onChange={e => setFormData({...formData, organizationName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Message*</label>
                      <textarea 
                        required 
                        placeholder="How can we help you?" 
                        className={styles.textarea}
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className={styles.submitBtn}
                      disabled={status === 'sending...'}
                    >
                      {status === 'sending...' ? 'Sending...' : 'Request Consultation'}
                    </button>
                    {status === 'error' && (
                      <div style={{ color: '#ef4444', marginTop: '1rem', fontWeight: 'bold' }}>
                        <a href={`mailto:${process.env.NEXT_PUBLIC_CLIENT_EMAIL}`} style={{ marginRight: '1rem' }}>{process.env.NEXT_PUBLIC_CLIENT_EMAIL}</a>
                        <span style={{ margin: '0 0.5rem' }}>/</span>
                        <a href={`tel:${(process.env.NEXT_PUBLIC_CLIENT_PHONE || '').replace(/[^0-9+]/g, '')}`} style={{ marginLeft: '1rem', fontWeight: 'bold' }}>{process.env.NEXT_PUBLIC_CLIENT_PHONE}</a>
                        <br/>
                        An error occurred. Please try again or call us directly.
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
