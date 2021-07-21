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
<<<<<<< HEAD
        // Returns a user's credentials, automatically signs in
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log("Error:", error.code, error.message);
        }

=======
        // Returns a user's credentials
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
>>>>>>> 11bff5232cfe08727fb8a74d5dfb0621d501c0f9
    }
    const loginUser = async () => {
        // 
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
<<<<<<< HEAD
    }

    const logOut = async () => {
        try {
            const res = await auth.signOut();
            console.log("Signed out:", res);

        } catch (error) {
            console.log("Error:", error.code, error.message);
        }
=======
>>>>>>> 11bff5232cfe08727fb8a74d5dfb0621d501c0f9
    }

    return (
        <div style={{ border: '2px blue solid', display: 'flex', flexDirection: 'column' }}>
            <input onChange={handleEmail} style={{ height: '48px', fontSize: '22px', maxWidth: '400px' }} />
            <input onChange={handlePassword} style={{ height: '48px', fontSize: '22px', maxWidth: '400px' }} />
<<<<<<< HEAD
            <button onClick={registerUser} style={{ width: '56', height: '32px' }}>Create User</button>
            <button onClick={loginUser} style={{ width: '56', height: '32px' }}>Submit</button>
            <button onClick={logOut} style={{ width: '56', height: '32px' }}>Logout</button>
=======
            <button onClick={registerUser} style={{ width: '56', height: '32px' }}>Submit</button>
>>>>>>> 11bff5232cfe08727fb8a74d5dfb0621d501c0f9
        </div>
    )
}
