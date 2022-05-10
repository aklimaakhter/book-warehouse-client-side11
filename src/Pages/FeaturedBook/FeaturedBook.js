import React from 'react';
import featuredBook from '../../images/featured book (1).png'

const FeaturedBook = () => {
    return (
        <div className=' d-flex justify-content-center algn-items-center m-5 '>
                <div className='p-5 m-5'>
                    <h3 className='text-secondary'>Featured Book</h3>
                    <h1>Everything Islamic Book</h1>
                    <p>
                        Choosing, caring for, and living with your Islam
                    </p>
                    <button className='btn btn-primary'>Get this Book</button>
                </div>
                <div>
                    <img style={{width: "80%"}} src={featuredBook} alt="" />
                </div>
          
        </div>
    );
};

export default FeaturedBook;