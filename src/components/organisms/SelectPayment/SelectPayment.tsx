import { Bank, CreditCard, Money } from "@phosphor-icons/react"

import IconMoney from "../../../assets/images/IconMoney.png"
import useAddress from "../../../hooks/useAddress"
import { TransactionTypeItemButton } from "../../atoms/TransactionTypeItemButton/TransactionTypeItemButton"
import { TransactionType } from "../../pages/Home/Home.styles"
import {
  StyledIcon,
  StyledSelectPaymentContainer,
  StyledSubtitle,
  StyledTitle,
  StyledTransactionType,
} from "./SelectPayment.styles"

const SelectPayment = () => {
  const { paymentMethod, updatePaymentMethod } = useAddress()

  const handlePaymentMethod = (paymentMethod: "credit" | "debit" | "money") => {
    updatePaymentMethod(paymentMethod)
  }
  return (
    <StyledSelectPaymentContainer>
      <StyledTitle>
        <StyledIcon src={IconMoney} alt="Icon Money" />
        Pagamento
      </StyledTitle>
      <StyledSubtitle>
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </StyledSubtitle>

      <TransactionType value={paymentMethod}>
        <StyledTransactionType>
          <TransactionTypeItemButton
            value="credit"
            icon={<CreditCard size={24} />}
            onClick={() => handlePaymentMethod("credit")}
          >
            Crédito
          </TransactionTypeItemButton>

          <TransactionTypeItemButton
            value="debit"
            icon={<Bank size={24} />}
            onClick={() => handlePaymentMethod("debit")}
          >
            Débito
          </TransactionTypeItemButton>
          <TransactionTypeItemButton
            value="money"
            icon={<Money size={24} />}
            onClick={() => handlePaymentMethod("money")}
          >
            Dinheiro
          </TransactionTypeItemButton>
        </StyledTransactionType>
      </TransactionType>
    </StyledSelectPaymentContainer>
  )
}

export { SelectPayment }
