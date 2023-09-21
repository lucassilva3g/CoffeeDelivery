import React from "react"

import { StyledButtonContainer } from "./Button.styles"
import { ButtonProps, ButtonVariant } from "./types"

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  variant = ButtonVariant.Primary,
  loadingMessage = "Carregando...",
  icon,
  ...rest
}) => (
  <StyledButtonContainer
    type="button"
    variant={variant}
    disabled={loading}
    {...rest}
  >
    {icon} {/* Render the icon */}
    {loading ? loadingMessage : children}
  </StyledButtonContainer>
)

export { Button }
