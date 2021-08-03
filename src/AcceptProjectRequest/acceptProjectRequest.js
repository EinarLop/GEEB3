import React from 'react';
import './acceptProjectRequestStyles.scss';
import RequestInfo from './components/RequestInfo.js';

function AcceptRequest() {
    const person = {
        name: "Brendon Urie",
        description: "Brendon Boyd Urie es un cantautor, músico, multiinstrumentista y actor estadounidense, conocido por ser el vocalista de Panic! at the Disco, de la cual es el único miembro original restante. El grupo se formó en 2004 en Las Vegas, Nevada, y ha lanzado seis álbumes de estudio; A Fever You Can't Sweat Out, Pretty",
        gitLink: "git link example",
        linkedInLink: "LinkedIn link example",
        tags: {
            master: ["html", "react", "javaScript"],
            learning: ["css", "python", "java"],
            wantingToLearn: ["scrum", "rup"]

        }
    }
    const request = "Placing a smile at the perfect event,Gracing your skin with the side of my hand If I ever leave I could learn to miss you With sentimental boy as my nom de plume Let me save you of this wrong I may never sleep tonight, As long as you're still burning bright If I could trade mistakes for sheep, Count me away before you sleep I'll still wait till I trade my mistakes, So they fade away I feel marooned in this body, Deserted, my organs can go on without me You can't fly these wings You can't sleep in this box with me Let me save you of this wrong"
    return (
        <div className="RequestBackground">
            <div className="DisqueHeader">
                <h1>jklflñdjakl</h1>
            </div>
            <div className="Wrapper">
                <RequestInfo person={person} request={request} />


                <div><p>hey</p></div>
            </div>
        </div>

    );

}

export default AcceptRequest;
