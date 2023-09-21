import BoxIcon from "../../../assets/images/BoxIcon.png"
import CartIcon from "../../../assets/images/CartIcon.png"
import CoffeeIcon from "../../../assets/images/CoffeeIcon.png"
import TimeIcon from "../../../assets/images/TimeIcon.png"
import TitleImg from "../../../assets/images/TitleImg.png"
import {
  StyledCoffeeImage,
  StyledContainer,
  StyledContent,
  StyledIcon,
  StyledImg,
  StyledItems,
  StyledItems1,
  StyledItems2,
  StyledSubtitle,
  StyledTitle,
  StyledTitleContainer,
} from "./CoffeeDeliverySection.styles"

const CoffeeDeliverySection = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledTitleContainer>
          <StyledTitle>
            Encontre o café perfeito para qualquer hora do dia
          </StyledTitle>

          <StyledSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </StyledSubtitle>
        </StyledTitleContainer>
        <StyledImg>
          <StyledCoffeeImage src={TitleImg} alt="Image Title" />
        </StyledImg>
      </StyledContent>
      <StyledItems>
        <StyledItems1>
          <p>
            <StyledIcon src={CartIcon} alt="Cart Icon" />
            Compra simples e segura
          </p>
          <p>
            <StyledIcon src={TimeIcon} />
            Entrega rápida e rastreada
          </p>
        </StyledItems1>
        <StyledItems2>
          <p>
            <StyledIcon src={BoxIcon} />
            Embalagem mantém o café intacto
          </p>
          <p>
            <StyledIcon src={CoffeeIcon} />O café chega fresquinho até você
          </p>
        </StyledItems2>
      </StyledItems>
    </StyledContainer>
  )
}

export { CoffeeDeliverySection }
