import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {itemId} =useParams();
    return (
        <div>
            <h2>welcome to my item:{itemId}</h2>
        </div>
    );
};

export default InventoryDetail;