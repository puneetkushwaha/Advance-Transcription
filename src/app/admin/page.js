'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [data, setData] = useState({ contacts: [], demo_requests: [], signups: [] });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('demo_requests');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/admin/data', {
        headers: { 'x-admin-passcode': passcode }
      });
      if (res.ok) {
        const json = await res.json();
        setData(json);
        setIsAuthenticated(true);
      } else {
        alert('Unauthorized: Incorrect Passcode');
      }
    } catch (err) {
      alert('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/data', {
        headers: { 'x-admin-passcode': passcode }
      });
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc' }}>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '3rem', 
          borderRadius: '16px', 
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', 
          width: '100%', 
          maxWidth: '420px',
          animation: 'fadeInTrans 0.5s ease-out'
        }}>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes fadeInTrans { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes spinLoader { to { transform: rotate(360deg); } }
            .spinner-icon {
              display: inline-block;
              width: 18px;
              height: 18px;
              border: 2px solid rgba(255,255,255,0.3);
              border-radius: 50%;
              border-top-color: #fff;
              animation: spinLoader 1s linear infinite;
              margin-right: 10px;
            }
          `}} />
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <img src="/transparent.png" alt="Logo" style={{ height: '100px', width: 'auto' }} />
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a' }}>Admin Access</h1>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.5rem' }}>Enter your secure passcode to manage entries.</p>
          </div>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={passcode}
              onChange={e => setPasscode(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); handleLogin(e); } }}
              autoFocus
              disabled={loading}
              style={{ 
                width: '100%', 
                padding: '1rem 1.2rem', 
                border: '2px solid #e2e8f0', 
                borderRadius: '10px', 
                fontSize: '1rem',
                outline: 'none',
                marginBottom: '1.5rem',
                transition: 'border-color 0.2s',
                backgroundColor: loading ? '#f8fafc' : 'white'
              }}
            />
            <button 
              type="submit" 
              disabled={loading}
              style={{ 
                width: '100%', 
                padding: '1rem', 
                background: '#0f172a', 
                color: 'white', 
                border: 'none', 
                borderRadius: '10px', 
                fontWeight: 'bold', 
                cursor: loading ? 'not-allowed' : 'pointer', 
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
                opacity: loading ? 0.8 : 1
              }}
            >
              {loading ? (
                <><span className="spinner-icon"></span> Validating Passcode...</>
              ) : (
                'Grant Access'
              )}
            </button>
          </form>
          <div style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>← Back to Website</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
      {/* Top Nav */}
      <nav style={{ backgroundColor: '#0f172a', color: 'white', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontWeight: '900', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/transparent.png" alt="Logo" style={{ height: '50px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
          Admin Central
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button onClick={fetchData} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>Refresh Data</button>
          <button onClick={() => setIsAuthenticated(false)} style={{ color: '#94a3b8', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Logout</button>
        </div>
      </nav>

      <div style={{ padding: '3rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#0f172a', marginBottom: '2rem' }}>Submissions Overview</h2>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
            <button 
              onClick={() => setActiveTab('demo_requests')}
              style={{ padding: '0.8rem 1.5rem', borderRadius: '8px', cursor: 'pointer', border: 'none', background: activeTab === 'demo_requests' ? '#38bdf8' : 'white', color: activeTab === 'demo_requests' ? '#0f172a' : '#64748b', fontWeight: 'bold' }}
            >
              Demo Requests ({data.demo_requests.length})
            </button>
            <button 
              onClick={() => setActiveTab('signups')}
              style={{ padding: '0.8rem 1.5rem', borderRadius: '8px', cursor: 'pointer', border: 'none', background: activeTab === 'signups' ? '#0ea5e9' : 'white', color: activeTab === 'signups' ? 'white' : '#64748b', fontWeight: 'bold' }}
            >
              Signups ({data.signups.length})
            </button>
            <button 
              onClick={() => setActiveTab('inquiries')}
              style={{ padding: '0.8rem 1.5rem', borderRadius: '8px', cursor: 'pointer', border: 'none', background: activeTab === 'inquiries' ? '#10b981' : 'white', color: activeTab === 'inquiries' ? 'white' : '#64748b', fontWeight: 'bold' }}
            >
              Inquiries ({data.contacts.filter(item => !item.organization_name).length})
            </button>
            <button 
              onClick={() => setActiveTab('contacts')}
              style={{ padding: '0.8rem 1.5rem', borderRadius: '8px', cursor: 'pointer', border: 'none', background: activeTab === 'contacts' ? '#6366f1' : 'white', color: activeTab === 'contacts' ? 'white' : '#64748b', fontWeight: 'bold' }}
            >
              Contacts ({data.contacts.filter(item => item.organization_name).length})
            </button>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '5rem', color: '#64748b' }}>Loading systematic data...</div>
          ) : (
            <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
              
              {activeTab === 'demo_requests' && (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <tr>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Date</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Name</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Contact</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Message / File</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.demo_requests.map(item => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '1.2rem', fontSize: '0.9rem' }}>{new Date(item.created_at || item.timestamp).toLocaleDateString()}</td>
                        <td style={{ padding: '1.2rem', fontWeight: 'bold' }}>{item.name}</td>
                        <td style={{ padding: '1.2rem', fontSize: '0.9rem' }}>
                          <div>{item.email}</div>
                          <div style={{ color: '#64748b' }}>{item.phone}</div>
                        </td>
                        <td style={{ padding: '1.2rem', fontSize: '0.9rem' }}>
                          <div style={{ maxWidth: '300px', fontSize: '0.85rem' }}>{item.message}</div>
                          {item.file_url && (
                            <div style={{ marginTop: '0.8rem' }}>
                              <a 
                                href={item.file_url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ 
                                  backgroundColor: '#e0f2fe', 
                                  color: '#0369a1', 
                                  padding: '4px 10px', 
                                  borderRadius: '4px', 
                                  textDecoration: 'none', 
                                  fontSize: '0.75rem', 
                                  fontWeight: 'bold',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '5px'
                                }}
                              >
                                📂 View Media / File
                              </a>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'signups' && (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <tr>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Date</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Provider</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Address/Contact</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Preferences</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.signups.map(item => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '1.2rem', fontSize: '0.9rem' }}>{new Date(item.created_at || item.timestamp).toLocaleDateString()}</td>
                        <td style={{ padding: '1.2rem', fontWeight: 'bold' }}>{item.first_name}</td>
                        <td style={{ padding: '1.2rem', fontSize: '0.9rem' }}>
                          <div style={{ color: '#0f172a' }}>{item.email}</div>
                          <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{item.phone}</div>
                          <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '4px' }}>{item.address}</div>
                        </td>
                        <td style={{ padding: '1.2rem', fontSize: '0.85rem' }}>
                          <div><strong>Methods:</strong> {item.dictation_methods.join(', ')}</div>
                          <div style={{ marginTop: '4px' }}><strong>Retrieval:</strong> {item.retrieval_options.join(', ')}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'inquiries' && (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <tr>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Date</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Name</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Contact</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Inquiry Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.contacts.filter(item => !item.organization_name).map(item => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '1.2rem', fontSize: '0.9rem' }}>{new Date(item.timestamp || item.created_at).toLocaleDateString()}</td>
                        <td style={{ padding: '1.2rem', fontWeight: 'bold' }}>{item.name}</td>
                        <td style={{ padding: '1.2rem', fontSize: '0.9rem' }}>
                          <div>{item.email}</div>
                          <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{item.phone}</div>
                        </td>
                        <td style={{ padding: '1.2rem', fontSize: '0.9rem', color: '#334155' }}>
                          <div style={{ maxWidth: '400px' }}>{item.message}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'contacts' && (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <tr>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Date</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Client / Organization</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Service</th>
                      <th style={{ padding: '1.2rem', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.contacts.filter(item => item.organization_name).map(item => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '1.2rem', fontSize: '0.9rem' }}>{new Date(item.timestamp || item.created_at).toLocaleDateString()}</td>
                        <td style={{ padding: '1.2rem', fontWeight: 'bold' }}>
                          {item.name}
                          <div style={{ fontWeight: 'normal', color: '#64748b', fontSize: '0.8rem' }}>{item.email}</div>
                          <div style={{ fontWeight: '800', color: '#10b981', fontSize: '0.75rem', marginTop: '4px' }}>{item.organization_name || 'Individual'}</div>
                        </td>
                        <td style={{ padding: '1.2rem' }}>
                          <span style={{ padding: '4px 10px', background: '#e0e7ff', color: '#4338ca', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>{item.service_type}</span>
                        </td>
                        <td style={{ padding: '1.2rem', fontSize: '0.9rem', color: '#334155' }}>
                          <div style={{ maxWidth: '400px' }}>{item.message}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {(!loading && (
                (activeTab === 'inquiries' && data.contacts.filter(item => !item.organization_name).length === 0) ||
                (activeTab === 'contacts' && data.contacts.filter(item => item.organization_name).length === 0) ||
                (!['inquiries', 'contacts'].includes(activeTab) && (!data[activeTab] || data[activeTab].length === 0))
              )) && (
                <div style={{ padding: '5rem', textAlign: 'center', color: '#94a3b8' }}>
                  No submissions found in this category yet.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
