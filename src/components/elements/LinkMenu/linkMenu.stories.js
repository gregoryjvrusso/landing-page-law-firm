import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import LinkMenu from "../LinkMenu";
import theme from "../../../common/theme";

storiesOf("Elements/LinkMenu", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <LinkMenu />
  </ThemeProvider>
));
