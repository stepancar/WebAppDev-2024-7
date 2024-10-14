import styles from './upload-container.module.css';
import React from 'react';

const UploadContainer = ({ onImageUpload }) => {
  return (
    <div className={styles.mainContainer}>
      <input type="file" accept="image/*" onChange={onImageUpload} />
    </div>
  );
};

export default UploadContainer;
