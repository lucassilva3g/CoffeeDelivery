import { createContext } from "react"

export interface Cart {
  imageSrc: string
  categories: string[]
  description: string
  price: number
  title: string
  id: number
  quantity: number
}

interface CartContextType {
  cart: Cart[]
  addToCart: (item: Cart) => void
  reduceCartItemQuantity: (itemId: number) => void
  totalCartQuantity: number
  removeCart: (itemId: number) => void
  cartItemsValue: number
  deliveryValue: number
  cartTotalValue: number
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
