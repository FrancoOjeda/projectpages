import React from 'react';
import './Cart.css'
import { EmptyCart } from './icons/EmptyCart';

const Cart = ({ cantidad }) => {
  return (
    <div className='cart__container'>
      <h1 className='title__cart'>Your Cart <span>({cantidad})</span></h1>
      <EmptyCart />
      <p className='cart__empty__description'>Your added items will appear her</p>
    </div>
  )
}

export { Cart }