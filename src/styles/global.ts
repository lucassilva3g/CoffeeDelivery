import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Roboto:ital,wght@1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.baseText};
    -webkit-font-smooth: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
  }

  body, input, button, p  {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button{
    cursor: pointer;
  }

    /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`
