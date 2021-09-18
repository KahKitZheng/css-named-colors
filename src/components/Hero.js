import React, { useState, useEffect } from "react";
import data from "../data.json";
import ColorValue from "./ColorValue";
import ScrollDown from "./ScrollDown";
import { replaceColor } from "../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const [number, setNumber] = useState(null);

  function randomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min) + min);
    return setNumber(number);
  }

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

  useEffect(() => {
    randomNumber(1, data.length);
  }, []);

  return (
    number && (
      <div
        className="hero"
        style={{
          backgroundColor: data[number].hex,
          color: replaceColor(data[number].rgb),
        }}
      >
        <p className="hero__name">{data[number].name}</p>
        <div className="hero__values">
          <div onClick={() => notify(data[number].hex)}>
            <ColorValue color={data[number].hex} />
          </div>
          <span className="bullet">&#8226;</span>
          <div onClick={() => notify(`rgb(${data[number].rgb})`)}>
            <ColorValue color={`rgb(${data[number].rgb})`} />
          </div>
        </div>

        <ToastContainer />
        <ScrollDown color={data[number].rgb} />
      </div>
    )
  );
};

export default Hero;
