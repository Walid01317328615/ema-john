import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let total = 0;
    let totalShipping = 0;
 for(const item of cart){
    total = total + item.price;
    totalShipping = totalShipping + item.shipping;
    
  
 }

  const gtandtotal = total + totalShipping ;


    return (
        <div className='cart'>
             <h4>order summary</h4>
                <p>Selected Items:{cart.length}</p>
                <p>Total price:${total}</p>
                <p>Total Shipping:{totalShipping}</p>
                <h5>Grand Total:${gtandtotal}</h5>
            
        </div>
    );
};

export default Cart;