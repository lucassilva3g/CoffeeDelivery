import { Trash } from "@phosphor-icons/react"

import { Cart } from "../../../contexts/CartContext"
import useCart from "../../../hooks/useCart"
import { QuantitySelector } from "../../atoms/QuantitySelector/QuantitySelector"
import {
  StyledButton,
  StyledButtons,
  StyledContainer,
  StyledIcon,
  StyledImg,
  StyledPrice,
  StyledTitle,
} from "./CartSummaryItem.styles"

interface CoffeeProps {
  item: Cart
}

const CartSummaryItem = ({ item }: CoffeeProps) => {
  const { removeCart } = useCart()
  const { imageSrc, title, price } = item

  function handleRemove() {
    removeCart(item.id)
  }

  return (
    <StyledContainer>
      <StyledImg src={imageSrc} />
      <StyledTitle>
        <p>{title}</p>
        <StyledButtons>
          <QuantitySelector item={item} />
          <StyledButton onClick={handleRemove}>
            <StyledIcon>
              <Trash />
            </StyledIcon>
            Remover
          </StyledButton>
        </StyledButtons>
      </StyledTitle>
      <StyledPrice>
        <p>R${price.toFixed(2)}</p>
      </StyledPrice>
    </StyledContainer>
  )
}

export { CartSummaryItem }
