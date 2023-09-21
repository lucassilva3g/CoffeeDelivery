import styled from "styled-components"

export const StyledQuantitySelector = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  border-radius: 4px;
  width: 72px;
  height: 32px;
  padding: 0px 4px;
  background-color: ${({ theme }) => theme.colors.baseButton};
`

export const StyledIconButton = styled.button`
  background-color: ${({ theme }) => theme.colors.baseButton};
  color: ${({ theme }) => theme.colors.purple};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.purpleDark};
  }
`

export const StyledInputButton = styled.input`
  width: 100%;
  text-align: center;
  font-size: 14px;
  border: none;
  background-color: ${({ theme }) => theme.colors.baseButton};
  color: ${({ theme }) => theme.colors.baseText};
`
