import React, { useState, useEffect } from "react";
import styled, { withTheme, keyframes } from "styled-components";
import { LightIcon, DarkIcon } from "../icons";

const slideOff = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(32px);
  }
`;

const slideOn = keyframes`
  0% {
    transform: translateX(32px);
  }
  100% {
    transform: translateX(0);
  }
`;

const ToggleContainer = styled.div`
  width: max-content;
  margin: 2rem auto 0;
`;

const Toggle = styled.input`
  visibility: hidden;
  position: absolute;
  top: -999px;
  left: -999px;
  user-select: none;

  :checked + label div {
    animation: ${slideOn} 0.3s ease-in-out forwards;
  }
`;

const Label = styled.label`
  position: relative;
  background-color: ${({ theme }) =>
    theme.colors.name === "dark" ? "#000" : "#fff"};
  color: ${({ theme }) => (theme.colors.name === "dark" ? "#fff" : "#000")};
  border: 2px solid
    ${({ theme }) => (theme.colors.name === "dark" ? "#fff" : "#000")};
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  margin: 0;
  width: 64px;
  height: 32px;
  transition: all 0.3s ease-out;
`;

const Ball = styled.div`
  background: ${({ theme }) =>
    theme.colors.name === "dark" ? "#fff" : "#000"};
  height: 22px;
  width: 22px;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  align-items: center;
  justify-content: center;
  animation: ${slideOff} 0.3s ease-in-out forwards;
  z-index: 1;
`;

const Button = ({ toggleTheme, theme }) => {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    theme.colors.name === "dark" ? setChecked(true) : setChecked(false);
  }, [theme.colors.name]);

  function handleClick() {
    setChecked(!isChecked);
    toggleTheme();
  }

  return (
    <ToggleContainer onClick={() => handleClick()}>
      <Toggle
        type="checkbox"
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
      />
      <Label theme={theme}>
        <LightIcon />
        <Ball theme={theme} />
        <DarkIcon />
      </Label>
    </ToggleContainer>
  );
};

export default withTheme(Button);
