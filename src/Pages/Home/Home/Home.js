import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';

import KidsCollections from '../KidsCollections/KidsCollections';



const Home = () => {
    const [inventories, setInventories] = useInventory();
    return (
        <>
            <Banner></Banner>
            <div id='inventories' className='container mt-5'>
                <h2 className='text-primary text-center'> Book Items</h2>
                <div className='row mb-5'>
                    {
                        inventories.slice(0, 6).map(inventory =><Inventory
                            key={inventory.id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
            </div>
            <div className='text-center'>
                <Link to='/inventories'
                    className='btn btn-primary m-5'>
                    See All Inventories
                </Link>
            </div>
            <KidsCollections></KidsCollections>

        </>
    );
};

export default Home;