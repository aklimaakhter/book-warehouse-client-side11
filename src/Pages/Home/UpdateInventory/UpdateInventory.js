import React from 'react';
import { useNavigate } from 'react-router-dom';


const UpdateInventory = ({ inventory }) => {
    const {_id, img, name, description, price, quantity, supplierName } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        
            <div className=' container g-4 col-sm-12 col-md-6 col-lg-4'>
                <div className="card " style={{ width: "16rem", height: "570px" }}>
                    <img style={{ height: '300px' }} src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">$ {price}</p>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">{supplierName}</p>
                        <button onClick={() => navigateToInventoryDetail(_id)} className='btn btn-primary'>Update</button>
                    </div>
                </div>
            </div>
        

    );
};

export default UpdateInventory;