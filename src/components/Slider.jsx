import React, { useState, useEffect, useRef } from 'react';
import '../styles/Slider.css'; // Подключаем стили
import Arrow from "../assets/img/sasha.png"

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    require('../assets/img/sasha.png'),
    require('../assets/img/egor.png'),
    require('../assets/img/team_sb.jpg'),
    require('../assets/img/sasha1.png'),
    require('../assets/img/mk.jpg'),
    require('../assets/img/splice.jpg'),
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
    <div className="slider">
      <div className="slider-container" ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="slide">
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

export default Slider;