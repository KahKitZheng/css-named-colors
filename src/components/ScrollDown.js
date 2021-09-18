import React from "react";
import { replaceColor } from "../utils";

// Edited version of https://codepen.io/rightblog/pen/EagNMN/ by Yurij Rightblog.ru
const ScrollDown = ({ color }) => (
  <div className="mouse_scroll" style={{ color: replaceColor(color) }}>
    <div className="mouse">
      <div className="wheel"></div>
    </div>
    <div>
      <span className="m_scroll_arrows one"></span>
      <span className="m_scroll_arrows two"></span>
      <span className="m_scroll_arrows three"></span>
    </div>
  </div>
);

export default ScrollDown;
