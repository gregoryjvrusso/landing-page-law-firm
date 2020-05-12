import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Header from "../Header";

storiesOf("Modules/Header", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
));
