import React from 'react'
import './login.scss'

export default function login() {
    return (
        <body>

            <div className="Inputs">
                <h1>Login now</h1>
                <input placeholder="Placeholder"></input>
                <input placeholder="Placeholder"></input>
                <button>Log in</button>
                <h3>New to GEEB?</h3>
                <a href="Register">Create an account</a>
            </div>

            <div className="Information">
                <h1>Some tips for improving your experience at GEEB</h1>

                <ul>
                    <li>- Ultricies eget, tempor sit amet</li>
                    <li>- Ultricies eget, tempor sit amet</li>
                    <li>- Ultricies eget, empor sit amet</li>
                    <li>- Ultricies eget, tempor sit amet</li>
                </ul>
            </div>

        </body>
    )
}
