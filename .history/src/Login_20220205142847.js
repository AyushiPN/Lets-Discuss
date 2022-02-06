import React from 'react';
import "./Login.css";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMeMnSuI5Z9QAAiyI7smMb0ZyyOQNCgTENw&usqp=CAU"
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
