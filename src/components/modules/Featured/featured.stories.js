import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Featured from "../Featured";

storiesOf("Modules/Featured", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <Featured />
  </ThemeProvider>
));
