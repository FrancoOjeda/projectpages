import './Cart.css'
import { EmptyCart } from './icons/EmptyCart';
import { cartContainer } from './cartStore';
import { useStore } from '@nanostores/react';
const Cart = () => {
  const $productsInCart = useStore(cartContainer)

  return (
    <div className='cart__container'>
      <h1 className='title__cart'>Your Cart <span></span></h1>
      {Object.values($productsInCart).length ? (
        <ul className='cart__item'>
          {Object.values($productsInCart).map((products) => (
            <li key={products.id}>
              <p className='cart__product__name'>{products.name}</p>
              <div className='cart_quantity_description'>
                <p className='cart__quantity__products' >{products.quantity}x</p>
                <p className='cart__price__products'>@${products.price}</p>
                <p className='cart__price__products__total'>${products.quantity * products.price}</p>
              </div>
              <div className='cart__product__gap'></div>
            </li>
          ))}
        </ul>) : <EmptyCart />}

      {
        !Object.values($productsInCart).length ? <p className='cart__empty__description'>Your added items will appear her</p> : <button className='cart__button__check'>Confirm Order</button>
      }
    </div>
  )
}

export { Cart }