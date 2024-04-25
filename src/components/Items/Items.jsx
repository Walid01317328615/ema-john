import React from 'react';
import './Items.css'

const Items = (props) => {
    const { img, name, seller, ratings, price} = props.item;

   console.log(props);

 
    return (
        <div className='items'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h4 className='product-name'>{name}</h4>
            <p>Price:${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings} star</p>
            
           </div>
           <button className='but-add'>Add to cart</button>
            
        </div>
    );
};

export default Items;