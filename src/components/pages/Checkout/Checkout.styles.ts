import styled from "styled-components"

import { media } from "../../../styles/breakpoints/media"

export const StyledCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px;

  ${media.lg`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
    gap: 10px;
    `}
`
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${media.lg`
    width: 50%;
    `}
`

export const StyledPayment = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.md`
    width: 60%;
    `}

  ${media.lg`
  display: flex;
  flex-direction: column;
  width: 500px;
    `}
`

export const StyledFormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;

  ${media.lg`
    margin-bottom: 20px;
    align-self: flex-start;
    `}
`

export const StyledPaymentTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;

  ${media.lg`
    margin-bottom: 20px;
    margin-top: -50px;
    text-align: left;
    `}
`

export const StyledEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 30px;
  border: 2px solid ${({ theme }) => theme.colors.yellowLight};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.yellowLight};
  gap: 20px;
`
export const StyledContainerEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 200px;
`
