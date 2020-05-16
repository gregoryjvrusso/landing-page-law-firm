import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { height, maxWidth } from "styled-system";
import Flex from "../../elements/Flex";
import Box from "../../elements/Box";
import SideBar from "../../elements/SideBar";
import logo from "../../../public/img/logo-logo-color.png";
import name from "../../../public/img/logo-name-color.png";

const Container = styled(Box)`
  background-color: ${theme("colors.backgrounds.primary.snow")};
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid ${theme("colors.backgrounds.primary.blue")};
`;

const Image = styled.img`
  ${height}
  ${maxWidth}
`;

const Sandwich = styled.div`
  width: 30px;
  display: block;
  padding: 3px 0px;
`;

const Line = styled.div`
  display: block;
  width: 50%;
  border-bottom: 1px solid ${theme("colors.backgrounds.primary.blue")};
  margin: 10% auto;
`;

const HeaderMobile = () => {
  const [opened, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Container display={["flex", "flex", "none"]} p={2}>
        <Sandwich onClick={() => setOpen(!opened)}>
          <Line />
          <Line />
          <Line />
        </Sandwich>
        <Flex justifyContent="center" width="100%">
          <Flex alignItems="center" m={1}>
            <Image src={logo} maxWidth={["50px", "50px"]} height={"auto"} />
          </Flex>
          <Flex alignItems="center" m={1}>
            <Image src={name} maxWidth={["140px", "140px"]} height={"30px"} />
          </Flex>
        </Flex>
      </Container>
      <SideBar
        display={["flex", "flex", "none"]}
        setOpen={setOpen}
        opened={opened}
      />
    </React.Fragment>
  );
};

export default HeaderMobile;
