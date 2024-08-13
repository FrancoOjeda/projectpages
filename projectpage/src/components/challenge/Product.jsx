import './Product.css'
import { CartIcon } from './icons/CartIcon.jsx';
import { cartContainer, addToCart } from './cartStore.js';
const ProductWithReact = ({ products: { image, name, description, id, price } }) => {

  const handleAddToCart = () => {
    addToCart({ id, name, description, price, image })
  }
  return (
    <>
      <div className='card'>
        <img
          src={image}
          alt={description}
        />
        <button className='product__add' onClick={handleAddToCart}><CartIcon /> Add to Cart</button>
        <div className='product__container__description'>
          <p className='product__description'>{description}</p>
          <h3 className='product__name'>{name}</h3>
          <p className='product__price'>{price}</p>
        </div>
      </div>
    </>
  )
}

export { ProductWithReact }