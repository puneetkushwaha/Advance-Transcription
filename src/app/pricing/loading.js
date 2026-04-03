import Skeleton from '@/app/components/Skeleton';

export default function PricingLoading() {
  return (
    <div className="container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Skeleton variant="title" width="40%" height="48px" style={{ margin: '0 auto 20px' }} />
        <Skeleton variant="text" width="60%" style={{ margin: '0 auto' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="corporate-panel" style={{ padding: '40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <Skeleton variant="title" width="60%" height="30px" style={{ margin: '0 auto 20px' }} />
            <Skeleton variant="title" width="40%" height="50px" style={{ margin: '0 auto 30px' }} />
            <div style={{ marginBottom: '30px' }}>
              {[1, 2, 3, 4, 5].map((j) => (
                <Skeleton key={j} variant="text" width="80%" style={{ margin: '0 auto 10px' }} />
              ))}
            </div>
            <Skeleton variant="rect" height="50px" style={{ borderRadius: '100px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
