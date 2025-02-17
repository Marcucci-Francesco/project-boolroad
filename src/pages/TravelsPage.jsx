
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


  const [filteredTravels, setFilteredTravels] = useState(travelsData);

  const handleChange = (e) => {
    //e.target.value

    const query = e.target.value.toLowerCase().trim();
    //inseriamo dentro una variabile l'oggetto che matcha con la ricerca
    const matchFilter = travelsData.filter(travel => travel.destination.toLowerCase().includes(query) || travel.tourLeader.toLowerCase().includes(query));

    //concateniamo dentro un'altra variabile matchFilter e othersFilter
    const filteredArray = [
      ...matchFilter,
    ]

    setFilteredTravels(filteredArray)

  }

  const navigate = useNavigate();
  return (
    <div className='container text-center py-4'>
      <div className="travels-bg">
        <img className="img-fluid" src="/img/bg-home.png" alt="bg-home" />
      </div>
      <h1>Lista dei viaggi</h1>
      <form className="d-flex mb-3 w-md-50 mx-auto my-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Filtra i viaggi o tour leader"
          aria-label="Search"
          onChange={handleChange} />
      </form>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mt-5"
      >
        {filteredTravels.map((item, index) =>
        (<SwiperSlide key={index}> <TravelCard item={item} onClick={() => navigate(`/travel/${item.ID}`)} /></SwiperSlide>
        ))}


      </Swiper>
    </div>
  );

}

export default TravelsPage