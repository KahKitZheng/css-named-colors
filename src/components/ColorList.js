import React from "react";
import styled from "styled-components";
import data from "../data.json";
import ColorBlock from "./ColorBlock";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
`;

const ColorList = () => {
  return (
    <ColorGrid>
      {data.map((color) => (
        <ColorBlock key={color.name} color={color} />
      ))}
      <ToastContainer />
    </ColorGrid>
  );
};

export default ColorList;
