import React from "react";
import styled from "styled-components";
import BasicExample from "../components/Cards/Cards";

const AprendaPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
`;

const AprendaPageTitle = styled.h2`
  color: #263243;
  margin-bottom: 0.5em;
`;
const AprendaPageText = styled.p`
  margin-bottom: 1em;
`;


function AprendaPage() {
  return (
    <div className="aprendapage">
      <AprendaPageContainer>
        <AprendaPageTitle>Aprenda</AprendaPageTitle>
        <AprendaPageText>Veja dicas de como reciclar corretamente</AprendaPageText>  
        <BasicExample />
      </AprendaPageContainer>
    </div>
  );
}

export default AprendaPage;
