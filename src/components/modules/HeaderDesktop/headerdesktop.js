import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import Flex from "../../elements/Flex";
import Box from "../../elements/Box";
import Image from "../../elements/Image";
import InformationMenu from "../../elements/InformationMenu";
import LinkMenu from "../../elements/LinkMenu";
import { logoColor, nameColor, telephone, marker } from "../../../public/img";

const Container = styled(Box)`
  background: ${theme("colors.backgrounds.primary.white")};
  align-items: center;
  padding: 0 15px;
  justify-content: space-between;
`;

const ContainerLinkMenu = styled(Box)`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
`;

const HeaderDesktop = () => (
  <React.Fragment>
    <Container display={["none", "none", "flex"]} p={2}>
      <Flex alignItems="center" m={1}>
        <Image src={logoColor} m={1} maxWidth={"80px"} height={"auto"} />
        <Image src={nameColor} m={1} height={"55px"} />
      </Flex>
      <Flex>
        <InformationMenu
          icon={telephone}
          title="Telefone"
          textPrimary="(11) 94747-0009"
          textSecondary="(11) 2092-3721"
        />
        <InformationMenu
          icon={marker}
          title="Endereço"
          textPrimary="Rua Francisco Marengo, 205"
          textSecondary="Tatuapé - São Paulo - SP"
        />
      </Flex>
    </Container>
    <ContainerLinkMenu display={["none", "none", "flex"]}>
      <LinkMenu />
    </ContainerLinkMenu>
  </React.Fragment>
);

export default HeaderDesktop;
