import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
// import SocialLogin from '../SocialLogin/SocialLogin';
// import Loading from '../../Shared/Loading/Loading';



const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();

    // if (loading || updating) {
    //     return <Loading></Loading>
    // }

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        console.log('user', user);
    }
    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        console.log(name, email, password);


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: "center" }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" placeholder='Your email' required />
                <input type="password" name="password" id="" placeholder='password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto d-block btn btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p className='mt-5'>Already have an account? <Link to='/login' onClick={navigateLogin}>Please Register</Link></p>
            {/* <SocialLogin></SocialLogin> */}
        </div>
    );
};

export default Register;