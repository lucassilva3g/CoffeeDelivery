import { ReactNode, useState } from "react"

import { Address, AddressContext } from "../contexts/AddressContext"

interface AddressProviderProps {
  children: ReactNode
}

export const AddressProvider = ({ children }: AddressProviderProps) => {
  const [address, setCart] = useState<Address>({} as Address)
  const [paymentMethod, setPaymentMethod] = useState<
    "credit" | "debit" | "money"
  >("credit")

  const updateAddress = (address: Address) => {
    setCart(address)
  }

  const updatePaymentMethod = (paymentMethod: "credit" | "debit" | "money") => {
    setPaymentMethod(paymentMethod)
  }

  const isFormValid = !!(
    address.zipCode &&
    address.street &&
    address.number &&
    address.neighborhood &&
    address.city &&
    address.state
  )

  return (
    <AddressContext.Provider
      value={{
        address,
        updateAddress,
        paymentMethod,
        updatePaymentMethod,
        isFormValid,
      }}
    >
      {children}
    </AddressContext.Provider>
  )
}
