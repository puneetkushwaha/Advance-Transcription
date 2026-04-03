'use client';

import { useState } from 'react';
import styles from '../page.module.css';

export default function Signup() {
  const [formData, setFormData] = useState({ 
    firstName: '', 
    email: '', 
    phone: '', 
    address: '' 
  });
  
  const [dictationMethods, setDictationMethods] = useState([]);
  const [retrievalOptions, setRetrievalOptions] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(null);

  const toggleMethod = (method) => {
    if (dictationMethods.includes(method)) {
      setDictationMethods(dictationMethods.filter(m => m !== method));
    } else {
      setDictationMethods([...dictationMethods, method]);
    }
  };

  const toggleOption = (option) => {
    if (retrievalOptions.includes(option)) {
      setRetrievalOptions(retrievalOptions.filter(o => o !== option));
    } else {
      setRetrievalOptions([...retrievalOptions, option]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (dictationMethods.length === 0) {
      alert('Please select at least one method of dictation.');
      return;
    }
    
    setSubmitStatus('sending...');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          dictationMethods,
          retrievalOptions,
        })
      });

      if (res.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setSubmitStatus('error');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', padding: '6rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(300px, 1fr)', gap: '6rem', alignItems: 'start' }}>
        
        {/* Left Side: Information */}
        <div style={{ padding: '2rem 0' }}>
          <div style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Enrollment Form</div>
          <h1 style={{ fontSize: '3.5rem', color: '#0f172a', fontWeight: '900', marginBottom: '2rem', lineHeight: '1.1' }}>Join Advance Transcription Today</h1>
          <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: '1.7', marginBottom: '3rem' }}>
            Ready to experience a documentation workflow that works for you? Our enrollment process is simple and transparent. Join thousands of healthcare providers who trust us with their clinical records.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>1</span>
              </div>
              <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>No setup fees or long-term contracts. Pay only for what you use.</p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#10b981', fontWeight: 'bold' }}>2</span>
              </div>
              <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>Complete HIPAA compliance with end-to-end encryption.</p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#fff7ed', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>3</span>
              </div>
              <p style={{ margin: 0, fontWeight: '600', color: '#1e293b' }}>Dedicated support team available to assist your practice 24/7.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div style={{ backgroundColor: '#f8fafc', padding: '3.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
          {submitStatus === 'success' ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🚀</div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1rem' }}>Welcome!</h2>
              <p style={{ color: '#475569', fontSize: '1.1rem' }}>Your enrollment has been received. Our account manager will contact you within 24 hours to finalize your secure login and EHR connection.</p>
              <button onClick={() => window.location.href = '/'} style={{ marginTop: '2.5rem', padding: '1rem 3rem', backgroundColor: '#0f172a', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', fontWeight: '800' }}>Return to Homepage</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.5rem' }}>Contact Information</h3>
                <input required type="text" placeholder="First Name*" value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} className={styles.inputField} style={{ border: '1px solid #cbd5e1' }} />
                <input required type="email" placeholder="Email Id*" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={styles.inputField} style={{ border: '1px solid #cbd5e1' }} />
                <input required type="tel" placeholder="Phone No.*" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className={styles.inputField} style={{ border: '1px solid #cbd5e1' }} />
                <input required type="text" placeholder="Address*" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} className={styles.inputField} style={{ border: '1px solid #cbd5e1' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f172a' }}>Preferred method of dictation</h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '-0.5rem' }}>Please select at least one option</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {['Toll Free Number', 'Digital Recorder', 'iPhone app', 'Android App'].map(method => (
                    <label key={method} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '0.95rem', color: '#334155' }}>
                      <input type="checkbox" checked={dictationMethods.includes(method)} onChange={() => toggleMethod(method)} style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }} />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f172a' }}>Preferred dictation retrieval options</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {['Secure website', 'Email', 'EHR', 'Fax'].map(option => (
                    <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', fontSize: '0.95rem', color: '#334155' }}>
                      <input type="checkbox" checked={retrievalOptions.includes(option)} onChange={() => toggleOption(option)} style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }} />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" disabled={submitStatus === 'sending...'} style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1.5rem', border: 'none', borderRadius: '8px', fontWeight: '800', fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s', marginTop: '1rem' }}>
                {submitStatus === 'sending...' ? 'Creating Account...' : 'Complete Signup'}
              </button>
              
              {submitStatus === 'error' && (
                <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '-1rem' }}>An error occurred. Please refresh and try again.</p>
              )}
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
