import logo from "../../../assets/images/logo.png"
import { StyledImage, StyledLogoContainer } from "./Logo.styles"

const Logo = () => {
  return (
    <StyledLogoContainer>
      <StyledImage src={logo} alt="Coffee Logo" />
    </StyledLogoContainer>
  )
}

export { Logo }
