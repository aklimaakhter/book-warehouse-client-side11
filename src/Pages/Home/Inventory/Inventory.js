import React from 'react';
import { useNavigate } from 'react-router-dom';


const Inventory = ({ inventory }) => {
    const { _id, img, name, description, price, quantity, supplierName } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
            <div className="card " style={{ width: "18rem", height: "570px"}}>
                <img style={{ height: '300px' }}  src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price:$ {price}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">{supplierName}</p>
                    <button onClick={() => navigateToInventoryDetail()} className='btn btn-primary'>Delete</button>
                </div>
            </div>
        </div>

    );
};

export default Inventory;