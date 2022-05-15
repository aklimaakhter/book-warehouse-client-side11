import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import Inventory from '../Inventory/Inventory';


const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-bastion-71074.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);

    
    return (
        <>
            <div id='inventories' className='container '>
                <div className=' d-block mx-auto mt-5 '>
                    <h2 className='text-primary text-center p-2'> Book Items:{inventories.length}</h2>
                    <div className='row m-5'>
                        {
                            inventories.map(inventory => <Inventory
                                key={inventory.id}
                                inventory={inventory}
                            ></Inventory>)
                        }
                    </div>

                </div>
            </div>
            <div className='text-center'>
                <Link to='/addItems'
                    className='btn btn-primary m-5'>
                    Add New Items
                </Link>
            </div>
        </>
    );
};

export default Inventories;