'use client';

import Link from 'next/link';
import styles from './pricing.module.css';

export default function PricingPage() {
  return (
    <div className={styles.pricingPage}>
      {/* Editorial Hero */}
      <section className={styles.pricingHero}>
        <div className={styles.container}>
          <div style={{ color: '#38bdf8', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Advance Transcription
          </div>
          <h1 className={styles.heroTitle}>Pricing & Plans</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto 0 auto' }}>
            Transparent, line-based rates and flexible monthly plans tailored to your practice.
          </p>
        </div>
      </section>

      {/* Sub-Hero Header */}
      <section className={styles.subHero}>
        <div className={styles.container}>
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>💎</div>
          <h2 className={styles.subTitle}>Clear, Competitive, and Commitment-Free</h2>
          <p className={styles.subText}>
            At Advance Transcription, we believe in straightforward pricing with no hidden fees, 
            setup costs, or minimum usage requirements. Whether you{"'"}re a solo provider, 
            a legal evaluator, or part of a hospital network, we offer flexible options to 
            meet your documentation needs and budget.
          </p>
        </div>
      </section>

      {/* Rates Table Section */}
      <section className={styles.ratesSection}>
        <div className={styles.container}>
          <h2 className={styles.ratesTitle}>Standard Transcription Rates</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.ratesTable}>
              <thead>
                <tr>
                  <th>Service Type</th>
                  <th>Turnaround Time</th>
                  <th>Rate Per Line</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard Transcription</td>
                  <td>12 hours (Mon–Sat)</td>
                  <td className={styles.rateValue}>$0.06 per line</td>
                </tr>
                <tr>
                  <td>STAT Delivery (Urgent)</td>
                  <td>4–6 hours</td>
                  <td className={styles.rateValue}>$0.08 per line</td>
                </tr>
                <tr>
                  <td>STAT Delivery (Rush)</td>
                  <td>2–4 hours</td>
                  <td className={styles.rateValue}>$0.10 per line</td>
                </tr>
                <tr>
                  <td>Weekend Support</td>
                  <td>Available on request</td>
                  <td className={styles.rateValue}>$0.16 per line</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1.5rem', color: '#6b7280', fontStyle: 'italic', fontSize: '0.9rem' }}>
            * One line = 65 characters with spaces
          </p>
        </div>
      </section>

      {/* Unlimited Monthly Plan Section */}
      <section className={styles.unlimitedSection}>
        <div className={styles.container}>
          <div className={styles.unlimitedGrid}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
               <div style={{ padding: '2rem', border: '1px solid #e5e7eb', borderRadius: '24px', backgroundColor: '#fcfcfc', textAlign: 'center' }}>
                  <span style={{ fontSize: '6rem' }}>📟</span>
                  <div style={{ marginTop: '1.5rem', fontWeight: '800', fontStyle: 'italic', color: '#64748b' }}>Precision Accounting</div>
               </div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💎</div>
              <h2 className={styles.unlimitedTitle}>Unlimited Monthly Plan</h2>
              <p style={{ color: '#4b5563', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '600' }}>
                 For high-volume users who prefer predictable billing:
              </p>
              <div className={styles.priceTag}>$350/month</div>
              
              <ul className={styles.featureList}>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> Unlimited dictations</li>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> 12-hour turnaround (Mon–Sat)</li>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> Free customization and formatting</li>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> EHR/EMR integration</li>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> Priority support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Always Included Section */}
      <section className={styles.includedSection}>
        <div className={styles.container}>
          <div className={styles.includedGrid}>
            <div>
              <h2 style={{ fontSize: '2.8rem', color: '#059669', fontWeight: '800', marginBottom: '3rem' }}>What{"'"}s Always Included</h2>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> Free account setup</li>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> Free template customization</li>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> No monthly minimums</li>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> HIPAA-compliant security</li>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> EHR/EMR integration (where applicable)</li>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> U.S.-focused transcription team</li>
                <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> Secure file delivery and download portal</li>
              </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
               <div style={{ border: '1px solid #e5e7eb', borderRadius: '50%', backgroundColor: '#f0fdf4', padding: '4rem' }}>
                  <span style={{ fontSize: '8rem' }}>🎯</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom & Enterprise Section */}
      <section className={styles.customSection}>
        <div className={styles.container}>
          <div style={{ maxWidth: '500px', backgroundColor: 'white', padding: '4rem', borderRadius: '0 50px 50px 0', borderLeft: '10px solid #10b981' }}>
             <h2 style={{ fontSize: '2.5rem', color: '#059669', fontWeight: '800', marginBottom: '1.5rem' }}>Custom & Enterprise Pricing</h2>
             <p style={{ color: '#4b5563', marginBottom: '2rem', lineHeight: '1.6' }}>
                Need transcription for multiple providers, a large health network, or a 
                high-volume legal/IME operation? We offer flexible custom pricing for:
             </p>
             <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#374151', fontWeight: '600', marginBottom: '2.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>Hospitals and large clinics</li>
                <li style={{ marginBottom: '0.5rem' }}>Legal-medical groups</li>
                <li style={{ marginBottom: '0.5rem' }}>Research institutions</li>
             </ul>
             <p style={{ fontWeight: '700', color: '#0f172a', marginBottom: '2rem' }}>Long-term or high-volume contracts</p>
             <Link href="/#contact" style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: '700', textDecoration: 'none', display: 'inline-block' }}>Contact Us for Custom Quote</Link>
          </div>
        </div>
      </section>

      {/* Billing Details Section */}
      <section className={styles.billingSection}>
        <div className={styles.container}>
          <div className={styles.billingGrid}>
            <div>
                <h2 style={{ fontSize: '2.8rem', color: '#059669', fontWeight: '800', marginBottom: '3.5rem' }}>Billing Details</h2>
                <ul className={styles.featureList}>
                  <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> Invoiced monthly</li>
                  <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> Payment due within 7 days</li>
                  <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> Accepted via ACH, check, or card (upon request)</li>
                  <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> Take Your Projects To The Next Level</li>
                  <li className={styles.featureItem}><span className={styles.checkIcon}>✓</span> U.S. clients billed in USD</li>
                </ul>
                <Link href="/request-demo" className={styles.btnAction}>Start Transcribing Today</Link>
            </div>
            <div style={{ textAlign: 'right' }}>
               <div style={{ backgroundColor: '#f9fafb', padding: '4rem', borderRadius: '24px', display: 'inline-block' }}>
                  <span style={{ fontSize: '8rem' }}>💳</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section style={{ padding: '6rem 0', background: '#e2e8f0', textAlign: 'center' }}>
          <div className={styles.container}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a' }}>Ready to Experience Better Documentation?</h2>
              <div style={{ marginTop: '2rem' }}>
                  <Link href="/signup" className="btn-primary" style={{ padding: '1.25rem 4rem', borderRadius: '4px', fontSize: '1.1rem' }}>REGISTER FOR FREE NOW</Link>
              </div>
          </div>
      </section>
    </div>
  );
}
