import React from "react";
import styled from "styled-components";

const TweetButton = ({ count, numQuestions }) => {
  const message = `Today I scored a ${count}/${numQuestions} on milestones.codes! 🎉 Looking forward to seeing this number going up next time I check. 👨‍💻👩‍💻`;

  const encodedMessage = message.replace(" ", "%20");

  return (
    <TweetContainer>
      <a
        href={`https://twitter.com/intent/tweet?hashtags=milestones4code&text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet your results!{" "}
        <span role="img" aria-label="fire emoji">
          🔥
        </span>
      </a>
    </TweetContainer>
  );
};

export default TweetButton;

const TweetContainer = styled.div`
  margin-bottom: 36px;
  width: 100%;
  display: flex;

  a {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 700;
    text-decoration: none;
    background: white;
    border-radius: 36px;
    font-size: 0.5em;
    width: 100%;
    text-align: center;
    color: #c14325;
    padding: 12px;
    box-shadow: 0 4px 16px 0 rgba(22, 42, 90, 0.39);
  }
`;
