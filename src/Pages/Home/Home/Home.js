import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeaturedBook from '../../FeaturedBook/FeaturedBook';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import KidsCollections from '../KidsCollections/KidsCollections';
import UpdateInventory from '../UpdateInventory/UpdateInventory';



const Home = () => {
    const [inventories, setInventories] = useState([]);
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
            setLoading(true);
            
    }, []);

    
    return (
        <>
            
                <Banner></Banner>
                <FeaturedBook></FeaturedBook>
                <div id='inventories' className='container'>
                    <h2 className='text-primary text-center'> Book Items</h2>
                    <div className='row mb-5'>
                        {
                            inventories.slice(0, 6).map(inventory => <UpdateInventory
                                key={inventory._id}
                                inventory={inventory}
                            ></UpdateInventory>)
                        }
                    </div>
                </div>
            <div className='text-center'>
                <Link to='/inventories'
                    className='btn btn-primary m-5'>
                    Manage Inventories
                </Link>
            </div>
                <KidsCollections></KidsCollections>
        </>
    );
};

export default Home;