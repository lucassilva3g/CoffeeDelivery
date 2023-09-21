import { ShoppingCartSimple } from "@phosphor-icons/react"
import { styled } from "styled-components"

import { CartButtonProps, CartPropsVariant } from "./types"

export const StyledCartButton = styled.button<CartButtonProps>`
  border: 1px solid ${({ theme }) => theme.colors.baseInput};
  /* color: ${({ theme }) => theme.colors.baseText}; */
  position: relative;
  border-radius: 6px;
  padding: 0.3rem 0.6rem;

  background-color: ${({ theme, backgroundColor }) => {
    switch (backgroundColor) {
      case CartPropsVariant.Purple:
        return theme.colors.purple
      case CartPropsVariant.Yellow:
        return theme.colors.yellowLight
      default:
        return theme.colors.yellowLight
    }
  }};

  color: ${({ theme, backgroundColor }) => {
    switch (backgroundColor) {
      case CartPropsVariant.Purple:
        return theme.colors.white
      case CartPropsVariant.Yellow:
        return theme.colors.yellowDark
      default:
        return theme.colors.yellowDark
    }
  }};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    transition: background-color 0.2s;
    background-color: ${({ theme, backgroundColor }) => {
      switch (backgroundColor) {
        case CartPropsVariant.Purple:
          return theme.colors.purpleDark
        case CartPropsVariant.Yellow:
          return theme.colors.yellow
        default:
          return theme.colors.yellow
      }
    }};
  }
`

export const StyledShoppingCartIcon = styled(
  ShoppingCartSimple,
)<CartButtonProps>``

export const StyledCartQuantity = styled.span`
  font-size: 0.8rem;
  margin-left: 0;
  width: 16px;
  height: 16px;
  position: absolute;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellowDark};
  color: ${({ theme }) => theme.colors.white};
`
