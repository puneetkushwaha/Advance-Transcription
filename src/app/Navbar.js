'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      {/* Top Bar (Desktop only) */}
      <div style={{ backgroundColor: '#f3f4f6', borderBottom: '1px solid var(--border)', padding: '0.5rem 0', fontSize: '0.85rem', color: '#6b7280' }} className="top-bar-desktop">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <a href={`mailto:${process.env.NEXT_PUBLIC_CLIENT_EMAIL}`} style={{ marginRight: '1rem' }}>{process.env.NEXT_PUBLIC_CLIENT_EMAIL}</a>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <a href={`tel:${(process.env.NEXT_PUBLIC_CLIENT_PHONE || '').replace(/[^0-9+]/g, '')}`} style={{ marginLeft: '1rem', fontWeight: 'bold' }}>{process.env.NEXT_PUBLIC_CLIENT_PHONE}</a>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/signup" style={{ fontWeight: '600', color: 'var(--primary)' }}>Sign up</Link>
            <span>/</span>
            <Link href="/login" style={{ fontWeight: '600', color: '#4b5563' }}>Login</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav style={{ backgroundColor: 'var(--navbar-bg)', padding: '1.25rem 0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/transparent.png" 
              alt="Advance Transcription Logo" 
              style={{ height: '50px', width: 'auto', objectFit: 'contain' }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#111827', lineHeight: '1.2' }}>
                Advance
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Transcription
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="desktop-menu" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', fontSize: '0.9rem' }}>
            <Link href="/" style={{ fontWeight: '600', color: '#4b5563' }}>Home</Link>
            <Link href="/about" style={{ fontWeight: '600', color: '#4b5563' }}>About Us</Link>

            {/* Services Dropdown */}
            <div
              style={{ position: 'relative', cursor: 'pointer', fontWeight: '600', color: '#4b5563' }}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services ▾
              {isServicesOpen && (
                <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', border: '1px solid var(--border)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0.5rem 0', minWidth: '220px', borderRadius: '4px', zIndex: 10 }}>
                  <Link href="/services/medical-transcription" style={{ display: 'block', padding: '0.5rem 1.5rem', color: '#4b5563' }}>Medical Transcription</Link>
                  <Link href="/services/ime-transcription" style={{ display: 'block', padding: '0.5rem 1.5rem', color: '#4b5563' }}>IME Transcription</Link>
                  <Link href="/services/ai-transcription" style={{ display: 'block', padding: '0.5rem 1.5rem', color: '#4b5563' }}>AI Transcription</Link>
                  <Link href="/services/legal-transcription" style={{ display: 'block', padding: '0.5rem 1.5rem', color: '#4b5563' }}>Legal Transcription</Link>
                  <Link href="/services/general-transcription" style={{ display: 'block', padding: '0.5rem 1.5rem', color: '#4b5563' }}>General Transcription</Link>
                </div>
              )}
            </div>

            <Link href="/pricing" style={{ fontWeight: '600', color: '#4b5563' }}>Pricing</Link>
            <Link href="/testimonials" style={{ fontWeight: '600', color: '#4b5563' }}>Testimonials</Link>
            <Link href="/blog" style={{ fontWeight: '600', color: '#4b5563' }}>Blog</Link>
            <Link href="/contact" style={{ fontWeight: '600', color: '#4b5563' }}>Contact</Link>
            <Link href="/request-demo">
              <button 
                className="btn-primary" 
                style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
              >
                Request for Demo
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', border: 'none', fontSize: '2rem', color: 'var(--primary)', cursor: 'pointer' }}>
            ☰
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)', padding: '1rem 0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', zIndex: 999 }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1rem' }}>
              <a href={`tel:${(process.env.NEXT_PUBLIC_CLIENT_PHONE || '').replace(/[^0-9+]/g, '')}`} style={{ fontWeight: 'bold', borderBottom: '1px solid #f3f4f6', paddingBottom: '0.5rem' }}>📞 {process.env.NEXT_PUBLIC_CLIENT_PHONE}</a>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: '600', color: 'var(--primary)' }}>Sign up</Link>
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: '600' }}>Login</Link>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: '600' }}>Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: '600' }}>About Us</Link>
              <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: '600' }}>Pricing</Link>
              <Link href="/testimonials" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: '600' }}>Testimonials</Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: '600' }}>Blog</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ fontWeight: '600' }}>Contact</Link>
              <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderLeft: '2px solid #f3f4f6' }}>
                <Link href="/services/medical-transcription" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: '#4b5563' }}>Medical Transcription</Link>
                <Link href="/services/ime-transcription" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: '#4b5563' }}>IME Transcription</Link>
                <Link href="/services/ai-transcription" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: '#4b5563' }}>AI Transcription</Link>
                <Link href="/services/legal-transcription" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: '#4b5563' }}>Legal Transcription</Link>
                <Link href="/services/general-transcription" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '0.9rem', color: '#4b5563' }}>General Transcription</Link>
              </div>
              <Link href="/request-demo" onClick={() => setIsMobileMenuOpen(false)}>
                <button 
                  className="btn-primary" 
                  style={{ padding: '0.8rem', fontSize: '0.9rem', width: '100%' }}
                >
                  Request for Demo
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (max-width: 992px) {
          .desktop-menu { display: none !important; }
          .top-bar-desktop { display: none !important; }
        }
        @media (min-width: 993px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
