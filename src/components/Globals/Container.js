import React from "react";
import styled from "styled-components";

import BackgroundImage from "../../images/background.jpg";

const Container = ({ children }) => (
  <ContainerBackground>{children}</ContainerBackground>
);

export default Container;

const ContainerBackground = styled.div`
  background: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  color: white;
  font-size: 2em;
  line-height: 1.3;
`;
