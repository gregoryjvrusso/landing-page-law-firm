import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { height, width } from "styled-system";
import Flex from "../../elements/Flex";
import Box from "../../elements/Box";
import Text from "../../elements/Text";
import image from "../../../public/img/logo.png";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
`;
const Container = styled(Flex)`
  background-color: ${theme("colors.backgrounds.primary.blue")};
`;

const Image = styled.img`
  ${height}
  ${width}
`;

const Header = () => (
  <HeaderContainer>
    <Container justifyContent="space-between" alignItems="center" p={2}>
      <Box>
        <Image
          src={image}
          width={["130px", "180px", "260px"]}
          height={["120px", "170px", "250px"]}
        />
      </Box>
      <Box>
        <Text>Teste</Text>
      </Box>
    </Container>
  </HeaderContainer>
);

export default Header;
