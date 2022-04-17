
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    /* const emailRef = useRef('');
    const passwordRef = useRef('');
    
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth); */
/* 
    if (loading || sending) {
        return <Loading></Loading>
    }
 */
    /* if (user) {
        navigate(from, { replace: true });
    } */

    /* if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    } */

    /* const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    } */

     const navigateSignUp = event => {
        navigate('/SignUp');
    } 

   /*  const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } */
       /*  else{
            toast('please enter your email address');
        } */




    return (
        <div>
            <div className='container w-50 mx-auto'>
          {/*   <PageTitle title="Login"></PageTitle> */}
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form /* onSubmit={handleSubmit} */>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control /* ref={emailRef} */ type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control /* ref={passwordRef} */ type="password" placeholder="Password" required />
                </Form.Group>
                <Button className="btn-success rounded border-0 py-2 w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
           {/*  {errorElement} */}
            <p>New To Doctor Health_Sheba? <Link to="/SignUp" className='text-primary pe-auto text-decoration-none' onClick={navigateSignUp}>Please SignUp</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' /* onClick={resetPassword} */>Reset Password</button> </p>
           {/*  <SocialLogin></SocialLogin> */}
           {/*  <ToastContainer /> */}
        </div>
        </div>
    );
};

export default Login;