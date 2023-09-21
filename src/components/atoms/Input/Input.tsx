import { ChangeEvent } from "react"

import { StyledInputContainer } from "./Input.style"
import { InputProps } from "./types"

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  ...rest
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <StyledInputContainer
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="custom-input"
      {...rest}
    />
  )
}

export { Input }
