
import Button from '@restart/ui/esm/Button';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import auth from '../firebase.init';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from '@firebase/auth';

const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const emailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let navigate= useNavigate();
      const location= useLocation();
      const from= location.state?.from?.pathname || "/";
    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value);
    }
    const handleUserSignIn=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
        navigate=("/Home")
    }
    if(user){
        navigate(from, {replace:true});
    }
    


    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }
    



    return (
        <div>
            <div style={{marginTop:"100px"}} className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleUserSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur}ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur}/* ref={passwordRef} */ type="password" placeholder="Password" required />
                </Form.Group>
                <p style={{color:'red'}}>{error?.message}</p>
                {
             loading && <p>loading...</p>
         }
                
                <Button className="btn-info  rounded border-0 py-2 w-50 fw-bolder mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
         {/*   {errorElement} */}
            <p>New To Doctor Health_Sheba? <Link to="/SignUp" className='text-primary pe-auto text-decoration-none'/*  onClick={navigateSignUp} */>Please SignUp</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
          
         <ToastContainer />
        </div>
        </div>
    );
};

export default Login;