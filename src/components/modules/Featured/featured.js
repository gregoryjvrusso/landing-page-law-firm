import React from "react";
import styled from "styled-components";
import Flex from "../../elements/Flex";
import Button from "../../elements/Button";
import Text from "../../elements/Text";

const Container = styled(Flex)`
  align-items: center;
  justify-content: center;
  background-image: url('/image/featured.png');
  height: 450px;
  background-repeat: no-repeat;
  opacity: 0.9;
  width: 100%;
  max-width: 1280px;
  background-position: center;
  @media only screen and (max-width: 600px) {
    background-image: url("/image/featured-mobile.png");
  }
`;

const Featured = () => (
  <Flex width="100%" alignItems="center" justifyContent="center">
    <Container>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text
          as={"h1"}
          textAlign="center"
          letterSpacing={"2px"}
          color={"white"}
          mb={5}
          fontSize={["16px", "25px", "32px"]}
        >
          ADVOCACIA EMPRESARIAL E ACIDENTÁRIA
        </Text>
        <Button
          width={["90%", "70%", "50%"]}
          radius
          fontWeight={600}
          fontSize={["16px", "25px", "32px"]}
          color="black"
          bg="white"
        >
          ATENDIMENTO
        </Button>
      </Flex>
    </Container>
  </Flex>
);

export default Featured;
