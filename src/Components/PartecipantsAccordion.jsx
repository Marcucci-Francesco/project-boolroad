import travelsData from "../data/travelData.js";
import Accordion from 'react-bootstrap/Accordion';

const AccordionParticipants = ({ participants }) => {
  return (
    <Accordion defaultActiveKey="0">
      {participants.map((participant, index) =>
        <Accordion.Item eventKey={index} key={index}>
          <Accordion.Header>{participant.nome} {participant.cognome}</Accordion.Header>
          <Accordion.Body>
            <div className="text-center">
              <p>CF: {participant.codiceFiscale}</p>

              <p>Telefono: {participant.numeroDiTelefono}</p>

              <p>E-Mail:{participant.email}</p>
            </div>

            <ul className="text-center emergency-contact"><h3 className="text-center text-danger">Contatto d'Emergenza</h3>
              <li>{participant.contattoDiEmergenza.nome}</li>
              <li>{participant.contattoDiEmergenza.cognome}</li>
              <li>{participant.contattoDiEmergenza.numeroDiTelefono}</li>
              <li>{participant.contattoDiEmergenza.mail}</li>

            </ul>


          </Accordion.Body>
        </Accordion.Item>
      )}
    </Accordion>

  )
}

export default AccordionParticipants