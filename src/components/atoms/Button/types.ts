import { ButtonHTMLAttributes, ReactElement } from "react"

export enum ButtonVariant {
  Primary = "primary",
  Secondary = "secondary",
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  loadingMessage?: string
  variant?: ButtonVariant
  icon?: ReactElement
}
