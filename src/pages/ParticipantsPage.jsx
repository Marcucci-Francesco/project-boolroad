import React, { useEffect, useState } from 'react'
import AccordionParticipants from '../Components/PartecipantsAccordion'
import { useGlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ParticipantsPage = () => {
  const { id } = useParams();
  const { partecipants, fetchPartecipants, travels, fetchTravels } = useGlobalContext();
  const [travel, setTravel] = useState({});

  useEffect(() => {
    console.log(id);
    fetchPartecipants(parseInt(id));
    fetchTravels();
  }, []);

  useEffect(() => {
    setTravel(travels.find(travel => travel.ID == id));
  }, [travels])

  return (
    <>
      <div className="participants-bg">
        <img className='img-fluid' src={travel.image} alt={travel.destination} />
      </div>
      <div className="container py-5 mt-5 glass rounded-3">
        <h1>{travel.destination}</h1>
        <form className="d-flex mb-3">
          <input className="form-control me-2" type="search" placeholder="Filtra i partecipanti" aria-label="Search" />
          <button className="btn btn-primary" type="submit">Cerca</button>
        </form>

        <h2>Lista dei partecipanti</h2>

        {partecipants && <AccordionParticipants participants={partecipants} />}

      </div>
      <div className='container text-center'>
        <Link to={'https://it.pornhub.com/'} className="btn btn-warning mt-5">Torna alla home</Link>
      </div>
    </>
  )
}

export default ParticipantsPage