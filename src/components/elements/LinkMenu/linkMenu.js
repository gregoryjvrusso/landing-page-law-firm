import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { padding } from "styled-system";
import Flex from "../Flex"

const Container = styled(Flex) `
  ${padding}
`
const Link = styled.a`
  padding: 10px 10px;
  color: ${theme("colors.backgrounds.primary.white")};
  text-decoration: none;
  letter-spacing: 1px;

  :hover{
    background: rgba(0, 0, 0, 0.5);
  }
`;

const LinkMenu = () => (
  <Container p={2} flexDirection={["column", "column", "row"]}>
    <Link href="#">Sobre Nós</Link>
    <Link href="#">Serviços</Link>
    <Link href="#">Especialidades</Link>
    <Link href="#">Contato</Link>
  </Container>
);

export default LinkMenu;
