import React, { useState } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import CropIcon from '@mui/icons-material/Crop';
import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import TextureIcon from '@mui/icons-material/Texture';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import TitleIcon from '@mui/icons-material/Title';
import styles from './tool-bar.module.css';

const ToolBar = () => {
  const [activeIcon, setActiveIcon] = useState(-1);
  const handleIconClick = (index) => {
    setActiveIcon(index);
  };

  return (
    <div className={styles.mainContainer}>
      <TuneIcon
        className={`${styles.icon} ${activeIcon === 0 ? styles.clicked : styles.default}`}
        onClick={() => handleIconClick(0)}
      />
      <CropIcon
        className={`${styles.icon} ${activeIcon === 1 ? styles.clicked : styles.default}`}
        onClick={() => handleIconClick(1)}
      />
      <Rotate90DegreesCcwIcon
        className={`${styles.icon} ${activeIcon === 2 ? styles.clicked : styles.default}`}
        onClick={() => handleIconClick(2)}
      />
      <SettingsOverscanIcon
        className={`${styles.icon} ${activeIcon === 3 ? styles.clicked : styles.default}`}
        onClick={() => handleIconClick(3)}
      />
      <PhotoFilterIcon
        className={`${styles.icon} ${activeIcon === 4 ? styles.clicked : styles.default}`}
        onClick={() => handleIconClick(4)}
      />
      <TextureIcon
        className={`${styles.icon} ${activeIcon === 5 ? styles.clicked : styles.default}`}
        onClick={() => handleIconClick(5)}
      />
      <WallpaperIcon
        className={`${styles.icon} ${activeIcon === 6 ? styles.clicked : styles.default}`}
        onClick={() => handleIconClick(6)}
      />
      <TitleIcon
        className={`${styles.icon} ${activeIcon === 7 ? styles.clicked : styles.default}`}
        onClick={() => handleIconClick(7)}
      />
    </div>
  );
};
export default ToolBar;
