import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';
import './InventoryDetail.css';


const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] =useState({});

    useEffect(()=>{
        const url =`http://localhost:5000/inventory/${inventoryId}`
        fetch(url)
        .then(res =>res.json())
        .then(data=>setInventory(data))
    },[])
    

    return (
        <div className=' container'>
                <div className=' inventory-detail'>
                    <div className='text-center mt-5 '>
                        <h2>Welcome to my inventory</h2>
                        <div className='d-flex justify-content-center mt-5'>
                            <div className="card  " style={{ width: "18rem", height: "600px" }}>
                                <img style={{ height: '300px' }} src={inventory.img} cla57ssName="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{inventory._id}</h5>
                                    <h5 className="card-title">{inventory.name}</h5>
                                    <p className="card-text">Price:$ {inventory.price}</p>
                                    <p className="card-text">{inventory.description}</p>
                                    <p className="card-text">Quantity: {inventory.quantity}</p>
                                    <p className="card-text">{inventory.supplierName}</p>
                                    <button className='btn btn-primary'>Delivered</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='restock'>
                        <h5>Restock the Item</h5>
                        <input type="number" name="number" id="" placeholder='Number' />
                        <br />
                        <button className='btn btn-primary mt-2 text-center'>Add</button>
                    </div>
                </div>
            
            <div className='text-center'>
                <Link to='/inventories'
                    className='btn btn-primary m-5'>
                    Manage Inventories
                </Link>
            </div>
        </div>
        
    );
};

export default InventoryDetail;