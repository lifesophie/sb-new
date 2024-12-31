import React from 'react';
import Slider from './Slider'; // импортируем слайдер
import Banner from './Banner'; // импортируем баннер
import Founder from './Founder';
import Profession from './Profession';
import ShowHow from './ShowHow';
import Education from './Education';
import Teachers from './Teachers';
import Documents from './Documents';
import BannerLower from './BannerLower';



function HomePage() {
  return (
    <div className="home-page">
      <Slider />
      <Banner />
      <Founder />
      <Profession />
      <ShowHow />
      <Education />
      <Teachers />
      <Documents />
      <BannerLower />
    </div>
  );
}

export default HomePage;