import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: ${({ isSmall }) => (isSmall ? "14px" : "20px")};
  line-height: 1.5;
  color: inherit;

  &:active {
    text-decoration: underline;
    transform: scale(1.05);
  }
`;

const ColorValue = ({ color, small }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <CopyToClipboard text={color} onCopy={() => setIsCopied(true)}>
      <Button isSmall={small}>{color}</Button>
    </CopyToClipboard>
  );
};

export default ColorValue;
