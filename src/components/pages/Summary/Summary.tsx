import cash from "../../../assets/images/cash.png"
import local from "../../../assets/images/local.png"
import summaryImg from "../../../assets/images/summaryImg.png"
import time from "../../../assets/images/time.png"
import useAddress from "../../../hooks/useAddress"
import {
  StyledCard,
  StyledCardItems,
  StyledCardTitle,
  StyledContainer,
  StyledContent,
  StyledIcons,
  StyledImg,
  StyledSubtitle,
  StyledTitle,
} from "./Summary.styles"

const Summary = () => {
  const { address, paymentMethod } = useAddress()

  const payment = () => {
    if (paymentMethod === "credit") {
      return " Cartão de Crédito"
    } else if (paymentMethod === "debit") {
      return " Cartão de Débito"
    } else {
      return ", em Dinheiro"
    }
  }

  return (
    <StyledContainer>
      <StyledContent>
        <StyledCardTitle>
          <StyledTitle>Uhu! Pedido Confirmado</StyledTitle>
          <StyledSubtitle>
            Agora é só aguardar que logo o café chegará até você
          </StyledSubtitle>
        </StyledCardTitle>
        <StyledCard>
          <StyledCardItems>
            <StyledIcons src={local} alt="Local Icon" />
            Entrega em {address.street}, {address.number} -{" "}
            {address.neighborhood}, {address.city}, {address.state}{" "}
            {address.complement}
          </StyledCardItems>
          <StyledCardItems>
            <StyledIcons src={time} alt="time Icon" />
            Previsão de entrega 20 min - 30 min{" "}
          </StyledCardItems>
          <StyledCardItems>
            <StyledIcons src={cash} alt="cash Icon" />
            Pagamento na entrega{payment()}
          </StyledCardItems>
        </StyledCard>
      </StyledContent>
      <StyledImg src={summaryImg} alt="" />
    </StyledContainer>
  )
}

export { Summary }
