export type TransactionTypeItemButtonProps = {
  value: "credit" | "debit" | "money"
  children: React.ReactNode
  disabled?: boolean
  icon?: React.ReactNode
  onClick?: () => void
}
