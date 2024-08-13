import { useContext } from 'react'
import { CartContext } from '../CardContext.jsx'

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart debe utilizarse dentro de un CartProvider')
  }
  return context
}