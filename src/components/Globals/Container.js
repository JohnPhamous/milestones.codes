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
  height: 100vh;
  width: 100vw;

  padding: 5vh 0;
`;
