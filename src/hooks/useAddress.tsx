import { useContext } from "react"

import { AddressContext } from "../contexts/AddressContext"

const useAddress = () => {
  const context = useContext(AddressContext)

  if (context === undefined) {
    throw new Error("useAddress must be used within an AddressProvider")
  }

  return context
}

export default useAddress
