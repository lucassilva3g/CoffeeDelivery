import { styled } from "styled-components"

import { InputProps } from "./types"

export const StyledInputContainer = styled.input<InputProps>`
  border: 1px solid ${({ theme }) => theme.colors.baseInput};
  background-color: ${({ theme }) => theme.colors.baseInput};
  color: ${({ theme }) => theme.colors.baseText};
  padding: 12px;
  border-radius: 4px;
  min-width: 434px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.baseLabel};
  }

  &:active,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.yellowDark};
  }
`
