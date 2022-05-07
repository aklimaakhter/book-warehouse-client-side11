import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {
    const { id, img, name, description, price, quantity, supplierName, sold } = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
            <div class="card " style={{ width: "18rem" }}>
                <img className='w-100' src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{price}</p>
                    <p class="card-text">{description}</p>
                    <p class="card-text">{quantity}</p>
                    <p class="card-text">{supplierName}</p>
                    <button onClick={() => navigateToItemDetail(id)} className='btn btn-primary'>Update</button>
                </div>
            </div>
        </div>

    );
};

export default Item;