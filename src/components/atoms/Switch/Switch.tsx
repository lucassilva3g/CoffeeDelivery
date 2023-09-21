import React from "react"

import { StyledSwitch, StyledThumb } from "./Switch.style"

type SwitchProps = {
  onChange: () => void
}

const Switch: React.FC<SwitchProps> = ({ onChange }) => (
  <StyledSwitch onCheckedChange={onChange}>
    <StyledThumb />
  </StyledSwitch>
)

export default Switch
