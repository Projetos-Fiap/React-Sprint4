import React from "react";
import styled from 'styled-components';

const MapPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  iframe {
    width: 800px;
    height: 600px;
    border: none;
  }
  
`;

const MapPageTitle = styled.h2`
  font-size: 2.5rem;
  color: #263243;
  margin-bottom: 0.5em;
`;

const MapPageText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1em;
`;

function MapPage() {
  return (
    <div className="mappage">
      <MapPageContainer>
        <MapPageTitle>Pontos de coleta</MapPageTitle>
        <MapPageText>Encontre o ponto de reciclagem mais próximo de você</MapPageText>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/d/embed?mid=1H2xZ0GS-A_vT9nZw9JhPo-ZaCzU&ehbc=2E312F"
          width="640" height="480">
        </iframe>
      </MapPageContainer>  
    </div>
  );
}

export default MapPage;
