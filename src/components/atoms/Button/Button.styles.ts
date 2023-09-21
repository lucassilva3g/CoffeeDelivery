import styled from "styled-components"

import { ButtonProps, ButtonVariant } from "./types"

export const StyledButtonContainer = styled.button<ButtonProps>`
  height: 56px;
  border-radius: 5px;
  border: 0;
  font-weight: 500;
  margin-top: 16px;
  transition: background 0.2s;

  ${(props) => {
    if (props.disabled || props.loading) {
      return `
        cursor: not-allowed;
      `
    }

    switch (props.variant) {
      case ButtonVariant.Primary:
        return `
          background: ${props.theme.colors.yellow};
          color: ${props.theme.colors.white};
          min-width: 132px;
          padding: 12px 8px;
        `
      case ButtonVariant.Secondary:
        return `
          background: ${props.theme.colors.baseButton};
          color: ${props.theme.colors.baseText};
          padding: 0px 8px;
          min-width: 75px;
        `
      default:
        return ""
    }
  }}

  &:hover {
    ${(props) => {
      if (props.variant === ButtonVariant.Primary) {
        return `background: ${props.theme.colors.yellowDark};`
      }

      if (props.variant === ButtonVariant.Secondary) {
        return `background: ${props.theme.colors.baseHover};`
      }
    }}
  }
`
