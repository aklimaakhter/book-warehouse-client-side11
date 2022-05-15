import React from 'react';
import useInventory from '../../hooks/useInventory';

const ManageItems = () => {
    const [inventories,setInventories] = useInventory();

    const handleDelete = id =>{
       const proceed = window.confirm('Are you sure delete?');
       if(proceed){
           const url =`https://sleepy-bastion-71074.herokuapp.com/inventory/${id}`
           fetch(url,{
               method:'DELETE'
           })
           .then(res => res.json())
           .then(data =>{
               console.log(data);
               const remaining = inventories.filter(inventory =>inventory._id !== id);
                setInventories(remaining);
           })
       }
    }
    return (
        <div className='w-50 mx-auto'>
            <h3>Manage Your Items</h3>
            {
                inventories.map(inventory =><div key={inventory._id}>
                    <h5>{inventory.name} <button className='btn btn-secondary' onClick={()=>handleDelete(inventory._id)}>Delete</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageItems;