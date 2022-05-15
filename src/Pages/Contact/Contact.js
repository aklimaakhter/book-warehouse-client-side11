import React from 'react';
import './Contact.css';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    return (
        <div className='contact-form mt-5'>
            <h2 className='text-primary ' style={{ textAlign: 'center' }}>Contact Us</h2>
            <form onSubmit={handleSubmit} >
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <textarea name="text" id="text" placeholder='Your Message'></textarea>

                <input
                    className='w-50 btn btn-primary  mx-auto mt-2'
                    type="submit"
                    value="Submit" />
            </form>

        </div>
    );
};

export default Contact;