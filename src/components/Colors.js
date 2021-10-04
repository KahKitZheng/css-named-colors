import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ColorList from "./ColorList";
import ButtonTheme from "./ButtonTheme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createMasonry } from "../utils";

const Container = styled.div`
  position: relative;
`;

const StyledColors = styled.div`
  @media (min-width: 1500px) {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  @media (min-width: 2300px) {
    :nth-child(odd) {
      margin: 0 4rem;
    }
  }
`;

const Colors = ({ toggleTheme }) => {
  const [isDelayed, setDelayed] = useState(true);

  useEffect(() => {
    function checkViewport() {
      let vw = window.innerWidth;

      if (vw > 1440 && vw < 2300) {
        createMasonry(2);
      } else if (vw > 2300) {
        createMasonry(3);
      }
    }

    checkViewport();
    window.addEventListener("resize", checkViewport);
  });

  function delayColors() {
    setTimeout(() => {
      setDelayed(false);
    }, 500);

    return <div></div>;
  }

  return isDelayed === true ? (
    delayColors()
  ) : (
    <Container>
      <ButtonTheme toggleTheme={toggleTheme} />
      <StyledColors id="colors">
        <ColorList id="red" colorGroup="red" />
        <ColorList id="pink" colorGroup="pink" />
        <ColorList id="orange" colorGroup="orange" />
        <ColorList id="yellow" colorGroup="yellow" />
        <ColorList id="purple" colorGroup="purple" />
        <ColorList id="green" colorGroup="green" />
        <ColorList id="blue" colorGroup="blue" />
        <ColorList id="brown" colorGroup="brown" />
        <ColorList id="white" colorGroup="white" />
        <ColorList id="gray" colorGroup="gray" />
      </StyledColors>

      <ToastContainer />
    </Container>
  );
};

export default Colors;
