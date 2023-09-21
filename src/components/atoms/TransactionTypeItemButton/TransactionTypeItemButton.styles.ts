import * as RadioGroup from "@radix-ui/react-radio-group"
import styled from "styled-components"

import { media } from "../../../styles/breakpoints/media"
import { TransactionTypeItemButtonProps } from "./types"

export const Container = styled(
  RadioGroup.Item,
)<TransactionTypeItemButtonProps>`
  background: ${({ theme }) => theme.colors.baseButton};
  padding: 1rem;
  width: 178.67px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.colors.baseText};
  transition: background 0.2s;

  ${media.md`
    width: 100%;
  `}

  ${media.lg`
    width: 100%;
  `}

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  ${media.md`
    width: 200px;
  `}

  ${media.lg`
  width: 100%;
  `}

  ${media.xl`
    width: 170px;
  `}



  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background: ${({ theme }) => theme.colors.baseHover};
  }

  &[data-state="checked"] {
    border: 2px solid ${({ theme }) => theme.colors.purple};
    background: ${({ theme }) => theme.colors.yellow};
    background: ${({ theme }) => theme.colors.purpleLight};
    color: ${({ theme }) => theme.colors.baseText};
  }

  ${(props) => {
    if (props.disabled) {
      return `
        opacity: 0.5;
        cursor: not-allowed;
      `
    }
  }}
`
