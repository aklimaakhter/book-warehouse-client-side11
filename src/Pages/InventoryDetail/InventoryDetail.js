import React from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Checkout from '../Checkout/Checkout/Checkout';

const InventoryDetail = () => {
    const [inventories, setInventories] = useInventory();
    
    const {inventoryId} =useParams();
    return (
        <div>
            <h2>welcome to my inventory:{inventoryId}</h2>
            <div className='text-center mt-5'>
                <div className='row mb-5'>
                    {
                        inventories.map(inventory => <Checkout
                            key={inventory.id}
                            inventory={inventory}
                        ></Checkout>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;