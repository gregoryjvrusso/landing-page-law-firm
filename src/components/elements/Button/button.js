import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { fontSize, fontWeight, width } from "styled-system";

const Container = styled.button`
  padding: 10px;
  color: ${(props) => theme(`colors.texts.${props.color}`)};
  background-color: ${(props) =>
    theme(`colors.backgrounds.primary.${props.bg}`)};
  border: 0;
  border-radius: ${(props) => (props.radius ? "10px" : "0")};
  padding: 10px;
  letter-spacing: 1px;
  ${fontSize};
  ${fontWeight};
  ${width};
`;
const Button = ({ children, color, bg, radius, fs, fw, w }) => (
  <Container
    width={w}
    fontWeight={fw}
    fontSize={fs}
    radius={radius}
    color={color}
    bg={bg}
  >
    {children}
  </Container>
);

export default Button;
