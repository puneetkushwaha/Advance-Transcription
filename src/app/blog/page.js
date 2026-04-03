import Link from 'next/link';
import styles from './blog.module.css';

export default function BlogPage() {
  const posts = [
    {
      date: "March 28, 2024",
      category: "HIPAA COMPLIANCE",
      title: "Maintaining Patient Privacy in a Digital Age: A 2024 Guide",
      excerpt: "As healthcare providers increasingly transition to digital documentation, the importance of HIPAA compliance has never been greater. We explore the latest security protocols for secure file transmission and secure dictation.",
      slug: "#"
    },
    {
      date: "March 15, 2024",
      category: "EFFICIENCY",
      title: "How Direct EHR Integration Reduces Physician Burnout",
      excerpt: "Transcribing directly into an EMR system eliminates the need for manual data entry by medical staff, allowing orthopedic specialists and family practitioners to focus more on patient care and less on documentation.",
      slug: "#"
    },
    {
      date: "February 24, 2024",
      category: "MEDICAL-LEGAL",
      title: "The Critical Role of Precision in IME Transcription",
      excerpt: "Independent Medical Examinations (IMEs) are high-stakes evaluations where every detail must be clear and defensible. Learn why legal evaluators trust Advance Transcription for their complex reporting needs.",
      slug: "#"
    }
  ];

  return (
    <div className={styles.blogPage}>
      {/* Editorial Hero */}
      <section className={styles.blogHero}>
        <div className={styles.container}>
          <div style={{ color: '#10b981', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '1rem' }}>
            Resource Center
          </div>
          <h1 className={styles.heroTitle}>The Advance Journal</h1>
          <p className={styles.heroSubtitle}>
            Insights, updates, and best practices in healthcare documentation and data security.
          </p>
        </div>
      </section>

      {/* Blog List Section */}
      <section className={styles.container}>
        <div className={styles.blogList}>
          {posts.map((post, i) => (
            <div key={i} className={styles.post}>
              <div className={styles.meta}>
                <div>{post.date}</div>
                <div style={{ color: '#10b981', marginTop: '0.5rem' }}>{post.category}</div>
              </div>
              <div className={styles.postBody}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <Link href={post.slug} className={styles.readMore}>Read Full Article &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ padding: '6rem 0', backgroundColor: '#0f172a', color: 'white', textAlign: 'center' }}>
        <div className={styles.container}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem', color: '#ffffff' }}>Stay Informed</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Subscribe to our monthly newsletter for the latest HIPAA updates and efficiency 
            strategies for your practice.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Your professional email" 
              style={{ flex: 1, padding: '1rem', borderRadius: '4px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white' }} 
            />
            <button className="btn-primary" style={{ padding: '1rem 2rem', borderRadius: '4px', fontWeight: '800' }}>SUBSCRIBE</button>
          </div>
        </div>
      </section>
    </div>
  );
}
