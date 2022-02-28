import React, {useState, useEffect} from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from './StateProvider';
import Order from './Order'

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  
  return (
    <div className='orders'>
        <h1>Successful payment 😁😁✌️, Hooray !!!</h1>
        <div className="orders_order">
                
            </div>

           
    </div>
    
  )
}

export default Orders