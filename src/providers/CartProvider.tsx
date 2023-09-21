import { ReactNode, useState } from "react"

import { Cart, CartContext } from "../contexts/CartContext"

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart[]>([])

  const addToCart = (item: Cart) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id,
    )

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity = item.quantity
      setCart(updatedCart)
    } else {
      setCart((prevCart) => [...prevCart, item])
    }
  }

  const reduceCartItemQuantity = (itemId: number) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === itemId,
    )

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity -= 1
      setCart(updatedCart)
    }
  }

  const totalCartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  function removeCart(itemId: number) {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === itemId,
    )

    if (existingItemIndex >= 0) {
      const newCart = [...cart]
      newCart.splice(existingItemIndex, 1)
      setCart(newCart)
    }
  }

  const cartItemsValue = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  const deliveryValue = cartItemsValue > 60 ? 0 : 3
  const cartTotalValue = cartItemsValue + deliveryValue

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeCart,
        totalCartQuantity,
        reduceCartItemQuantity,
        cartItemsValue,
        deliveryValue,
        cartTotalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
