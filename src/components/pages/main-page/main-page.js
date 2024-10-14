import styles from './main-page.module.css';
import Header from '../../header/header';
import ToolBar from '../../tool-bar/tool-bar';
import Tools from '../../tools/tools';
import ImageRotate from '../../editor-actions/image-rotate';
import UploadContainer from '../../upload-container/upload-container'; // Импортируем новый компонент
import React, { useState } from 'react';

const MainPage = () => {
  const [imageSrc, setImageSrc] = useState();
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation((prevRotation) => prevRotation + 90);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result); // Обновляем источник изображения загруженным изображением
      };
      reader.readAsDataURL(file); // Читаем файл как URL данных
    }
  };

  return (
    <div className={styles.mainContainer} data-testid="main-page">
      <Header />
      <div className={styles.toolContainer}>
        <ToolBar onRotate={handleRotate} />
        <Tools />
        <ImageRotate imageSrc={imageSrc} rotation={rotation} />
        <UploadContainer onImageUpload={handleImageUpload} />
      </div>
    </div>
  );
};

export default MainPage;
