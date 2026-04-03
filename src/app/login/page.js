'use client';

import Link from 'next/link';
import styles from '../page.module.css';

export default function LoginPortal() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fcfcfc', padding: '6rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#0f172a', fontWeight: '900', marginBottom: '5rem' }}>Client Login</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Box Login Card */}
          <a href="https://account.box.com/login" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#eff6ff', 
              padding: '5rem 3rem', 
              borderRadius: '8px', 
              transition: 'all 0.3s ease',
              border: '1px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.border = '1px solid #1d4ed8';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.border = '1px solid transparent';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{ 
                width: '100px', 
                height: '100px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '2rem',
                border: '2px solid #0f172a'
              }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800' }}>Box Login</h2>
            </div>
          </a>

          {/* Webshuttle Login Card */}
          <a href="https://bytescribe.net/webshuttle21/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#f8fafc', 
              padding: '5rem 3rem', 
              borderRadius: '8px', 
              transition: 'all 0.3s ease',
              border: '1px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.border = '1px solid #0f172a';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.border = '1px solid transparent';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{ 
                width: '100px', 
                height: '100px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '2rem',
                border: '2px solid #0f172a'
              }}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800' }}>Webshuttle Login</h2>
            </div>
          </a>

          {/* Admin Portal Card */}
          <Link href="/admin" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#f1f5f9', 
              padding: '5rem 3rem', 
              borderRadius: '8px', 
              transition: 'all 0.3s ease',
              border: '2px dashed #cbd5e1',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.border = '2px solid #0f172a';
              e.currentTarget.style.background = '#e2e8f0';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.border = '2px dashed #cbd5e1';
              e.currentTarget.style.border = '2px dashed #cbd5e1';
              e.currentTarget.style.background = '#f1f5f9';
            }}
            >
              <div style={{ 
                width: '100px', 
                height: '100px', 
                backgroundColor: '#0f172a', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '2rem',
                color: 'white'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: '800' }}>Admin Portal</h2>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
