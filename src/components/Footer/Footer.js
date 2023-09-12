import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

// Importando ícones das mídias sociais
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'; 

// Importando logo
import { FaRecycle } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Cadastre-se na nossa newsletter para aprender mais sobre reciclagem!
        </p>
        <p className='footer-subscription-text'>
          Você pode cancelar a qualquer momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu Email'
            />
            <Button onClick={() => alert('Obrigado por inscrever-se!')}>
              Cadastrar
            </Button>
    
          </form>

        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre nós</h2>
            <Link to='/sign-up'>Quem somos</Link>
            <Link to='/'>Nossa missão</Link>
          </div>

          <div class='footer-link-items'>
            <h2>Fale conosco</h2>
            <Link to='/'>Contato</Link>
            <Link to='/'>Suporte</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Aprenda</h2>
            <Link to='/'>Reportagens</Link>
            <Link to='/'>Artigos</Link>
          </div>

        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <FaRecycle className="navbar-icon" />
              ReciclaSP
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>ReciclaSP © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook /> {/* Use o ícone do Facebook do React Icons */}
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram /> {/* Use o ícone do Instagram do React Icons */}
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube /> {/* Use o ícone do Youtube do React Icons */}
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter /> {/* Use o ícone do Twitter do React Icons */}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;