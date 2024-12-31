import React, { useState, useEffect, useRef } from 'react';
import '../styles/SliderCopy.css'; // Подключаем стили

function SliderCopy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  
  
  const images = [
    require('../assets/img/school-trouble.jpg'),
    require('../assets/img/fiber-splice.jpg'),
    require('../assets/img/Курсы.jpg'),
    require('../assets/img/WhatsApp_Image_2022-04-29_at_16.43.40.jpeg'),
    require('../assets/img/angelina.jpg'),
    require('../assets/img/photo_2024-12-19_23-37-10.jpg'),
  ];
  

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, [images.length, nextSlide]);

    useEffect(() => {
        if (sliderRef.current) {
        sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
        sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);


  return (
    <div className="slider-copy">
      <div className="slider-container-copy" ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="slide-copy">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="slider-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default SliderCopy;