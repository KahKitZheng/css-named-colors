import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: ${({ isSmall }) => (isSmall ? "14px" : "18px")};
  line-height: 1.5;
  color: inherit;
  padding: 0;

  &:active {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    font-size: ${({ isSmall }) => (isSmall ? "14px" : "20px")};
  }
`;

const ColorValue = ({ color, small }) => (
  <CopyToClipboard text={color}>
    <Button isSmall={small}>{color}</Button>
  </CopyToClipboard>
);

export default ColorValue;
