import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import social from '../../../images/social/google logo.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if(user){
        navigate('/home');
    }


    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                {errorElement}
                <Button onClick={() =>signInWithGoogle()} className='w-50 d-block mx-auto' variant="outline-primary">
                    <img className='px-2' src={social} alt="" />
                    Google Sign In</Button>
            </div>
        </div>
    );
};

export default SocialLogin;