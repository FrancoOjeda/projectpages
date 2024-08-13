import { createContext, useState } from "react";

// Creacion de contexto
export const CartContext = createContext()

// Creacion de provider

export function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  const addToCart = product => {
    // setCart([...cart, product]) Esta es la forma sensilla de añadir productos al carrito
    // Para manipular la cantidad de elementos en el carrito, usamos el indice
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    // FindIndex devuelve el indice del elemento que coincide con la busqueda
    if (productInCartIndex >= 0) { //Si el indice es mayor a cero, entonces existe un producto con ese id  en el array
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart)
    }

    // SI el indice es menor a cero, entonces el producto no estaba en el carrito y lo agregamos
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }
  const clearCart = () => {
    serCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
