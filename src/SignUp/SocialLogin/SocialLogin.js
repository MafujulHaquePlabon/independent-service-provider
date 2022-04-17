import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import google from "./googleIcone.png"

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/Home');
    }
    if(loading ){
        return <Loading></Loading>
    }
   /*  const google="https://imgs.search.brave.com/BhWxPPAj1OqjBLXobFjxUuZedP-bjuaffBY9Gf1g5IY/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly93d3cu/cG9seW10bC5jYS9j/YWxlbmRyaWVyL3Np/dGVzL2NhbGVuZHJp/ZXIuYW1pZ293MjAy/MC5wb2x5bXRsLmNh/L2ZpbGVzL2dvb2ds/ZWxvZ28uanBn"; */
    return (
        <div>
            <button
                    onClick={() =>signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2 fw-bolder'>Google Sign In</span>
                </button>
        </div>
    );
};

export default SocialLogin;