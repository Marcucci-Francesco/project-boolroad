import React, { useEffect, useState } from 'react'
import AccordionParticipants from '../Components/PartecipantsAccordion'
import { useGlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ParticipantsPage = () => {
  const { id } = useParams();
  const { partecipants, fetchPartecipants, travels, fetchTravels } = useGlobalContext();

  const [travel, setTravel] = useState({});
  const [filteredParticipants, setFilteredParticipants] = useState(partecipants)

  useEffect(() => {
    console.log(id);
    fetchPartecipants(parseInt(id));
    fetchTravels();
  }, []);

  useEffect(() => {
    setTravel(travels.find(travel => travel.ID == id));
  }, [travels])

  useEffect(() => {

    if (partecipants) setFilteredParticipants(partecipants);
  }, [partecipants])

  //ricerca partecipanti
  const handleChange = (e) => {
    //e.target.value


    //inseriamo dentro una variabile l'oggetto che matcha con la ricerca
    const matchFilter = partecipants.filter(participant => {
      const fullName = participant.nome + ' ' + participant.cognome;
      return fullName.toLowerCase().includes(e.target.value.toLowerCase())
    });

    //concateniamo dentro un'altra variabile matchFilter e othersFilter
    const filteredArray = [
      ...matchFilter,
    ]

    setFilteredParticipants(filteredArray)

  }
  return (
    <>
      <div className="participants-bg">
        <img className='img-fluid' src={travel.image} alt={travel.destination} />
      </div>
      <div className="container py-3 mt-5 glass rounded-3">
        <h1 className="text-center">{travel.destination}</h1>
        <form className="d-flex mb-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Filtra i partecipanti"
            aria-label="Search"
            onChange={handleChange} />
        </form>

        <h2 className='text-center'>Lista dei partecipanti</h2>

        {filteredParticipants && <AccordionParticipants participants={filteredParticipants} />}

      </div>
      <div className='container text-center'>
        <Link to={'/'} className="btn btn-warning my-3">Torna alla home</Link>
      </div>
    </>
  )
}

export default ParticipantsPage