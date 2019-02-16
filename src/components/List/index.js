import React, { Component } from "react";
import Item from "../Item";
import styled from "styled-components";

export default class List extends Component {
  state = {
    questions: [],
    count: 0
  };

  componentDidMount() {
    let newState = this.props.questions.map(question => {
      const newItem = { ...question, state: false };
      return newItem;
    });
    this.setState({ questions: newState });
  }

  toggle = index => {
    console.log(index);
    let newState = this.state.questions;
    let newCount = this.state.count;

    if (newState[index].state === true) {
      newCount--;
      newState[index].state = false;
    } else {
      newCount++;
      newState[index].state = true;
    }
    this.setState({ questions: newState, count: newCount });
  };

  render() {
    const { questions } = this.state;

    return (
      <ListContainer>
        <p>{this.state.count}</p>
        {questions.map((question, index) => (
          <Item
            key={index}
            question={question}
            onClickHandler={() => this.toggle(index)}
          />
        ))}
      </ListContainer>
    );
  }
}

const ListContainer = styled.ul`
  height: 100%;
  list-style: none;
  padding: 0;
`;
