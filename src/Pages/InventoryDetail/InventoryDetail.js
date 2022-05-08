import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {itemId} =useParams();
    return (
        <div>
            <h2>welcome to my item:{itemId}</h2>
            <div className='text-center mt-5'>
                <Link to='/checkout'>
                    <button className='btn btn-primary '>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;