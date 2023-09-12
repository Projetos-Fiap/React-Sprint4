import React from "react";
import { Button } from '../components/Button/Button'; 

function ContactPage() {
  return (
    <div className="contactpage">    
      <form>
          <h2>Entre em contato</h2>
          <p>Dúvidas, críticas ou sugestões? Escreva para nós!</p>
          <br />
          <input type="text" name="name" id="" placeholder="Nome" />
          <input type="email" name="email" id="" placeholder="Email" />
          <textarea name="message" id="" cols="30" rows="10" placeholder="Escreva aqui"/>
          <Button>Enviar</Button>
      </form>
    </div>  
  );
}

export default ContactPage;
