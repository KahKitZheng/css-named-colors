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

const Bullet = styled.span`
  margin: 0 0.5rem;
  opacity: 0.3;
  color: white;
`;

const Footer = () => (
  <StyledFooter>
    <p>
      Made by{" "}
      <a href="https://github.com/KahKitZheng" target="_blank" rel="noreferrer">
        Kah Kit Zheng
      </a>
      <Bullet>&#8226;</Bullet>
      <a
        href="https://github.com/KahKitZheng/css-named-colors"
        target="_blank"
        rel="noreferrer"
      >
        Github Repo
      </a>
    </p>
  </StyledFooter>
);

export default Footer;
