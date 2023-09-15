import React from "react";
import styled from "styled-components";

const SobrePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
`;

const SobrePageTitle = styled.h2`
  color: #263243;
  margin-bottom: 0.5em;
`;
const SobrePageText = styled.p`
  margin-bottom: 1em;
`;

function SobrePage() {
  return (
    <div className="sobrepage">
      <SobrePageContainer>
        <SobrePageTitle>Sobre nós</SobrePageTitle>
        <SobrePageText>Conheça mais sobre o nosso projeto</SobrePageText>
      </SobrePageContainer>  
    </div>
  );
}

export default SobrePage;
