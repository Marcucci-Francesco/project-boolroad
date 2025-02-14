
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

    //inseriamo dentro una variabile l'oggetto che matcha con la ricerca
    const matchFilter = travelsData.filter(travel => travel.destination.toLowerCase().includes(e.target.value.toLowerCase()));

    //concateniamo dentro un'altra variabile matchFilter e othersFilter
    const filteredArray = [
      ...matchFilter,
    ]

    setFilteredTravels(filteredArray)

  }

  const navigate = useNavigate();
  return (
    <div className='container text-center py-4'>
      <h1>Lista dei viaggi</h1>
      <form className="d-flex mb-3 w-md-50 mx-auto my-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Filtra i viaggi"
          aria-label="Search"
          onChange={handleChange} />
        <button className="btn btn-outline-primary" type="submit">Cerca</button>
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