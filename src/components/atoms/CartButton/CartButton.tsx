import React from "react"

import {
  StyledCartButton,
  StyledCartQuantity,
  StyledShoppingCartIcon,
} from "./CartButton.styles"
import { CartButtonProps, CartPropsVariant } from "./types"

const CartButton: React.FC<CartButtonProps> = ({
  variant,
  quantity,
  backgroundColor = CartPropsVariant.Yellow,
  ...rest
}) => {
  const shouldDisplayQuantity =
    variant === "full" && quantity !== undefined && quantity > 0
  return (
    <StyledCartButton backgroundColor={backgroundColor} {...rest}>
      <StyledShoppingCartIcon
        weight="fill"
        alt="Ícone de carrinho de compras"
        size={22}
      />
      {shouldDisplayQuantity && (
        <StyledCartQuantity>{quantity}</StyledCartQuantity>
      )}
    </StyledCartButton>
  )
}

export { CartButton }
