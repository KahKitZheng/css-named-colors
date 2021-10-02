import React, { useEffect } from "react";
import ColorList from "./ColorList";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createMasonry } from "../utils";

const Container = styled.div`
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

const Colors = () => {
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

  return (
    <div>
      <Container id="colors">
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
      </Container>

      <ToastContainer />
    </div>
  );
};

export default Colors;
