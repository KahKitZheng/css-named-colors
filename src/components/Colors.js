import React, { useEffect } from "react";
import ColorList from "./ColorList";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createMasonry } from "../utils";

const Container = styled.div`
  @media (min-width: 2560px) {
    display: flex;
    justify-content: center;

    > :nth-child(odd) {
      margin: 0 4rem;
    }
  }
`;

const Colors = () => {
  useEffect(() => {
    let vw = window.innerWidth;
    window.addEventListener("resize", createMasonry(vw));
  });

  return (
    <div>
      <Container id="colors">
        <ColorList colorGroup="red" />
        <ColorList colorGroup="pink" />
        <ColorList colorGroup="orange" />
        <ColorList colorGroup="yellow" />
        <ColorList colorGroup="purple" />
        <ColorList colorGroup="green" />
        <ColorList colorGroup="blue" />
        <ColorList colorGroup="brown" />
        <ColorList colorGroup="white" />
        <ColorList colorGroup="gray" />
      </Container>

      <ToastContainer />
    </div>
  );
};

export default Colors;
