import styles from './tool-bar.module.css';
import TuneIcon from '@mui/icons-material/Tune';
import CropIcon from '@mui/icons-material/Crop';
import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import TextureIcon from '@mui/icons-material/Texture';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import TitleIcon from '@mui/icons-material/Title';
import React from 'react';

const ToolBar = () => {
  return (
    <div className={styles.mainContainer}>
      <TuneIcon className={`${styles.icon} ${styles.tune}`} />
      <CropIcon className={`${styles.icon} ${styles.tune}`} />
      <Rotate90DegreesCcwIcon
        className={`${styles.icon} ${styles.tune}`}
      />
      <SettingsOverscanIcon
        className={`${styles.icon} ${styles.tune}`}
      />
      <PhotoFilterIcon className={`${styles.icon} ${styles.tune}`} />
      <TextureIcon className={`${styles.icon} ${styles.tune}`} />
      <WallpaperIcon className={`${styles.icon} ${styles.tune}`} />
      <TitleIcon className={`${styles.icon} ${styles.tune}`} />
    </div>
  );
};
export default ToolBar;
