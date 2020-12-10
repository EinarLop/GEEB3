import React from 'react'
import styles from './RegistrationStyles.module.scss'

 function Registration() {
    return (
        <body>

            <div className="Information">
                <h1>What is GEEB?</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae
ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris</p>
            </div>

            <div className="Inputs">
                <h1>Register now</h1>
                <input placeholder="Placeholder"></input>
                <input placeholder="Placeholder"></input>
                <input placeholder="Placeholder"></input>
                <input placeholder="Placeholder"></input>
                <input placeholder="Placeholder"></input>
                <button>Register</button>

                <h3>Do you already have an account?</h3>
                <a href="login">Login</a>
            </div>

        </body>
    )
}

export default Registration;