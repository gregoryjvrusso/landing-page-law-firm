import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import Box from "../Box";
import Flex from "../Flex";
import Text from "../Text";

const Title = styled(Text)`
  font-weight: 600;
  color: ${theme("colors.texts.primary")};
  letter-spacing: 2px;
  font-size: 14px;
  margin: 0 0 .5em 0;
`;

const TextMenu = styled(Text)`
  color: ${theme("colors.texts.primary")};
  letter-spacing: 2px;
  margin: 0 0 .5em 0;
  font-size: 14px;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;

const InformationMenu = ({ icon, title, textPrimary, textSecondary }) => (
  <Flex m={2}>
    <Box mr={2}>
      <Image src={icon} />
    </Box>
    <Box>
      <Title>{title}</Title>
      <TextMenu>{textPrimary}</TextMenu>
      <TextMenu>{textSecondary}</TextMenu>
    </Box>
  </Flex>
);

export default InformationMenu;
