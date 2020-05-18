import React from "react";
import styled from "styled-components";
import Flex from "../../elements/Flex";
import Box from "../../elements/Box";
import Image from "../../elements/Image";
import Text from "../../elements/Text";
import avatar from "../../../public/img/avatar.png";

const Container = styled(Box)``;

const AboutUs = () => (
  <Container>
    <Box>
      <Text
        textAlign="center"
        letterSpacing={"2px"}
        fontSize={["22px", "25px", "32px"]}
        as={"h2"}
      >
        HENRIQUE FARABOTTI
      </Text>
    </Box>
    <Flex
      flexDirection={["column", "column", "row"]}
      alignItems={"center"}
      justifyContent={["center", "center", "space-between"]}
      pl={[0, 0, 5]}
      pr={[0, 0, 5]}
    >
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Image maxWidth={"250px"} src={avatar} />
      </Flex>
      <Box width={["100%", "100%", "60%"]}>
        <Text
          textAlign="justify"
          letterSpacing={"2px"}
          fontSize={["14px", "16px", "18px"]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          cursus vel magna et placerat. Vestibulum eget venenatis ante. Sed
          turpis eros, iaculis ac nisi in, posuere condimentum ipsum. Fusce
          blandit dolor enim, a laoreet dolor ullamcorper et. Curabitur at
          pretium risus. Quisque tempor tortor vel eros tincidunt, nec ornare
          eros porttitor.
        </Text>
        <Text
          textAlign="justify"
          letterSpacing={"2px"}
          fontSize={["14px", "16px", "18px"]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          cursus vel magna et placerat. Vestibulum eget venenatis ante. Sed
          turpis eros, iaculis ac nisi in, posuere condimentum ipsum. Fusce
          blandit dolor enim, a laoreet dolor ullamcorper et. Curabitur at
          pretium risus. Quisque tempor tortor vel eros tincidunt, nec ornare
          eros porttitor.
        </Text>
        <Text
          letterSpacing={"2px"}
          fontSize={["14px", "16px", "18px"]}
          fontWeight={600}
        >
          OAB: 200049 / SP
        </Text>
      </Box>
    </Flex>
  </Container>
);

export default AboutUs;
