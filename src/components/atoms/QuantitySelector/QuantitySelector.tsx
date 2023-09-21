import { Minus, Plus } from "@phosphor-icons/react"
import React, { useState } from "react"

import { Cart } from "../../../contexts/CartContext"
import useCart from "../../../hooks/useCart"
import {
  StyledIconButton,
  StyledInputButton,
  StyledQuantitySelector,
} from "./QuantitySelector.styles"

interface QuantitySelectorProps {
  item: Cart
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(item?.quantity || 0)
  const { addToCart, reduceCartItemQuantity } = useCart()

  const incrementQuantity = () => {
    const cartItem: Cart = {
      ...item,
      quantity: quantity + 1,
    }

    addToCart(cartItem)
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      reduceCartItemQuantity(item.id)
      setQuantity(quantity - 1)
    }
  }

  return (
    <StyledQuantitySelector>
      <StyledIconButton disabled={quantity === 0} onClick={decrementQuantity}>
        <Minus size={14} />
      </StyledIconButton>
      <StyledInputButton type="number" value={quantity} readOnly />
      <StyledIconButton onClick={incrementQuantity}>
        <Plus size={14} />
      </StyledIconButton>
    </StyledQuantitySelector>
  )
}

export { QuantitySelector }
