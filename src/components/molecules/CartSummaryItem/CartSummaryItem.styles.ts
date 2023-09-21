import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.baseCard};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.baseButton};
`

export const StyledImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
`

export const StyledTitle = styled.p`
  display: flex;
  justify-content: column;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 0.5rem;
`

export const StyledButtons = styled.div`
  display: flex;
  justify-content: column;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`
export const StyledPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 3.5rem;
  padding-left: 10px;
`
export const StyledButton = styled.button`
  text-align: center;
  display: flex;
  padding: 0.5rem;
  gap: 5px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.baseButton};
  color: ${({ theme }) => theme.colors.baseText};
`
export const StyledIcon = styled.div`
  display: flex;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.purple};

  &:hover {
    color: ${({ theme }) => theme.colors.purpleDark};
  }
`
