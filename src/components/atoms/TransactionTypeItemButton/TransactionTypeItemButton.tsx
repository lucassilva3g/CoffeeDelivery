import React from "react"

import { Container } from "./TransactionTypeItemButton.styles"
import { TransactionTypeItemButtonProps } from "./types"

const TransactionTypeItemButton: React.FC<TransactionTypeItemButtonProps> = ({
  value,
  disabled,
  children,
  icon,
  ...props
}) => {
  return (
    <Container value={value} disabled={disabled} {...props}>
      {icon}
      <span>{children}</span>
    </Container>
  )
}

export { TransactionTypeItemButton }
