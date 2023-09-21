import * as RadioGroup from "@radix-ui/react-radio-group"
import styled from "styled-components"

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
