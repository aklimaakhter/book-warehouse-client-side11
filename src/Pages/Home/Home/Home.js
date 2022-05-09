import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useInventory from '../../../hooks/useInventory';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner';
import KidsCollections from '../KidsCollections/KidsCollections';
import UpdateInventory from '../UpdateInventory/UpdateInventory';



const Home = () => {
    const [inventories, setInventories] = useInventory();
    const [loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>
            <Banner></Banner>
            <div id='inventories' className='container mt-5'>
                <h2 className='text-primary text-center'> Book Items</h2>
                <div className='row mb-5'>
                    {
                        inventories.slice(0, 6).map(inventory =><UpdateInventory
                            key={inventory.id}
                            inventory={inventory}
                        ></UpdateInventory>)
                        
                    }
                </div>
            </div>
            <div className='text-center'>
                <Link to='/inventories'
                    className='btn btn-primary m-5'>
                    Manage All Inventories
                </Link>
            </div>
            <KidsCollections></KidsCollections>
            
        </>
    );
};

export default Home;