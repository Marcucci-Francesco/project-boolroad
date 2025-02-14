
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
import { useNavigate } from 'react-router-dom';

const TravelsPage = () => {
  const navigate = useNavigate();
  return (
    <div className='container text-center'>
      <h1>Lista dei viaggi</h1>
      <form className="d-flex mb-3 w-25 mx-auto my-3">
        <input className="form-control me-2" type="search" placeholder="Filtra i viaggi" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Cerca</button>
      </form>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {travelsData.map((item, index) =>
        (<SwiperSlide> <TravelCard key={index} item={item} onClick={() => navigate(`/travel/${item.ID}`)} /></SwiperSlide>
        ))}


      </Swiper>
    </div>
  );

}

export default TravelsPage