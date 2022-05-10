import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Checkout from '../Checkout/Checkout/Checkout';
import UpdateInventory from '../Home/UpdateInventory/UpdateInventory';

const InventoryDetail = () => {
    const [inventories, setInventories] = useInventory();
    
    const {inventoryId} =useParams();
    return (
        <div>
            <h2>welcome to my inventory:{inventoryId}</h2>
            <div className='text-center mt-5'>
                <div className='row mb-5'>
                    {
                        inventories.map(inventory => <UpdateInventory>
                            key={inventory.id}
                            inventory={inventory}
                        </UpdateInventory>)
                    }
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