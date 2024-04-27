import React, { useEffect, useState } from 'react';
import './Shop.css';

import Items from '../../Items/Items';
import Cart from '../../Cart/Cart';
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
               <Cart cart ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;