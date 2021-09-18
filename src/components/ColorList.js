import React from "react";
import data from "../data.json";
import ColorValue from "./ColorValue";
import { replaceColor } from "../utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ColorList = () => {
  const notify = (color) => {
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
  };

  return (
    <div className="grid-colors">
      {data.map((color, index) => (
        <div
          key={color.name + index}
          className="block"
          style={{
            backgroundColor: color.hex,
            color: replaceColor(color.rgb),
          }}
        >
          <p className="block__name">{color.name}</p>
          <div onClick={() => notify(color.hex)}>
            <ColorValue color={color.hex} small={true} />
          </div>
          <div onClick={() => notify(`rgb(${color.rgb})`)}>
            <ColorValue color={`rgb(${color.rgb})`} small={true} />
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default ColorList;
