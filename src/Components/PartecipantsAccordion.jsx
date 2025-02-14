import travelsData from "../data/travelData.js";
import Accordion from 'react-bootstrap/Accordion';

const AccordionParticipants = ({ participants }) => {
  return (
    <Accordion defaultActiveKey="0">
      {participants.map((participant, index) =>
        <Accordion.Item eventKey={index} key={index}>
          <Accordion.Header>{participant.nome} {participant.cognome}</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex align-content-center justify-content-between">

              <div className="text-start">
                <ul className="participant-info">
                  <h3>INFO</h3>
                  <li>CF: <strong>{participant.codiceFiscale}</strong></li>

                  <li>Telefono: <strong>{participant.numeroDiTelefono}</strong></li>

                  <li>E-Mail: <strong>{participant.email}</strong></li>
                </ul>
              </div>

              <ul className="text-start participant-info"><h3 className="text-center text-danger">Contatto d'Emergenza</h3>
                <li>Nome: <strong>{participant.contattoDiEmergenza.nome} {participant.contattoDiEmergenza.cognome}</strong></li>                
                <li>Numero: <strong>{participant.contattoDiEmergenza.numeroDiTelefono}</strong></li>
                <li>E-mail: <strong>{participant.contattoDiEmergenza.mail}</strong></li>

              </ul>
            </div>


          </Accordion.Body>
        </Accordion.Item>
      )}
    </Accordion>

  )
}

export default AccordionParticipants