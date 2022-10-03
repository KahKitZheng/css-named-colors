import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBlock = styled.button`
  height: 1.75rem;
  width: 3.5rem;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 1.25rem;
    width: 2.5rem;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: ${({ isSmall }) => (isSmall ? "14px" : "18px")};
  line-height: 1.5;
  color: inherit;
  padding: 0;

  &:active {
    transform: scale(1.07);
  }

  @media (min-width: 768px) {
    font-size: ${({ isSmall }) => (isSmall ? "14px" : "20px")};
  }
`;

const ColorValue = ({ color, small, type }) => {
  const notify = (color) => {
    toast(`Copied ${color.toLowerCase()}! 👍`, {
      theme: "dark",
      position: "bottom-right",
      autoClose: 4000,
      draggable: false,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
      hideProgressBar: true,
    });
  };

  return (
    <CopyToClipboard text={color.toLowerCase()}>
      {type === "block" ? (
        <ColorBlock
          color={color}
          aria-label={color}
          onClick={(e) => {
            e.stopPropagation();
            notify(color);
          }}
        />
      ) : (
        <Button
          isSmall={small}
          color={color}
          onClick={(e) => {
            e.stopPropagation();
            notify(color);
          }}
        >
          {color}
        </Button>
      )}
    </CopyToClipboard>
  );
};

export default ColorValue;
