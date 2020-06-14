import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { height, maxWidth, display } from "styled-system";
import Flex from "../../elements/Flex";
import SideBar from "../../elements/SideBar";

const ContainerHeaderMobile = styled(Flex)`
  flex-direction: column;
  ${display};
`;

const Container = styled(Flex)`
  background-color: ${theme("colors.backgrounds.primary.white")};
  justify-content: start;
  align-items: center;
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
  border-bottom: 1px solid ${theme("colors.backgrounds.primary.black")};
  margin: 10% auto;
`;

const HeaderMobile = () => {
  const [opened, setOpen] = useState(false);
  return (
    <ContainerHeaderMobile display={["flex", "flex", "none"]}>
      <Container p={2}>
        <Sandwich onClick={() => setOpen(!opened)}>
          <Line />
          <Line />
          <Line />
        </Sandwich>
        <Flex justifyContent="center" width="100%">
          <Flex alignItems="center" m={1}>
            <Image
              src="/image/logo-color.png"
              maxWidth={["50px", "50px"]}
              height={"auto"}
            />
          </Flex>
          <Flex alignItems="center" m={1}>
            <Image
              src="/image/logo-name-color.png"
              maxWidth={["140px", "140px"]}
              height={"30px"}
            />
          </Flex>
        </Flex>
      </Container>
      <SideBar setOpen={setOpen} opened={opened} />
    </ContainerHeaderMobile>
  );
};

export default HeaderMobile;
