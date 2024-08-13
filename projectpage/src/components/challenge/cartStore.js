import { map } from 'nanostores'
export const cartContainer = map({})
export async function addToCart({ id, name, description, price, image },) {

  const existingEntry = cartContainer.get()[id]

  if (existingEntry) {
    cartContainer.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1
    })
  } else {
    cartContainer.setKey(id, {
      id: id,
      name: name,
      description: description,
      price: price,
      image: image,
      quantity: 1
    })

    const newCart = cartContainer.get()
    console.log("el nuevo carrito: ", newCart);
  }
}