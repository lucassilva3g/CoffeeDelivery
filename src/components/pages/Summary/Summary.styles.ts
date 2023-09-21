import styled from "styled-components"

import { media } from "../../../styles/breakpoints/media"

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
  padding: 0 1rem;
  text-align: center;

  ${media.lg`
  flex-direction: row;
  justify-content: space-evenly;

  `}
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;

  ${media.lg`
  flex-direction: column;
  `}
`

export const StyledCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  ${media.lg`
  align-self: flex-start;
  `}
`

export const StyledCardItems = styled.p`
  display: flex;

  ${media.lg`
  align-self: flex-start;
  `}
`

export const StyledCard = styled.div`
  border-radius: 6px 36px;
  border: 1px solid transparent;
  border-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.yellow},
      ${({ theme }) => theme.colors.purple}
    )
    1;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  ${media.lg`
  width: 526px;
  height: 270px;
  padding: 3rem;
  `}
`

export const StyledTitle = styled.h2`
  font-size: 2rem;
  padding-right: 15px;
  color: ${({ theme }) => theme.colors.yellowDark};
`

export const StyledSubtitle = styled.p`
  font-size: 1rem;
  padding-left: 5px;
  color: black;
`
export const StyledIcons = styled.img`
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 1rem;
`
export const StyledImg = styled.img`
  border-radius: 6px 36px;
  margin-top: 100px;
  width: 392px;
  height: 250px;

  ${media.md`
  width: 452px;
  height: 253px;
  `}

  ${media.lg`
  width: 492px;
  height: 293px;
  `}
`
