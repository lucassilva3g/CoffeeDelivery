import InputMask from "react-input-mask"
import styled from "styled-components"

import { media } from "../../../styles/breakpoints/media"

export const StyledContainerForm = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.baseCard};
`

export const StyledTitleForm = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  flex-direction: column;
  font-size: 20px;
`

export const StyledSubtitle = styled.p`
  padding-left: 32px;
  padding-top: 5px;
`

export const StyledLocation = styled.img`
  vertical-align: middle;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin: 0 auto;
  padding: 20px;
`
export const StyledComplement = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
`
export const StyledState = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
`
export const StyledCity = styled.input`
  display: flex;
  text-align: center;
  flex-direction: row;
  width: 50px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
`

export const StyledInputMask = styled(InputMask)`
  display: flex;
  flex-direction: row;
  width: 40%;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
`

export const StyledAdress = styled.input`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

export const StyledNumber = styled.input`
  display: flex;
  flex-direction: row;
  width: 70%;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
`

export const StyledComplements = styled.input`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
`
export const Styledneighborhood = styled.input`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;

  ${media.lg`
    width: 50%;
    `}
`
