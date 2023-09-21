import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Switch from "./components/atoms/Switch/Switch"
import { Header } from "./components/molecules/Header/Header"
import { AddressProvider } from "./providers/AddressProvider"
import { CartProvider } from "./providers/CartProvider"
import { Routes } from "./routes"
import GlobalStyle from "./styles/global"
import { darkTheme } from "./styles/themes/darkTheme"
import { lightTheme } from "./styles/themes/lightTheme"

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <CartProvider>
        <AddressProvider>
          <BrowserRouter>
            <Header />
            <Routes />
          </BrowserRouter>
        </AddressProvider>
      </CartProvider>
      <Switch onChange={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
