import React from 'react';
import google from '../../../images/social/google logo.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    // if (loading) {
    //     return <Loading></Loading>
    // }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline-dark d-block mx-auto w-50 my-2'>
                    <img className='' src={google} alt="" />
                    <span className='px-2'>Sign up with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
