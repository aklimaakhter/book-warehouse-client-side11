import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import FeaturedBook from '../../FeaturedBook/FeaturedBook';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import KidsCollections from '../KidsCollections/KidsCollections';
import UpdateInventory from '../UpdateInventory/UpdateInventory';



const Home = () => {
    const [inventories, setInventories] = useInventory();
    const [loading, setLoading] = useState(true);

    
    return (
        <>
            <Banner></Banner>
            <FeaturedBook></FeaturedBook>
            {/* {loading ? <Loading /> :'false'} */}
            <div id='inventories' className='container g-5'>
                <h2 className='text-primary text-center'> Book Items</h2>
                <div className='row mb-5'>
                    {
                        inventories.slice(0, 6).map(inventory => <UpdateInventory
                            key={inventory.id}
                            inventory={inventory}
                        ></UpdateInventory>)

                    }
                </div>
            </div>
         
            <KidsCollections></KidsCollections>
            <div className='text-center'>
                <Link to='/inventories'
                    className='btn btn-primary m-5'>
                    Manage Inventories
                </Link>
            </div>
        </>
    );
};

export default Home;