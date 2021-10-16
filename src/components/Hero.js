import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../colors.json";
import ColorValue from "./ColorValue";
import ScrollDown from "./ScrollDown";
import { calcTextColor } from "../utils";

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  cursor: pointer;

  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
`;

const ColorName = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin: 0;

  @media (min-width: 1440px) {
    font-size: 3.5rem;
  }
`;

const ColorValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  button:hover {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0.75rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.5rem;

    button {
      font-size: 1.25rem;
    }
  }
`;

const Bullet = styled.span`
  margin: 0 0.5rem;
  opacity: 0.3;

  @media (min-width: 1440px) {
    margin: 0 1rem;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Hero = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const [randomIndex, setRandomIndex] = useState(random(1, colors.length));

  return (
    randomIndex && (
      <StyledHero
        bgColor={colors[randomIndex].hex}
        textColor={calcTextColor(colors[randomIndex].rgb)}
        onClick={() => {
          setRandomIndex(random(1, colors.length));
        }}
      >
        <Wrapper>
          <ColorName>{colors[randomIndex].name}</ColorName>
          <ColorValues>
            <ColorValue color={colors[randomIndex].hex} />
            <Bullet>&#8226;</Bullet>
            <ColorValue color={`rgb(${colors[randomIndex].rgb})`} />
            <Bullet>&#8226;</Bullet>
            <ColorValue color={`hsl(${colors[randomIndex].hsl})`} />
          </ColorValues>
        </Wrapper>

        <ScrollDown color={colors[randomIndex].rgb} />
      </StyledHero>
    )
  );
};

export default Hero;
