// import React from 'react';
// import { Link } from 'react-router-dom';

// const Checkout = () => {
//     return (
//         <div>
//             <h2>Please Checkout your stock</h2>
//             <div className='text-center'>
//                 <Link to='/inventories'
//                     className='btn btn-primary m-5'>
//                     Manage All Inventories
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Checkout;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({inventory}) => {
    const { id, img, name, description, price, quantity, supplierName } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
                <div class="card " style={{ width: "18rem" }}>
                    <img className='w-100' src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Price: {price}</p>
                        <p class="card-text">{description}</p>
                        <p class="card-text">Quantity: {quantity}</p>
                        <p class="card-text">{supplierName}</p>
                        <button onClick={() => navigateToInventoryDetail(id)} className='btn btn-primary'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;