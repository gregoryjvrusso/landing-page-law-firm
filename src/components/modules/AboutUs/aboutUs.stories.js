import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import AboutUs from "../AboutUs";

storiesOf("Modules/AboutUs", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <AboutUs />
  </ThemeProvider>
));
