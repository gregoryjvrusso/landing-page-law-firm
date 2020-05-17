import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Purpose from "../Purpose";

storiesOf("Modules/Purpose", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <Purpose />
  </ThemeProvider>
));
