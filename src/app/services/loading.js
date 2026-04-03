import Skeleton from '@/app/components/Skeleton';

export default function ServicesLoading() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '60px' }}>
        {/* Left column: Sidebar Skeleton */}
        <aside style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
          <Skeleton variant="title" width="80%" height="24px" className="mb-4" />
          <nav style={{ display: 'grid', gap: '15px' }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} variant="rect" height="40px" style={{ borderRadius: '8px' }} />
            ))}
          </nav>
        </aside>

        {/* Right column: Content Skeleton */}
        <main>
          {/* Header */}
          <div style={{ marginBottom: '40px' }}>
            <Skeleton variant="title" width="70%" height="48px" className="mb-4" />
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="85%" />
          </div>

          {/* Hero Image Section */}
          <Skeleton variant="rect" height="400px" style={{ borderRadius: '12px', marginBottom: '40px' }} />

          {/* Detailed Content */}
          <div style={{ marginBottom: '40px' }}>
            <Skeleton variant="title" width="50%" height="32px" className="mb-3" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="95%" />
            <Skeleton variant="text" width="40%" />
          </div>

          {/* Grid section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="corporate-panel" style={{ padding: '24px' }}>
                <Skeleton variant="title" width="60%" height="20px" className="mb-3" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="80%" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
