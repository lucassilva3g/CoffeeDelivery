import { Link } from "react-router-dom"

import useCart from "../../../hooks/useCart"
import { CartSummary } from "../../organisms/CartSummary/CartSummary"
import { DeliveryForm } from "../../organisms/DeliveryForm/DeliveryForm"
import { SelectPayment } from "../../organisms/SelectPayment/SelectPayment"
import {
  StyledCheckoutContainer,
  StyledContainerEmptyCart,
  StyledEmptyCart,
  StyledForm,
  StyledFormTitle,
  StyledPayment,
  StyledPaymentTitle,
} from "./Checkout.styles"

const Checkout = () => {
  const { cart } = useCart()

  if (cart.length === 0) {
    return (
      <StyledContainerEmptyCart>
        <StyledEmptyCart>
          <h1>Você não possui itens no carrinho.</h1>
          <h3>
            Clique <Link to="/">aqui</Link> para adicionar
          </h3>
        </StyledEmptyCart>
      </StyledContainerEmptyCart>
    )
  }

  return (
    <StyledCheckoutContainer>
      <StyledForm>
        <StyledFormTitle>complete seu pedido</StyledFormTitle>
        <DeliveryForm />
        <SelectPayment />
      </StyledForm>
      <StyledPayment>
        <StyledPaymentTitle>cafés selecionados</StyledPaymentTitle>
        <CartSummary />
      </StyledPayment>
    </StyledCheckoutContainer>
  )
}
export { Checkout }
