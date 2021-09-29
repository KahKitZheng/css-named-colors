import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GlobalStyle from "./styles/global";
// import "./styles/App.scss";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
