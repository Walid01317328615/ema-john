import React, { useEffect, useState } from 'react';
import './Shop.css';

import Items from '../../Items/Items';
const Shop = () => {

    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    
    },[])
    return (
        <div className='shop'>
            <div className='products-container'>
               
             {
                products.map(item=><Items
                key = {item.id}
                item = {item}
              
                ></Items>)
             }
            </div>
            <div className='cart-container'>
                <h4>order summary</h4>
            </div>
            
        </div>
    );
};

export default Shop;