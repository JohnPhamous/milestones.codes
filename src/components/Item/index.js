import React from "react";
import styled from "styled-components";

const Item = ({ question, onClickHandler }) => (
  <ItemContainer onClick={onClickHandler}>
    {question.state ? <ToggleContainerFilled /> : <ToggleContainerEmpty />}
    <Question>
      <p>{question.question}</p>
    </Question>
  </ItemContainer>
);

const ItemContainer = styled.li`
  color: white;
  padding: 6px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleContainerFilled = styled.span`
  margin-right: 24px;
  border-radius: 50%;
  border: 1px solid white;
  background: white;
  height: 25px;
  width: 25px;
`;

const ToggleContainerEmpty = styled.span`
  margin-right: 24px;
  border-radius: 50%;
  border: 1px solid white;
  height: 25px;
  width: 25px;
`;

const Question = styled.span`
  /* padding-bottom: 24px; */
  /* border-bottom: 1px solid white; */
`;

export default Item;
