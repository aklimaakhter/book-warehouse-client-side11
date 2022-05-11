import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Inventory from '../Inventory/Inventory';


const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);

    
    return (
        <div id='inventories' className='container '>
            <div className=' d-block mx-auto mt-5 '>
                <h2 className='text-primary text-center p-5'> Book Items:{inventories.length}</h2>
                <div className='row m-5'>
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/inventories'
                        className='btn btn-primary m-5'>
                        Add New Item
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Inventories;