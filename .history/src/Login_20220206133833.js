import React from 'react';
import "./Login.css";
import Button from '@mui/material/Button';
import { auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import Logo from "./Lets.png";
function Login() {
    const [{}, dispatch] = useStateValue();

    function signIn()
    {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error) => alert(error.message));
    }

    return (
        <div className="Login">
            <div className="login__container">
                <img src={Logo}
                alt="image" />

                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>

        </div>
    )
}

export default Login
