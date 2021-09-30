import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }

  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
