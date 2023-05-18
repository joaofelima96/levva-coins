import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components"

import { Router } from "./Router";

import { DefaultTheme } from "./styles/defaultTheme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
