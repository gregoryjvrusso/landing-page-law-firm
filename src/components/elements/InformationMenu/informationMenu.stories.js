import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import InformationMenu from "../InformationMenu";
import telephone from "../../../public/img/telephone.svg";
import marker from "../../../public/img/marker.svg";
import theme from "../../../common/theme";

storiesOf("Elements/InformationMenu", module)
  .add("localization", () => (
    <ThemeProvider theme={theme}>
      <InformationMenu
        icon={marker}
        title="Endereço"
        textPrimary="Rua Francisco Marengo, 205"
        textSecondary="Tatuapé - São Paulo - SP"
      />
    </ThemeProvider>
  ))
  .add("telephone", () => (
    <ThemeProvider theme={theme}>
      <InformationMenu
        icon={telephone}
        title="Telefone"
        textPrimary="(11) 94747-0009"
        textSecondary="(11) 2092-3721"
      />
    </ThemeProvider>
  ));
