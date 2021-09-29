import React from "react";
import styled, { keyframes } from "styled-components";
import { replaceColor } from "../utils";

const ScrollAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const MouseScroll = styled.div`
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 100px;
  margin-top: 125px;
  position: absolute;
  top: 65%;
`;

const ScrollArrows = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  margin: 0 0 3px 7px;
  margin-top: ${(props) => `${props.mt}px`};
  animation: ${ScrollAnimation} 1s infinite;
  animation-delay: ${(props) => `${props.delay}s`};
  animation-direction: alternate;
`;

const Mouse = styled.div`
  height: 42px;
  width: 24px;
  border-radius: 14px;
  transform: none;
  border: 2px solid currentColor;
  top: 170px;
`;

const Wheel = styled.div`
  display: block;
  margin: 8px auto;
  background: currentColor;
  position: relative;
  height: 4px;
  width: 4px;
  border: 2px solid currentColor;
  border-radius: 8px;
`;

// Edited version of https://codepen.io/rightblog/pen/EagNMN/ by Yurij Rightblog.ru
const ScrollDown = ({ color }) => (
  <MouseScroll style={{ color: replaceColor(color) }}>
    <Mouse>
      <Wheel />
    </Mouse>
    <div>
      <ScrollArrows delay={0.2} mt={3}></ScrollArrows>
      <ScrollArrows delay={0.4} mt={-6}></ScrollArrows>
      <ScrollArrows delay={0.6} mt={-6}></ScrollArrows>
    </div>
  </MouseScroll>
);

export default ScrollDown;
