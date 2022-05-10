import React from 'react';
import { useNavigate } from 'react-router-dom';


const UpdateInventory = ({ inventory }) => {
    const { id, img, name, description, price, quantity, supplierName } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        
            <div className=' container gy-4 col-sm-12 col-md-6 col-lg-4'>
                <div class="card " style={{ width: "16rem", height: "570px" }}>
                    <img style={{ height: '300px' }} src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">$ {price}</p>
                        <p class="card-text">{description}</p>
                        <p class="card-text">Quantity: {quantity}</p>
                        <p class="card-text">{supplierName}</p>
                        <button onClick={() => navigateToInventoryDetail(id)} className='btn btn-primary'>Update</button>
                    </div>
                </div>
            </div>
        

    );
};

export default UpdateInventory;