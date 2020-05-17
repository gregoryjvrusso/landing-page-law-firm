import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../common/theme";

import Header from "./Header";
import Featured from "./Featured";
import Purpose from "./Purpose";

storiesOf("Site/Site", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Featured />
    <Purpose />
  </ThemeProvider>
));
