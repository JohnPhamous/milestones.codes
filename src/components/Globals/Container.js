import React from "react";
import styled from "styled-components";

import BackgroundImage from "../../images/background.jpg";

const Container = ({ children }) => (
  <ContainerBackground>{children}</ContainerBackground>
);

export default Container;

const ContainerBackground = styled.div`
  background: url(${BackgroundImage});
  background-repeat: none;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  color: white;
  font-size: 2em;
  line-height: 1.3;
`;
