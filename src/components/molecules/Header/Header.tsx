import { Link } from "react-router-dom"

import useCart from "../../../hooks/useCart"
import { CartButton } from "../../atoms/CartButton/CartButton"
import { Logo } from "../../atoms/Logo/Logo"
import { StyledCart, StyledHeader, StyledLocation } from "./Header.styles"

function Header() {
  const { totalCartQuantity } = useCart()

  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      <StyledCart>
        <StyledLocation>
          <p>São Paulo, SP</p>
        </StyledLocation>
        <Link to="/checkout">
          <CartButton variant="full" quantity={totalCartQuantity} />
        </Link>
      </StyledCart>
    </StyledHeader>
  )
}

export { Header }
