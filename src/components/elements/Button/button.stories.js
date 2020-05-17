import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Button from "../Button";

storiesOf("Elements/Button", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <Button>Teste</Button>
  </ThemeProvider>
)).add("color", () => (
  <ThemeProvider theme={theme}>
    <Button bg="black" color="white">Teste</Button>
  </ThemeProvider>
)).add("radius", () => (
  <ThemeProvider theme={theme}>
    <Button radius fontSize={4} bg="black" color="white">Teste</Button>
  </ThemeProvider>
));

