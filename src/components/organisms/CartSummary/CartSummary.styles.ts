import styled from "styled-components"

export const StyledContainer = styled.div`
  border-radius: 6px 36px;
  padding: 24px;
  z-index: 1;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.baseCard};
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 6px;
`

export const StyledAmount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
`

export const StyledValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  font-size: 1.5rem;
`

export const StyledPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  font-size: 1.5rem;
`

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  gap: 0.5rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme.colors.yellow};

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellowDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.yellowDark};
    cursor: not-allowed;
  }
`
