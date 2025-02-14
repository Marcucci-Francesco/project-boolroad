
import TravelCard from '../Components/TravelCard'
import travelsData from "../data/travelData.js";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

const TravelsPage = () => {
  console.log(travelsData)
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {travelsData.map((item, index) =>
        (<SwiperSlide> <TravelCard key={index} item={item} /></SwiperSlide>
        ))}


      </Swiper>
    </>
  );

}

export default TravelsPage