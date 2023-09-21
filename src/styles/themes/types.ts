import { media } from "../breakpoints/media"

export interface ThemeColors {
  baseCard: string
  baseInput: string
  baseButton: string
  baseHover: string
  baseLabel: string
  baseText: string
  baseSubtitle: string
  baseTitle: string
  background: string
  white: string
  yellowDark: string
  yellow: string
  yellowLight: string
  purpleDark: string
  purple: string
  purpleLight: string
}

export interface ThemeProps {
  colors: ThemeColors
  media: typeof media
}
