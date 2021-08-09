import React, { useContext } from 'react';
//import { ExampleContext } from '../App';
import styles from "./ContextConsumerStyles.module.scss";

import Oproject from "../Components/Oproject";


const ContextConsumer = () => {
    /*const [tutorial, setTutorial] = useContext(ExampleContext);
    console.log(tutorial, setTutorial);

    const toggleTutorial = () => {
        // cambiar al opuesto de tutorial
        console.log("Toggle tutorial de", tutorial.toString(), " a: ", (!tutorial).toString())
        setTutorial(tutorial => !tutorial);
    }
*/
    return (
        <div style={{ color: '#fff'}}>
            Yo soy consumidor del Context.
            <br />
            El valor de Tutorial es de: {/*tutorial.toString()}
            <button onClick={toggleTutorial}>Toggle Tutorial</button> */}

            <div className={styles.Global}>
                <p className={styles.Title}> Explore Team Projects</p>
                <p className={styles.SubtitleT}>Tutorial</p>
                <p className={styles.SubtitleH}>Tutorial</p>
                <p className={styles.SubtitleJ}>Tutorial</p>
                
            </div>
        </div>
    )

}


export default ContextConsumer;