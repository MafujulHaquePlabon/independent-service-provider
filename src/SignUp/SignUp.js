import React, { useState } from 'react';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "./SignUp.css"

const SignUp = () => {
   /*  const [agree, setAgree] = useState(false); */
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
   /*  const [updateProfile, updating, updateError] = useUpdateProfile(auth); */

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    /* if(loading || updating){
        return <loading></loading>
    } */

   /*  if (user) {
     console.log('user', user);  
    }
 */
     const handleSignOut = /* async  */(event) => {
        event.preventDefault(); 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value; 
        // const agree = event.target.terms.checked;

       /*  await/* 
        
      /*   await updateProfile({ displayName: name });
        console.log('Updated profile'); */
      /*   Navigate('/home'); */
      createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleSignOut}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input /* onClick={() => setAgree(!agree)} */ type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label /* className={`ps-2 ${agree ? '' : 'text-danger'}`}  */htmlFor="terms">Accept Doctor Health_Sheba Terms and Conditions</label>
                <input
                   /*  disabled={!agree} */
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="SignUp" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
           {/*  <SocialLogig></SocialLogig> */}
        </div>
        </div>
    );
};

export default SignUp;