import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Expertise from "../Expertise";

storiesOf("Modules/Expertise", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <Expertise />
  </ThemeProvider>
));
