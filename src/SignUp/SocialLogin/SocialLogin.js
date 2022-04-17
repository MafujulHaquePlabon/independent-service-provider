import React from 'react';

const SocialLogin = () => {
    
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
/* 
 if(loading || updating){
    return <loading></loading>
}  */

/*  if (user) {
 console.log('user', user);  
}
*/
 const handleSignOut = /* async  */(event) => {
    event.preventDefault(); 
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value; 
   /*  const agree = event.target.terms.checked; */

   /*  await/* 
    
  /*   await updateProfile({ displayName: name });
    console.log('Updated profile'); */
  /*   Navigate('/home'); */
  createUserWithEmailAndPassword(email, password);






  const navigate = useNavigate();
      const emailRef = useRef('');
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

   /* const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth); */

    /* if (loading || sending) {
        return <Loading></Loading>
    } */
 
    /* if (user) {
        navigate(from, { replace: true });
    } */

    /* if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    } */

     const handleSubmit = event => {
        event.preventDefault();
         const email = emailRef.current.value;
        const password = passwordRef.current.value; 

        signInWithEmailAndPassword(email, password);
    } 

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

}
    return (
        <div>
            
        </div>
    );
};

export default SocialLogin;