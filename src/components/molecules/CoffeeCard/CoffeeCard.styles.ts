import { styled } from "styled-components"

import { media } from "../../../styles/breakpoints/media"

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.baseCard};
  width: 256px;
  border-radius: 6px 36px;
  padding: 24px;
  z-index: 1;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.xl`
    width: 100%;
    max-width: 400px;

    `}
`

export const StyledImage = styled.img`
  position: absolute;
  z-index: 0;
  top: -20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.baseCard};
  border: 2px solid ${({ theme }) => theme.colors.baseButton};
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  & > * {
    margin-bottom: 8px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > *:first-child {
    margin-top: 8px;
  }
`

export const StyledLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.baseText};
  text-align: center;

  color: ${({ theme }) => theme.colors.yellowDark};
  background-color: ${({ theme }) => theme.colors.yellowLight};
  border-radius: 100px;
  padding: 4px 8px;
`

export const StyledTitle = styled.h3`
  font-size: 22px;
  padding-top: 2px;
  color: ${({ theme }) => theme.colors.baseTitle};
  text-align: center;
`

export const StyledDescription = styled.p`
  font-size: 14px;
  padding-top: 4px;
  padding-bottom: 8px;
  color: ${({ theme }) => theme.colors.baseLabel};
  text-align: center;
`

export const StyledPriceWrapper = styled.div`
  display: flex;
  font-family: Baloo2 Bold;
  color: ${({ theme }) => theme.colors.baseText};
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 15px;
  width: 100%;
`

export const StyledPrice = styled.span`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.baseText};
  font-family: "Baloo 2", cursive;
  font-weight: 700;
  padding-bottom: 4px;
`

export const StyledPriceLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;
`
export const StyledPriceActions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
`
