import styles from './testimonials.module.css';

export default function TestimonialsPage() {
  const testimonials = [
    {
      text: "Advance Transcription has been a game-changer for my practice. The integration with our EMR was seamless, and the 12-hour turnaround time is consistently met. Highly recommend for any busy physician.",
      author: "Dr. Sarah Mitchell",
      title: "Family Medicine Specialist",
      initials: "SM"
    },
    {
      text: "The precision required for IME reports is incredibly high, and Advance Transcription delivers every time. Their understanding of medical-legal terminology and formatting is unmatched.",
      author: "Robert Chen, Esq.",
      title: "Legal Evaluator & Consultant",
      initials: "RC"
    },
    {
      text: "We've tried several transcription services over the years, but none have provided the level of accuracy and customer support that Advance Transcription offers. Their team is truly a part of our office.",
      author: "Melissa Thompson",
      title: "Practice Manager, Northside Orthopedics",
      initials: "MT"
    },
    {
      text: "Confidentiality and speed are non-negotiable in our line of work. Advance Transcription provides secure, HIPAA-compliant documentation that we can rely on for even our most sensitive cases.",
      author: "Officer James Rodriguez",
      title: "Law Enforcement Liaison",
      initials: "JR"
    }
  ];

  return (
    <div className={styles.testimonialsPage}>
      {/* Editorial Hero */}
      <section className={styles.testimonialsHero}>
        <div className={styles.container}>
          <div style={{ color: '#10b981', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Success Stories
          </div>
          <h1 className={styles.heroTitle}>Trusted by Leaders in Healthcare & Law</h1>
          <p className={styles.heroSubtitle}>
            Our commitment to accuracy and security has made us the preferred transcription 
            partner for providers across the nation.
          </p>

          <div className={styles.trustStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99.9%</span>
              <span className={styles.statLabel}>Accuracy Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12hr</span>
              <span className={styles.statLabel}>Standard TAT</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Years Industry Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className={styles.gridSection}>
        <div className={styles.container}>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.testimonialText}>
                  {t.text}
                </p>
                <div className={styles.authorSection}>
                  <div className={styles.avatar}>{t.initials}</div>
                  <div>
                    <span className={styles.authorName}>{t.author}</span>
                    <span className={styles.authorTitle}>{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '6rem 0', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div className={styles.container}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '1.5rem' }}>Experience the Difference Today</h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Join hundreds of healthcare and legal professionals who trust Advance Transcription 
            with their critical documentation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="/contact" className="btn-primary" style={{ padding: '1.25rem 3rem', borderRadius: '4px', fontSize: '1rem', textDecoration: 'none' }}>START FREE TRIAL</a>
            <a href="/pricing" className="btn-outline" style={{ padding: '1.25rem 3rem', borderRadius: '4px', fontSize: '1rem', textDecoration: 'none' }}>VIEW PRICING</a>
          </div>
        </div>
      </section>
    </div>
  );
}
