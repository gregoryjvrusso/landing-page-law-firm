import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { typography, width } from "styled-system";

const Container = styled.button`
  padding: 10px;
  color: ${(props) => theme(`colors.texts.${props.color}`)};
  background-color: ${(props) =>
    theme(`colors.backgrounds.primary.${props.bg}`)};
  border: 0;
  border-radius: ${(props) => (props.radius ? "10px" : "0")};
  padding: 10px;
  letter-spacing: 1px;
  ${typography};
  ${width};
`;
const Button = ({ children, color, bg, radius, ...props }) => (
  <Container radius={radius} color={color} bg={bg} {...props}>
    {children}
  </Container>
);

export default Button;
