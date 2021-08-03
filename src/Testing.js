import React, { useState } from 'react'
import { base, auth } from './base'
import useLogin from './hooks/useLogin'
import { BACKEND_DEV, BACKEND_PROD } from './constants';
import axios from 'axios';

export default function Testing() {

    const [email, setEmail] = useState("");
    // test credentials: ericjardon@hotmail.com , pw: firebase
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const { loginStatus } = useLogin()

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const registerUser = async () => {
        // Returns a user's credentials, automatically signs in
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            console.log("Created user credentials", userCredential);
        } catch (error) {
            console.log("Error:", error.code, error.message);
            setMessage(error.message);
        }
    }
    const loginUser = async () => {
        // 
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
    }

    const logOut = async () => {
        try {
            const res = await auth.signOut();
            console.log("Signed out:", res);

        } catch (error) {
            console.log("Error:", error.code, error.message);
            setMessage(error.message);
        }
    }

    const clientRequestToFB = async () => {
        const idToken = await auth.currentUser?.getIdToken(/*Force refresh?*/ true);
        // Send an https request with a token to validate in backend
        if (!idToken) return;

        const authTokenHeader = {
            'authorization': `Bearer ${idToken}`,
        };

        axios.get(BACKEND_DEV + '/users/private', { headers: authTokenHeader }).then(res => {
            console.log(res);
            setMessage(res.toString());
        }).catch(error => {
            console.log("Error", error);
            setMessage(error.toString());
        })
    }

    return (
        <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'left' }}>
            <input placeholder="email" onChange={handleEmail} style={{ height: '48px', fontSize: '22px', maxWidth: '400px' }} />
            <input placeholder="password" onChange={handlePassword} style={{ height: '48px', fontSize: '22px', maxWidth: '400px' }} />
            <button onClick={registerUser} style={{ width: '56', height: '32px' }}>Create User</button>
            <button onClick={loginUser} style={{ width: '56', height: '32px' }}>Login</button>
            <button onClick={logOut} style={{ width: '56', height: '32px' }}>Logout</button>
            <button onClick={clientRequestToFB} style={{ width: '56', height: '32px' }}>Test Backend Authed Request</button>
            <div style={{ padding: '30px', color: 'white' }}>
                Are you logged in?: {loginStatus.toString()} <br />
                Status message:
                {message}
            </div>
        </div>
    )
}
