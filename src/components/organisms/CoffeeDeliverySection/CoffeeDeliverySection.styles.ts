import styled from "styled-components"

import { media } from "../../../styles/breakpoints/media"

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;

  ${media.xl`
    margin-top: 0;
  `}
`

export const StyledContent = styled.div`
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  justify-content: start;

  ${media.xl`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 200px;
  `}
`

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 60px;
  width: 100%;

  ${media.xl`
  width: 50%;
  margin-top: 20px;
  `}
`

export const StyledTitle = styled.h1`
  font-size: 30px;
  padding: 0 15px 0 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.baseTitle};

  ${media.xl`
    font-size: 50px;
    width: 100%;
  `}
`

export const StyledSubtitle = styled.h3`
  font-size: 15px;
  padding: 0 100px;
  text-align: center;
  color: ${({ theme }) => theme.colors.baseSubtitle};

  ${media.xl`
    font-size: 20px;
    width: 100%;
  `}
`

export const StyledCoffeeImage = styled.img`
  width: 300px;

  ${media.xl`
    margin-top: 50px;
    width: 476px;
    height: 360px;
  `}
`

export const StyledImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${media.xl`
    width: 50%;
    margin-top: 100px;
  `}
`

export const StyledItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 80px;

  ${media.xl`
    width: 60%;
    margin-bottom: 150px;
    margin-top: 0px;
  `}
`

export const StyledItems1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 55px;

  ${media.xl`
    margin-top: 0px;
    margin-bottom: 55px;
  `}
`

export const StyledItems2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.xl`
    margin-top: 0px;
    margin-bottom: 55px;
  `}
`
export const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  vertical-align: middle;

  ${media.xl`
    width: 32px;
    height: 32px;
  `}
`
