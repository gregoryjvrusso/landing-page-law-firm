import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import SideBar from "../SideBar";

storiesOf("Elements/SideBar", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <SideBar />
  </ThemeProvider>
));
