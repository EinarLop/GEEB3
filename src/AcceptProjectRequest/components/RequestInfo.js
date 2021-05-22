import React, { useState } from "react";
import "./RequestInfoStyles.scss";
import Cyan from "../images/Cyan.png";

function RequestInfo(props) {
  const personinfo = props.person;
  const [showInfo, setShowShareInfo] = useState(true);
  const [rejected, setRejected] = useState(false);
  const [accepted, setAccepted] = useState(false);
  function botonAceptar(personInfo) {
    var person = personInfo;
    console.log(person);
    setShowShareInfo(false);
    setAccepted(true);
  }
  function botonRechazar() {
    setShowShareInfo(false);
    setRejected(true);
  }

  return (
    <div>
      {
        //Name, photo descrpition
      }
      <div className="ParticipantInfo">
        <img src={Cyan} alt={personinfo.name} />
        <div className="Info">
          <h2>{personinfo.name}</h2>
          <p>{personinfo.description}</p>
        </div>
        <div className="GitAndLinkedIn">
          <p>GitHub: {personinfo.gitLink}</p>
          <p>LinkedIn: {personinfo.linkedInLink}</p>
        </div>
      </div>
      {
        //Tags
      }
      <div className="TagsWrapper">
        <h2>Tags</h2>
        <div>
          {personinfo.tags.master.map((masterTag) => (
            <p className="master" key={masterTag}>
              {masterTag}
            </p>
          ))}
          {personinfo.tags.learning.map((masterTag) => (
            <p className="learning" key={masterTag}>
              {masterTag}
            </p>
          ))}
          {personinfo.tags.wantingToLearn.map((masterTag) => (
            <p className="wantingToLearn" key={masterTag}>
              {masterTag}
            </p>
          ))}
        </div>
      </div>
      {
        //Request written by the participant
      }
      {showInfo && (
        <div className="RequestWrapper">
          <div className="Request">{props.request}</div>
          <div className="Buttons">
            <button onClick={() => botonAceptar(personinfo)}>Acceptar</button>
            <button className="reject" onClick={() => botonRechazar()}>
              Rechazar
            </button>
          </div>
        </div>
      )}
      {rejected && <div className="FinalState">Participante Rechazado.</div>}
      {accepted && (
        <div className="FinalState">
          ¡Felicidades! Tienes un nuevo integrante.
        </div>
      )}
    </div>
  );
}

export default RequestInfo;

