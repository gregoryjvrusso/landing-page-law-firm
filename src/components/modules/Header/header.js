import React from "react";
import styled from "styled-components";
import HeaderMobile from "../HeaderMobile";
import HeaderDesktop from "../HeaderDesktop";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderMobile />
    <HeaderDesktop />
  </HeaderContainer>
);

export default Header;
