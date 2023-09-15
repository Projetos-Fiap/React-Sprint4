import React from "react";
import styled from "styled-components";

const BeneficiosPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
`;

const BeneficiosPageTitle = styled.h2`
  color: #263243;
  margin-bottom: 0.5em;
`;
const BeneficiosPageText = styled.p`
  margin-bottom: 1em;
`;


function BeneficiosPage() {
  return (
    <div className="beneficiospage">
      <BeneficiosPageContainer>
        <BeneficiosPageTitle>Benefícios</BeneficiosPageTitle>
        <BeneficiosPageText>Você sabia que pode trocar seu material reciclável por pontos, e trocar estes por benefícios?</BeneficiosPageText>
      </BeneficiosPageContainer>
    </div>
    
  );
}
export default BeneficiosPage;
