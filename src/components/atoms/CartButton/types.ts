import { ButtonHTMLAttributes } from "react"
export enum CartPropsVariant {
  Purple = "purple",
  Yellow = "yellow",
}

export type CartButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: "empty" | "full"
  quantity?: number
  backgroundColor?: CartPropsVariant
}
