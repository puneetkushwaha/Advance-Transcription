'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactForm({ settings }) {
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
    <div className={styles.formSection}>
      <div className={styles.formWrapper}>
        {status === 'success' ? (
          <div className={styles.successMsg}>
            <a href={`tel:${(settings.client_phone || '').replace(/[^0-9+]/g, '')}`} style={{ fontWeight: 'bold', borderBottom: '1px solid #f3f4f6', paddingBottom: '0.5rem' }}>📞 {settings.client_phone}</a>
            <h2 className={styles.formTitle}>Consultation Requested!</h2>
            <p style={{ color: '#4b5563', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Thank you for reaching out. Our team will contact you within one business day.
            </p>
            <button onClick={() => setStatus(null)} className={styles.submitBtn}>Send Another Message</button>
          </div>
        ) : (
          <>
            <h2 className={styles.formTitle}>Request a Consultation</h2>
            <p className={styles.formSubtitle}>We{"'"}re Here To Help</p>
            
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
                  <a href={`mailto:${settings.client_email}`} style={{ marginRight: '1rem' }}>{settings.client_email}</a>
                  <span style={{ margin: '0 0.5rem' }}>/</span>
                  <a href={`tel:${(settings.client_phone || '').replace(/[^0-9+]/g, '')}`} style={{ marginLeft: '1rem', fontWeight: 'bold' }}>{settings.client_phone}</a>
                  <br/>
                  An error occurred. Please try again or call us directly.
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
