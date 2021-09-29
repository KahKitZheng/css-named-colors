import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  color: white;
  text-align: center;
  background-color: black;

  p {
    margin: 0;
    padding: 1rem 0;
  }

  a {
    color: orange;
  }
`;

const Footer = () => (
  <StyledFooter>
    <p>
      Made by{" "}
      <a href="https://github.com/KahKitZheng" target="_blank">
        Kah Kit Zheng
      </a>
    </p>
  </StyledFooter>
);

export default Footer;
