import React from 'react';
import styles from '../styles/skeleton.module.css';

const Skeleton = ({ height = '20px', width = '100%', borderRadius = '4px', style = {}, className = '' }) => {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{ height, width, borderRadius, ...style }}
    />
  );
};

export default Skeleton;
