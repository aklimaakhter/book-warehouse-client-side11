import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

const handleRegister = event =>{
    event.preventDefault();
    const name= event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name,email,password);
}
    const navigateLogin = event => {
        navigate('/login');
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-5'>Please Register</h2>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="your name" required />

                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center'>Already have an account? <Link to='/login'className='text-primary pe-auto text-decoration-none'
                onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;