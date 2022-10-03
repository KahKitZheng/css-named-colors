import React from "react";
import styled from "styled-components";

const Icon = styled.i`
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  position: absolute;
  top: 4px;
  right: 4px;
`;

const DarkIcon = () => (
  <Icon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  </Icon>
);

export default DarkIcon;
