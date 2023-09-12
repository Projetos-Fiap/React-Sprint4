import React from "react";
import { Button } from '../components/Button/Button'; 
import styled from "styled-components";

const ContactPageForm = styled.form`
  display: block;
  background-color: #ffffff;
  box-shadow: 2px 2px 4px 3px #ddd;
  margin: 0 auto;
  padding: 50px;
  text-align: center;
  max-width: 750px;
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  color: #263243;
  margin-bottom: 0.5em;
`;

const FormText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1em;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

function ContactPage() {
  return (
    <div className="contactpage">    
      <ContactPageForm>
          <FormTitle>Entre em contato</FormTitle>
          <FormText>Dúvidas, críticas ou sugestões? Escreva para nós!</FormText>
          <FormInput type="text" name="name" placeholder="Nome" />
          <FormInput type="email" name="email" placeholder="Email" />
          <FormTextarea name="message" cols="30" rows="10" placeholder="Escreva aqui"/>
          <Button>Enviar</Button>
      </ContactPageForm>
    </div>  
  );
}

export default ContactPage;
