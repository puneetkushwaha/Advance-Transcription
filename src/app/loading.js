import Skeleton from './components/Skeleton';

export default function Loading() {
  return (
    <div className="container" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      {/* Hero Skeleton */}
      <div style={{ marginBottom: '60px' }}>
        <Skeleton variant="title" width="60%" height="48px" className="mb-4" />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="85%" />
        <Skeleton variant="text" width="40%" />
      </div>

      {/* Content Blocks Skeleton */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="corporate-panel" style={{ padding: '20px' }}>
            <Skeleton variant="rect" height="180px" style={{ marginBottom: '20px', borderRadius: '8px' }} />
            <Skeleton variant="title" width="70%" height="24px" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="40%" />
          </div>
        ))}
      </div>
    </div>
  );
}
