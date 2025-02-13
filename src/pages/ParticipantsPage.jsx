import React, { useEffect } from 'react'
import AccordionParticipants from '../Components/PartecipantsAccordion'
import { useGlobalContext } from '../context/GlobalContext';
import { useParams } from 'react-router-dom';

const ParticipantsPage = () => {
  const { id } = useParams();
  const { partecipants, fetchPartecipants, travels, fetchTravels } = useGlobalContext();

  useEffect(() => {
    console.log(id);
    fetchPartecipants(parseInt(id));
  }, []);

  return (
    <>
      <div className="container">
        <form className="d-flex mb-3">
          <input className="form-control me-2" type="search" placeholder="Filtra i partecipanti" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <h2>Lista dei partecipanti</h2>

        {partecipants && <AccordionParticipants participants={partecipants} />}
      </div>
    </>
  )
}

export default ParticipantsPage