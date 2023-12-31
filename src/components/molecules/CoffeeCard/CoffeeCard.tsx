import { Link } from "react-router-dom"

import { Cart } from "../../../contexts/CartContext"
import { CartButton } from "../../atoms/CartButton/CartButton"
import { CartPropsVariant } from "../../atoms/CartButton/types"
import { QuantitySelector } from "../../atoms/QuantitySelector/QuantitySelector"
import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledImage,
  StyledLabel,
  StyledPrice,
  StyledPriceActions,
  StyledPriceLabel,
  StyledPriceWrapper,
  StyledTitle,
} from "./CoffeeCard.styles"

export interface CoffeeCardProps {
  item: Cart
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ item }) => {
  return (
    <StyledContainer>
      <StyledImage src={item.imageSrc} alt="Chicara de Café" />

      <StyledContent>
        <StyledLabel>{item.categories.join(" ").toUpperCase()}</StyledLabel>

        <StyledTitle>{item.title}</StyledTitle>
        <StyledDescription>{item.description}</StyledDescription>

        <StyledPriceWrapper>
          <StyledPriceLabel>
            <span>R$</span>
            <StyledPrice> {item.price.toFixed(2)}</StyledPrice>
          </StyledPriceLabel>
          <StyledPriceActions>
            <QuantitySelector item={item} />
            <Link to="/checkout">
              <CartButton backgroundColor={CartPropsVariant.Purple} />
            </Link>
          </StyledPriceActions>
        </StyledPriceWrapper>
      </StyledContent>
    </StyledContainer>
  )
}
