import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import Box from "../Box";
import LinkMenu from "../LinkMenu";
import theme from "../../../common/theme";

const ContainerLinkMenu = styled(Box)`
  background: rgba(0, 0, 0, 0.3);
`;
storiesOf("Elements/LinkMenu", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <ContainerLinkMenu>
     <LinkMenu />
    </ContainerLinkMenu>
  </ThemeProvider>
));
