import React, { useState } from "react";
import Hero from "./Hero";
import Colors from "./Colors";
import GlobalStyle from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setDarkMode] = useState(stored === "true" ? true : false);

  function changeTheme() {
    setDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Hero />
      <Colors toggleTheme={changeTheme} />
    </ThemeProvider>
  );
};

export default App;
