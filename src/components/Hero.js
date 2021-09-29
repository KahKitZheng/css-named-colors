import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../data.json";
import ColorValue from "./ColorValue";
import ScrollDown from "./ScrollDown";
import { replaceColor } from "../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  user-select: none;

  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
`;

const ColorName = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin: 0;
`;

const ColorValues = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.75rem;
  font-size: 18px;
`;

const Bullet = styled.span`
  margin: 0 0.75rem;
  opacity: 0.3;
`;

const Hero = () => {
  const [idx, setIndex] = useState(null);

  const notify = (color) =>
    toast(`${color} is copied! 👍`, {
      theme: "dark",
      position: "bottom-right",
      autoClose: 3000,
      draggable: false,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
      hideProgressBar: true,
    });

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
        textColor={replaceColor(data[idx].rgb)}
      >
        <ColorName>{data[idx].name}</ColorName>
        <ColorValues>
          <div onClick={() => notify(data[idx].hex)}>
            <ColorValue color={data[idx].hex} />
          </div>
          <Bullet>&#8226;</Bullet>
          <div onClick={() => notify(`rgb(${data[idx].rgb})`)}>
            <ColorValue color={`rgb(${data[idx].rgb})`} />
          </div>
        </ColorValues>

        <ToastContainer />
        <ScrollDown color={data[idx].rgb} />
      </StyledHero>
    )
  );
};

export default Hero;
