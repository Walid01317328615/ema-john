import React, { useEffect, useState } from 'react';
import './Shop.css';

import Items from '../../Items/Items';
const Shop = () => {

    const [products,setProducts] = useState([]);
    // button ar kaj
    const [cart , setCart] = useState([])


    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    
    },[]);

    const heandlerAdd =(item)=>{
        
        const newCart = [...cart,item];
        setCart(newCart);
    }

    

  
    return (
        <div className='shop'>
            <div className='products-container'>
               
             {
                products.map(item=><Items
                key = {item.id}
                item = {item}
                heandlerAdd = {heandlerAdd}
                
              
                ></Items>)
             }
            </div>
            <div className='cart-container'>
                <h4>order summary</h4>
                <p>Selected Items:{cart.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;