import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
   

    if (user) {
        navigate('/home');
    }

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-5'>Please Login</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-3" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='text-center'>New to our page? <Link to='/register' className='text-primary pe-auto text-decoration-none'
                onClick={navigateRegister}>Please Register</Link></p>
            <p className='text-center'>Forget Password? <Link to='/register' className='text-danger pe-auto text-decoration-none'
                onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Login;