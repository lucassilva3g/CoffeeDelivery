import styled from "styled-components"

import { media } from "./../../../styles/breakpoints/media"

export const StyledSelectPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.baseCard};
  border-radius: 8px;
  padding: 1rem;

  ${media.md`
    align-items: center;
    justify-content: center;
    width: 100%;
  `}

  ${media.lg`
    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`

export const StyledIcon = styled.img`
  margin-right: 10px;
  vertical-align: middle;
`

export const StyledTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-left: -15px;
  margin-bottom: 5px;
  width: 100%;
`

export const StyledSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-left: 40px;
  width: 100%;

  ${media.lg`
    font-size: 16px;
    width: 100%;
  `}
`
export const StyledTransactionType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-left: 100%;
  flex-direction: column;
  gap: 15px;

  ${media.md`
    flex-direction: row;
    margin-left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
  `}

  ${media.lg`
  flex-direction: row;
    margin-left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`
