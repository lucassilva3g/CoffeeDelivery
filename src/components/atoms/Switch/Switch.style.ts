import * as RadixSwitch from "@radix-ui/react-switch"
import { styled } from "styled-components"

export const StyledSwitch = styled(RadixSwitch.Root)`
  all: unset;
  width: 50px;
  height: 25px;
  background: ${({ theme }) => theme.colors.baseButton};
  border-radius: 25px;
  position: relative;
  padding: 5px;
  cursor: pointer;

  &[data-state="checked"] {
    background: ${({ theme }) => theme.colors.yellowDark};
  }

  &:focus {
    outline: none;
  }
`

export const StyledThumb = styled(RadixSwitch.Thumb)`
  display: block;
  width: 15px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;

  ${StyledSwitch}[data-state="checked"] & {
    transform: translateX(35px);
  }
`
