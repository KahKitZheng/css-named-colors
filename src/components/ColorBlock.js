import React from "react";
import styled from "styled-components";
import ColorValue from "./ColorValue";
import { toast } from "react-toastify";
import { replaceColor } from "../utils";

const StyledColorBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 11rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => replaceColor(props.textColor)};

  p {
    margin: 0 0 0.5rem;

    &:first-of-type {
      font-weight: 900;
    }
  }

  small {
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    height: 12rem;
  }
`;

const ColorBlock = ({ color }) => {
  const { name, hex, rgb, hsl } = color;

  const notify = (color) => {
    toast(`${color} copied! 👍`, {
      theme: "dark",
      position: "bottom-right",
      autoClose: 3000,
      draggable: false,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
      hideProgressBar: true,
    });
  };

  return (
    <StyledColorBlock bgColor={hex} textColor={rgb}>
      <p>{name}</p>
      <div onClick={() => notify(hex)}>
        <ColorValue color={hex} small={true} />
      </div>
      <div onClick={() => notify(`rgb(${rgb})`)}>
        <ColorValue color={`rgb(${rgb})`} small={true} />
      </div>
      <div onClick={() => notify(`hsl(${hsl})`)}>
        <ColorValue color={`hsl(${hsl})`} small={true} />
      </div>
    </StyledColorBlock>
  );
};

export default ColorBlock;
