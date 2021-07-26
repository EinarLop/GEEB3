import React, { useState } from 'react'
import { base, auth } from './base'
import useLogin from './hooks/useLogin'

export default function TestAuth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginstatus = useLogin()

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
        } catch (error) {
            console.log("Error:", error.code, error.message);
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
        }
    }

    return (
        <div style={{ border: '2px blue solid', display: 'flex', flexDirection: 'column' }}>
            <input onChange={handleEmail} style={{ height: '48px', fontSize: '22px', maxWidth: '400px' }} />
            <input onChange={handlePassword} style={{ height: '48px', fontSize: '22px', maxWidth: '400px' }} />
            <button onClick={registerUser} style={{ width: '56', height: '32px' }}>Create User</button>
            <button onClick={loginUser} style={{ width: '56', height: '32px' }}>Submit</button>
            <button onClick={logOut} style={{ width: '56', height: '32px' }}>Logout</button>
        </div>
    )
}
