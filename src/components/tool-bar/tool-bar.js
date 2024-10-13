import styles from './tool-bar.module.css';
import TuneIcon from '@mui/icons-material/Tune';
import CropIcon from '@mui/icons-material/Crop';
import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw';
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import TextureIcon from '@mui/icons-material/Texture';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import TitleIcon from '@mui/icons-material/Title';
import React, { useState } from 'react';

const ToolBar = () => {
  const [activeIcon, setActiveIcon] = useState(-1);
  const icons = [
    TuneIcon,
    CropIcon,
    Rotate90DegreesCcwIcon,
    SettingsOverscanIcon,
    PhotoFilterIcon,
    TextureIcon,
    WallpaperIcon,
    TitleIcon,
  ];
  return (
    <div className={styles.mainContainer}>
      {icons.map((Icon, index) => (
        <Icon
          key={index}
          className={`${styles.icon} ${activeIcon === index ? styles.clicked : styles.default}`}
          onClick={() => setActiveIcon(index)}
        />
      ))}
    </div>
  );
};
export default ToolBar;
