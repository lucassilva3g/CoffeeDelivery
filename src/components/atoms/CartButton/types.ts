import { ButtonHTMLAttributes } from "react"
export enum CartPropsVariant {
  Purple = "purple",
  Yellow = "yellow",
}

export type CartButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "empty" | "full"
  quantity?: number
  backgroundColor?: CartPropsVariant
}
