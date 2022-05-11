import React from 'react';
import featuredBook from '../../images/featured book (1).png'
import './FeaturedBook.css'

const FeaturedBook = () => {
    return (
        <div className=' container mt-5 '>
               <div className='featured-book'>
                <div className=' p-5 m-3'>
                    <h3 className='text-secondary'>Featured Book</h3>
                    <h1>Everything Islamic Book</h1>
                    <p>
                        Choosing, caring for, and living with your Islam
                    </p>
                    <button className='btn btn-primary'>Get this Book</button>
                </div>
                <div className='text-center'>
                    <img style={{ width: "80%" }} src={featuredBook} alt="" />
                </div>
               </div>
        </div>
    );
};

export default FeaturedBook;