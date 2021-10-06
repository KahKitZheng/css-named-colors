import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../data.json";
import ColorValue from "./ColorValue";
import ScrollDown from "./ScrollDown";
import { calcTextColor } from "../utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;

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

const Hero = () => {
  const [idx, setIndex] = useState(null);

  function randomIndex(min, max) {
    let idx = Math.floor(Math.random() * (max - min) + min);
    return setIndex(idx);
  }

  useEffect(() => {
    randomIndex(1, data.length);
  }, []);

  return (
    idx && (
      <StyledHero
        bgColor={data[idx].hex}
        textColor={calcTextColor(data[idx].rgb)}
      >
        <ColorName>{data[idx].name}</ColorName>
        <ColorValues>
          <ColorValue color={data[idx].hex} />
          <Bullet>&#8226;</Bullet>
          <ColorValue color={`rgb(${data[idx].rgb})`} />
          <Bullet>&#8226;</Bullet>
          <ColorValue color={`hsl(${data[idx].hsl})`} />
        </ColorValues>

        <ToastContainer />
        <ScrollDown color={data[idx].rgb} />
      </StyledHero>
    )
  );
};

export default Hero;
