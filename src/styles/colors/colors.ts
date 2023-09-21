import { ThemeColors } from "../themes/types"

export const defaultColors = {
  white: "#fff",
  background: "#fafafa",
  baseCard: "#f3f2f2",
  baseInput: "#ededed",
  baseButton: "#e6e5e5",
  baseHover: "#d7d5d5",
  baseLabel: "#8d8686",
  baseText: "#574f4d",
  baseSubtitle: "#403937",
  baseTitle: "#272221",
  yellowDark: "#c47f17",
  yellow: "#dbac2c",
  yellowLight: "#f1e9c9",
  purpleDark: "#4b2995",
  purple: "#8047f8",
  purpleLight: "#ebe5f9",
} as ThemeColors

export const lightColors = {
  ...defaultColors,
} as ThemeColors

export const darkColors = {
  ...defaultColors,
  white: "#fafafa",
  background: "#121212",
  baseCard: "#1e1e1e",
  baseInput: "#2b2b2b",
  baseButton: "#3a3a3a",
  baseHover: "#4a4a4a",
  baseLabel: "#bdbdbd",
  baseText: "#e1e1e1",
  baseSubtitle: "#c7c7c7",
  baseTitle: "#f3f3f3",
  yellowDark: "#7a6200",
  yellow: "#9e8000",
  yellowLight: "#a28b46",
  purpleDark: "#1e0a33",
  purple: "#442eb9",
  purpleLight: "#4e44b3",
} as ThemeColors
