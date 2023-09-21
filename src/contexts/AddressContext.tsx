import { createContext } from "react"

export interface Address {
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

interface AddressContextType {
  address: Address
  updateAddress: (address: Address) => void
  paymentMethod: "credit" | "debit" | "money"
  updatePaymentMethod: (paymentMethod: "credit" | "debit" | "money") => void
  isFormValid: boolean
}

export const AddressContext = createContext<AddressContextType | undefined>(
  undefined,
)
