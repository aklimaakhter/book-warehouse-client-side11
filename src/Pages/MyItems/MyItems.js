import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `https://sleepy-bastion-71074.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user])

    return (
        <div className='container'>
            <h3 className='myItems-title'>My Items: {orders.length}</h3>
            <div className='myItems-container' >
                {
                    orders.map(order => <div className='myItems'
                        key={order._id}>
                        <p>{order.inventory}</p>
                        <p>{order.inventoryId}</p>
                        <p>{order.email}</p>
                        <button className='btn btn-primary'>Cancel</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;
