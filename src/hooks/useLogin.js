import { useState, useEffect } from 'react'
import { auth } from '../base'

const useLogin = () => {
    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        // Set up an auth state listener
        auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log("Current user ", user.email);
                setLoginStatus(true);
            } else {
                // No user is signed in.
                console.log("No user");
                setLoginStatus(false);
            }
        });
    }, []);
    return { loginStatus };
};

export default useLogin;