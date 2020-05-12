import React from "react";
import { GlobalStyles } from "./common/globalStyles";
import { ThemeProvider } from "styled-components";

import theme from "./common/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
