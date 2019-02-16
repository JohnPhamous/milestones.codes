import React from "react";
import { AnimateOnChange } from "@nearform/react-animation";
import styled from "styled-components";

const Counter = ({ count }) => (
  <>
    <CounterWrapper>
      <p>
        <AnimateOnChange>
          <span>{count}</span>
        </AnimateOnChange>{" "}
        / 50
      </p>
    </CounterWrapper>

    <ProgressBar count={count} />
  </>
);

export default Counter;

const CounterWrapper = styled.footer`
  position: absolute;
  left: -24px;
  bottom: 0;
  width: 100vw;
  text-align: right;
  z-index: 5;
  color: #ffffffb3;
  font-size: 0.7em;
`;

const ProgressBar = styled.div`
  position: absolute;
  width: ${props => `${(props.count / 50) * 100}%`};
  background: white;
  bottom: 0;
  left: 0;
  height: 5px;
  transition: width 0.5s ease-in-out;
`;
