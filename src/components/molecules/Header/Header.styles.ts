import styled from "styled-components"

import { media } from "../../../styles/breakpoints/media"

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  align-items: center;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.baseText};

  ${media.xl`
    padding: 32px 160px;
  `}
`

export const StyledLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background: ${({ theme }) => theme.colors.purpleLight};
  border: 1px;
  border-radius: 6px;
  width: 110px;
  height: 30px;
  justify-content: center;
`

export const StyledCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  gap: 14px;
  cursor: pointer;
`
