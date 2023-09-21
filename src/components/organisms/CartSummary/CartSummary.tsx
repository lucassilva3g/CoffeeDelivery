import { useHistory } from "react-router-dom"

import useAddress from "../../../hooks/useAddress"
import useCart from "../../../hooks/useCart"
import { CartSummaryItem } from "../../molecules/CartSummaryItem/CartSummaryItem"
import {
  StyledAmount,
  StyledButton,
  StyledContainer,
  StyledContent,
  StyledPrice,
  StyledValue,
} from "./CartSummary.styles"

const CartSummary = () => {
  const { cart, cartItemsValue, cartTotalValue, deliveryValue } = useCart()
  const { isFormValid, paymentMethod } = useAddress()
  const history = useHistory()

  function handleClick() {
    history.push("/summary")
  }
  return (
    <StyledContainer>
      {cart.map((coffee) => (
        <CartSummaryItem item={coffee} key={coffee.id} />
      ))}

      <StyledContent>
        <StyledAmount>
          <StyledValue>
            <p>Total de itens</p>
            <p>Entrega</p>
            <h4>Total</h4>
          </StyledValue>
          <StyledPrice>
            <p>R$ {cartItemsValue.toFixed(2)}</p>
            <p>R$ {deliveryValue.toFixed(2)}</p>
            <h4>R$ {cartTotalValue.toFixed(2)}</h4>
          </StyledPrice>
        </StyledAmount>
        <StyledButton
          type="button"
          onClick={handleClick}
          disabled={!isFormValid || !paymentMethod}
        >
          Confirmar pedido
        </StyledButton>
      </StyledContent>
    </StyledContainer>
  )
}

export { CartSummary }
