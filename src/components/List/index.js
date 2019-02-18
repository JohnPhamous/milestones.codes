import React, { Component } from "react";
import Item from "../Item";
import styled from "styled-components";
import Counter from "../Globals/Counter";
import Confetti from "react-dom-confetti";
import TweetButton from "../TweetButton";

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
    const { questions, count } = this.state;

    return (
      <div>
        <ListContainer>
          <Counter count={count} numQuestions={questions.length} />
          {questions.map((question, index) => (
            <>
              <Item
                key={index}
                question={question}
                onClickHandler={() => this.toggle(index)}
              />
              <Confetti active={question.state} />
            </>
          ))}
        </ListContainer>
        <TweetButton count={count} numQuestions={questions.length} />
      </div>
    );
  }
}

const ListContainer = styled.ul`
  height: 100%;
  list-style: none;
  padding: 0;
`;
