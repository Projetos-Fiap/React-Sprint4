import React from "react";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  text-align: center;
`;

const ErrorPageTitle = styled.h2`
  font-size: 2.5rem;
  color: #263243;
  margin-bottom: 0.5em;
`;

const ErrorPageText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1em; 
`;

function ErrorPage() {
  return (
    <div className="errorpage">
      <ErrorPageContainer>
        <ErrorPageTitle>Oh não!</ErrorPageTitle>
        <ErrorPageText>Não achamos o que você estava procurando.</ErrorPageText>
      </ErrorPageContainer> 
    </div>
  );
}

export default ErrorPage;