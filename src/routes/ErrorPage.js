import React from "react";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  text-align: center;
`;

function ErrorPage() {
  return (
    <div className="errorpage">
      <ErrorPageContainer>
        <h2>Oh não!</h2>
        <p>Não achamos o que você estava procurando.</p>
      </ErrorPageContainer> 
    </div>
  );
}

export default ErrorPage;