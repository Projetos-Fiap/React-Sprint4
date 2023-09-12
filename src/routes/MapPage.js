import React from "react";

function MapPage() {
  return (
    <div className="mappage">
      <div className="container">
        <h2 className="title">Pontos de coleta</h2>
        <p className="title">Encontre o ponto de reciclagem mais próximo de você</p>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/d/embed?mid=1H2xZ0GS-A_vT9nZw9JhPo-ZaCzU&ehbc=2E312F"
          width="640" height="480">
        </iframe>
      </div>  
    </div>
  );
}

export default MapPage;
