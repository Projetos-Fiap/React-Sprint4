import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FaRecycle } from 'react-icons/fa';

const FooterContainer = styled.div`
  background-color: #263243;
  padding: 2rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  padding: 20px;
  color: #fff;
`;

const FooterSubscriptionHeading = styled.p`
  margin-bottom: 16px;
  font-size: 20px;
  color: white; 
`;

const FooterSubscriptionText = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
`;

const InputAreas = styled.div`
  display: flex;
  flex-direction: column; /* Changed to column for alignment */
  align-items: center;
`;

const FooterInput = styled.input`
  padding: 8px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 18px;
  margin-bottom: 16px;
  border: 1px solid #fff;
`;

const SubscriptionMessage = styled.div`
  color: ${({ isSubscribed }) => (isSubscribed ? '#17cf97' : 'red')};
  margin-top: 8px; /* Added margin-top to separate message from button */
`;

const FooterLinks = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: center;
`;

const FooterLinkWrapper = styled.div`
  display: flex;
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 200px;
  box-sizing: border-box;
`;

const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  color: #fff;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #17cf97;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.div`
  max-width: 800px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const FooterLogo = styled(Link)`
  color: #17cf97;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIconLink = styled(Link)`
  color: #fff;
  font-size: 24px;
  &:hover {
    color: #17cf97;
  }
`;

function Footer() {
  const [email, setEmail] = useState('');
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = () => {
    if (!email) {
      setSubscriptionMessage('Por favor, insira seu email.');
    } else {
      // Perform subscription logic here (e.g., API request)
      // On success, set the success message and reset the email field
      setSubscriptionMessage('Obrigado por inscrever-se!');
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubscriptionHeading>
          Cadastre-se na nossa newsletter para aprender mais sobre reciclagem!
        </FooterSubscriptionHeading>
        <FooterSubscriptionText>
          Você pode cancelar a qualquer momento.
        </FooterSubscriptionText>
        <InputAreas>
          <FooterInput
            name='email'
            type='email'
            placeholder='Seu Email'
            value={email}
            onChange={handleEmailChange}
          />
          <Button onClick={handleSubscription}>Cadastrar</Button>
        </InputAreas>
        <SubscriptionMessage isSubscribed={isSubscribed}>
          {subscriptionMessage}
        </SubscriptionMessage>
      </FooterSubscription>
      <FooterLinks>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Sobre nós</FooterLinkTitle>
            <FooterLink to='/sign-up'>Quem somos</FooterLink>
            <FooterLink to='/'>Nossa missão</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Fale conosco</FooterLinkTitle>
            <FooterLink to='/'>Contato</FooterLink>
            <FooterLink to='/'>Suporte</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
          <FooterLinkTitle>Aprenda</FooterLinkTitle>
            <FooterLink to='/'>Reportagens</FooterLink>
            <FooterLink to='/'>Artigos</FooterLink>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterLinks>
      <SocialMedia>
        <SocialMediaWrap>
          <FooterLogo to='/'>
            <FaRecycle className='navbar-icon' />
            TheGreenProject
          </FooterLogo>
          <WebsiteRights>TheGreenProject © 2023</WebsiteRights>
          <SocialIcons>
            <SocialIconLink to='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink to='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink to='/' target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink to='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
