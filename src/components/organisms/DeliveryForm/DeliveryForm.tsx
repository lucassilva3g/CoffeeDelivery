/* eslint-disable @typescript-eslint/no-unsafe-argument */
import axios from "axios"
import { ChangeEvent } from "react"

import location from "../../../assets/images/location.png"
import useAddress from "../../../hooks/useAddress"
import {
  StyledAdress,
  StyledCity,
  StyledComplement,
  StyledComplements,
  StyledContainerForm,
  StyledForm,
  StyledInputMask,
  StyledLocation,
  Styledneighborhood,
  StyledNumber,
  StyledState,
  StyledSubtitle,
  StyledTitleForm,
} from "./DeliveryForm.styles"

interface Cep {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

const DeliveryForm = () => {
  const { updateAddress, address } = useAddress()
  const handleCep = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (value.replace(/[^0-9]/g, "").length === 8) {
      axios
        .get<Cep>(`https://viacep.com.br/ws/${value}/json/`)
        .then((response) => {
          const data = response.data
          updateAddress({
            city: data.localidade,
            state: data.uf,
            neighborhood: data.bairro,
            street: data.logradouro,
            zipCode: value,
            number: "",
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <StyledContainerForm>
      <StyledTitleForm>
        <h4>
          <StyledLocation src={location} alt="Icon Location" /> Endereço de
          Entrega
        </h4>
        <StyledSubtitle>
          Informe o endereço onde deseja receber seu pedido
        </StyledSubtitle>
      </StyledTitleForm>
      <StyledForm>
        <StyledInputMask
          placeholder="Cep"
          mask="99999-999"
          alwaysShowMask={false}
          value={address.zipCode}
          onChange={handleCep}
          required
        />
        <StyledAdress
          type="text"
          placeholder="Rua"
          maxLength={150}
          value={address.street}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            updateAddress({ ...address, street: e.target.value })
          }}
          required
        />
        <StyledComplement>
          <StyledNumber
            type="text"
            placeholder="Número"
            maxLength={8}
            value={address.number}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateAddress({ ...address, number: e.target.value })
            }
            required
          />
          <StyledComplements
            type="text"
            placeholder="Complemento"
            maxLength={100}
            value={address.complement}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateAddress({ ...address, complement: e.target.value })
            }
          />
        </StyledComplement>
        <StyledState>
          <Styledneighborhood
            type="text"
            placeholder="Bairro"
            maxLength={100}
            value={address.neighborhood}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateAddress({ ...address, neighborhood: e.target.value })
            }
            required
          />
          <Styledneighborhood
            placeholder="Cidade"
            maxLength={100}
            value={address.city}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateAddress({ ...address, city: e.target.value })
            }
            required
          />
          <StyledCity
            type="text"
            placeholder="UF"
            maxLength={2}
            value={address.state}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateAddress({ ...address, state: e.target.value })
            }
            required
          />
        </StyledState>
      </StyledForm>
    </StyledContainerForm>
  )
}

export { DeliveryForm }
