import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-logo">
          {/* Coloque aqui o seu logotipo ou texto do rodapé */}
          Rodapé da Minha Aplicação
        </div>
        <div className="footer-links">
          <ul className="footer-menu">
            <li className="footer-item">
              <a href="/about">Sobre</a>
            </li>
            <li className="footer-item">
              <a href="/contact">Contato</a>
            </li>
            {/* Adicione mais links conforme necessário */}
          </ul>
        </div>
        <div className="footer-social">
          {/* Adicione links para as redes sociais ou ícones aqui */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
