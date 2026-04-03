import React from 'react';

const Skeleton = ({ variant = 'text', width, height, className = '' }) => {
  const styles = {
    width: width || '100%',
    height: height || (variant === 'title' ? '2.5rem' : '1rem'),
  };

  const variantClass = `skeleton-${variant}`;

  return (
    <div 
      className={`skeleton ${variantClass} ${className}`} 
      style={styles}
      aria-hidden="true"
    />
  );
};

export default Skeleton;
