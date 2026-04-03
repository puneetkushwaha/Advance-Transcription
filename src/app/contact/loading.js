import Skeleton from '@/app/components/Skeleton';

export default function ContactLoading() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div style={{ marginBottom: '60px' }}>
        <Skeleton variant="title" width="40%" height="48px" className="mb-4" />
        <Skeleton variant="text" width="60%" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
        {/* Left Column: Form Skeleton */}
        <div className="corporate-panel" style={{ padding: '40px' }}>
          <div style={{ marginBottom: '24px' }}>
            <Skeleton variant="text" width="20%" style={{ marginBottom: '8px' }} />
            <Skeleton variant="rect" height="48px" />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <Skeleton variant="text" width="20%" style={{ marginBottom: '8px' }} />
            <Skeleton variant="rect" height="48px" />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <Skeleton variant="text" width="20%" style={{ marginBottom: '8px' }} />
            <Skeleton variant="rect" height="48px" />
          </div>
          <div style={{ marginBottom: '32px' }}>
            <Skeleton variant="text" width="30%" style={{ marginBottom: '8px' }} />
            <Skeleton variant="rect" height="150px" />
          </div>
          <Skeleton variant="rect" height="50px" width="40%" />
        </div>

        {/* Right Column: Info Skeleton */}
        <div>
          <div style={{ marginBottom: '40px' }}>
            <Skeleton variant="title" width="60%" height="24px" />
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="80%" />
          </div>
          <div style={{ display: 'grid', gap: '20px' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Skeleton variant="circle" />
                <div style={{ flex: '1' }}>
                  <Skeleton variant="title" width="40%" height="18px" style={{ marginBottom: '4px' }} />
                  <Skeleton variant="text" width="80%" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
