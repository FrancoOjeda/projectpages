import React from 'react';
import './Product.css'
// import Cart from './icons/Cart.astro';
import { CartIcon } from './icons/CartIcon.jsx';
import { useState } from 'react';
const ProductWithReact = ({ products: { image, name, description, id, price } }) => {

  const hacerAlgo = () => {
    console.log("Hago algo", id);

  }
  return (
    <div className='card'>
      <img
        src={image}
        alt={description}
      />
      <button className='product__add' onClick={hacerAlgo}><CartIcon /> Add to Cart</button>
      <div className='product__container__description'>
        <p className='product__description'>{description}</p>
        <h3 className='product__name'>{name}</h3>
        <p className='product__price'>{price}</p>
      </div>
    </div>
  )
}

export { ProductWithReact }