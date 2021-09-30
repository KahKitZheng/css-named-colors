import React from "react";
import ColorList from "./ColorList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Colors = () => (
  <div>
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
    <ToastContainer />
  </div>
);

export default Colors;
