import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import Box from "../Box";
import LinkMenu from "../LinkMenu";

const ContainerSideBar = styled(Box)`
  width: ${(props) => (props.opened ? "100%" : "0")};
  background: rgba(0, 0, 0, 0.7);
  flex-direction: column;
  z-index: 100;
  top: 100%;
  position: absolute;
  overflow: hidden;
  transition: all 0.25s;
`;
const CloseContainer = styled.div`
  text-align: right;
  width: 100%;
`;

const Close = styled.div`
  padding: 10px;
  color: ${theme("colors.texts.white")};
  font-weight: 600;
`;

const SideBar = ({ opened, setOpen }) => (
  <ContainerSideBar opened={opened} display={["flex", "flex", "none"]}>
    <CloseContainer>
      <Close onClick={() => setOpen(!opened)}>X</Close>
    </CloseContainer>
    <LinkMenu />
  </ContainerSideBar>
);

export default SideBar;
