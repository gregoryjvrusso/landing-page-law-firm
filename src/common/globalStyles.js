import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  * {
    font-family: 'Arial', sans-serif;
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
`
