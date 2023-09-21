import { useContext } from "react"

import { CartContext } from "../contexts/CartContext"

const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error("useCart must be used within an CartProvider")
  }

  return context
}

export default useCart
