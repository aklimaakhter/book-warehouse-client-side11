import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] =useState([]);

    useEffect(()=>{
        fetch('items.json')
        .then(res =>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div id='items' className='container mt-5'>
            <h2 className='text-primary text-center'> Book Items:{items.length}</h2>
            <div className='row mb-5'>
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;