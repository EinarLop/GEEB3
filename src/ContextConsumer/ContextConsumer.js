import React, { useContext } from 'react'
import { ExampleContext } from '../App'

const ContextConsumer = () => {
    const [tutorial, setTutorial] = useContext(ExampleContext);
    console.log(tutorial, setTutorial);

    const toggleTutorial = () => {
        // cambiar al opuesto de tutorial
        console.log("Toggle tutorial de", tutorial.toString(), " a: ", (!tutorial).toString())
        setTutorial(tutorial => !tutorial);
    }

    return (
        <div style={{ color: '#fff', padding: '32px' }}>
            Yo soy consumidor del Context.
            <br />
            El valor de Tutorial es de: {tutorial.toString()}
            <button onClick={toggleTutorial}>Toggle Tutorial</button>
        </div>
    )

}


export default ContextConsumer;