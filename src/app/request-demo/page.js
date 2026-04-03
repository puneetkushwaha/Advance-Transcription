'use client';

import { useState, useRef } from 'react';
import styles from '../page.module.css';
import { supabase } from '@/lib/supabase';

export default function RequestDemo() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [submitStatus, setSubmitStatus] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 100 * 1024 * 1024) {
        alert('File is too large. Max limit is 100MB.');
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      if (selectedFile.size > 100 * 1024 * 1024) {
        alert('File is too large. Max limit is 100MB.');
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending...');
    setUploadProgress(0);

    let fileUrl = null;

    try {
      // 1. Upload to Supabase Storage if file exists
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `uploads/${fileName}`;

        const { data, error: uploadError } = await supabase.storage
          .from('demo-attachments')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false,
          });

        if (uploadError) throw uploadError;

        // Get Public URL
        const { data: { publicUrl } } = supabase.storage
          .from('demo-attachments')
          .getPublicUrl(filePath);
        
        fileUrl = publicUrl;
      }

      // 2. Submit to our API
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fileUrl: fileUrl
        }),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFile(null);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ background: 'linear-gradient(160deg, #1e293b 0%, #0f172a 100%)', padding: '4rem', borderRadius: '12px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
          {submitStatus === 'success' ? (
            <div style={{ textAlign: 'center', padding: '4rem' }}>
              <div style={{ color: '#10b981', fontSize: '5rem', marginBottom: '1.5rem' }}>✓</div>
              <h1 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Demo Request Received!</h1>
              <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto' }}>Thank you. Our team will contact you shortly to schedule a personalized walkthrough of our transcription platform.</p>
              <a href="/" style={{ display: 'inline-block', marginTop: '3rem', padding: '1rem 3rem', backgroundColor: '#38bdf8', color: '#0f172a', textDecoration: 'none', borderRadius: '50px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Return Home</a>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.8rem', fontWeight: '900' }}>Request a Demo</h1>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>See how Advance Transcription can streamline your documentation workflow. Fill out the details below.</p>
              </div>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className={styles.inputGroup}>
                    <label style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Your Name*</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={styles.inputField} placeholder="Full Name" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #334155', color: 'white' }} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Your Email*</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={styles.inputField} placeholder="email@example.com" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #334155', color: 'white' }} />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Your Telephone Number*</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className={styles.inputField} placeholder="+1 (000) 000-0000" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #334155', color: 'white' }} />
                </div>

                <div className={styles.inputGroup}>
                  <label style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Your Message*</label>
                  <textarea required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className={styles.inputField} placeholder="How can we help you?" style={{ minHeight: '150px', background: 'rgba(255,255,255,0.05)', border: '1px solid #334155', color: 'white', resize: 'none' }}></textarea>
                </div>

                <div className={styles.inputGroup}>
                  <label style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Upload Reference Files (Optional)</label>
                  <div 
                    className={styles.uploadArea}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="audio/*,video/*,image/*,.pdf,.doc,.docx"
                      style={{ display: 'none' }}
                    />
                    <span style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📄</span>
                    <p style={{ margin: 0, fontSize: '1rem' }}>
                      {file ? <strong style={{ color: '#38bdf8' }}>{file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</strong> : 'Click or drag Voice, Video, or Photo (Max 100MB)'}
                    </p>
                    <button type="button" className={styles.chooseFileBtn} style={{ marginTop: '1.2rem' }}>Choose File</button>
                  </div>
                </div>

                <button type="submit" disabled={submitStatus === 'sending...'} className={styles.submitBtn} style={{ padding: '1.5rem', marginTop: '1rem' }}>
                  {submitStatus === 'sending...' ? 'Sending Request...' : 'Submit Request'}
                </button>
                
                {submitStatus === 'error' && (
                  <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '1rem' }}>Something went wrong. Please try again or call us directly.</p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
