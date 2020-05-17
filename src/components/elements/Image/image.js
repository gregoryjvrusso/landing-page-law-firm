import React from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";

const Img = styled.img`
  ${layout}
  ${space}
`;

const Image = ({ alt, src, ...props }) => (
  <Img src={src} alt={alt} {...props} />
);

export default Image;
