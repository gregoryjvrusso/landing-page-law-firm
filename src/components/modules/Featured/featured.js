import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import Flex from "../../elements/Flex";
import Button from "../../elements/Button";
import { fontSize, margin } from "styled-system";
import featured from "../../../public/img/featured.png";
import featuredMobile from "../../../public/img/featured-mobile.png";

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  background-image: url(${featured});
  height: 450px;
  background-repeat: no-repeat;
  opacity: 0.9;
  width: 100%;
  background-position: center;
  @media only screen and (max-width: 600px) {
    background-image: url(${featuredMobile});
  }
`;

const Title = styled.h1`
  color: ${theme("colors.backgrounds.primary.white")};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  ${margin};
  ${fontSize};
`;

const Featured = () => (
  <Container>
    <Flex flexDirection="column" justify-content="center" alignItems="center">
      <Title mb={5} fontSize={["16px", "25px", "32px"]}>
        Advocacia Empresarial e Acidentária
      </Title>
      <Button
        w={["90%", "70%", "50%"]}
        radius
        fw={600}
        fs={["16px", "25px", "32px"]}
        color="black"
        bg="white"
      >
        ATENDIMENTO
      </Button>
    </Flex>
  </Container>
);

export default Featured;
