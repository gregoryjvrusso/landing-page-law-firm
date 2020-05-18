import React from "react";
import { GlobalStyles } from "./common/globalStyles";
import { ThemeProvider } from "styled-components";

import Header from "./components/modules/Header"
import Featured from "./components/modules/Featured"
import Purpose from "./components/modules/Purpose"
import AboutUs from "./components/modules/AboutUs"

import theme from "./common/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <Header />
        <Featured />
        <Purpose />
        <AboutUs />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
