import React from "react";
import styled from "styled-components";
import Flex from "../../elements/Flex";
import Box from "../../elements/Box";
import Image from "../../elements/Image";
import avatar from "../../../public/img/avatar.png";

const Container = styled(Flex)``;

const AboutUs = () => (
  <Container>
    <Box>
      <Image src={avatar} />
    </Box>
  </Container>
);

export default AboutUs;
