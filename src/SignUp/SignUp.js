import React, { useState } from 'react';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "./SignUp.css"
import SocialLogin from './SocialLogin/SocialLogin';

const SignUp = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const navigate= useNavigate();

    const [CreateUserWithEmailAndPassword,user]= useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur=event=>{
        setConfirmPassword(event.target.value)
    }
    if(user){
        navigate("/Home");
        
    }
    const handleCreateUser=event=>{
      event.preventDefault();
      if(password !== confirmPassword ){
          setError("Your two passwords didn't match");
          return;
      }
      if(password.length<6){
          setError("Password must be 6 characters or longer")
      }
      CreateUserWithEmailAndPassword(email,password);
    }




    return (
        <div>
            <div style={{marginTop:"100px"}} className='register-form'>
            <h2 className="text-primary" style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleCreateUser}>

                <input onBlur={ handleEmailBlur} type="email" name="email" id="" placeholder='Email Address' required />

                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" placeholder='Confirm Password' required />
                <p style={{color:'red'}}>
             {error}
         </p>
             {/*    <input  onClick={() => setAgree(!agree)}  type="checkbox" name="terms" id="terms" /> */}
               {/*  <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
              {/*   <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Doctor Health_Sheba Terms and Conditions</label> */}
                <input
                   /*   disabled={!agree}  */
                    className='w-50 mx-auto btn btn-info fw-bolder mt-2'
                    type="submit"
                    value="SignUp" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'/*  onClick={navigateLogin} */>Please Login</Link> </p>
           <SocialLogin></SocialLogin>
        </div>
        </div>
    );
};

export default SignUp;