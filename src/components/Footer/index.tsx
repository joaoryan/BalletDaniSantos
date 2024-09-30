import React from 'react';
import styled from 'styled-components';

// Estilizando o container principal do footer
const FooterContainer = styled.footer`
  background-color: #F9C9D4; 
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

// Estilizando a seção de endereço e contato
const InfoSection = styled.div`
  max-width: 350px;
  margin-bottom: 10px;

  h3 {
    font-size: 18px;
    color: #D94C81 ;
  }

  p, a {
    font-size: 14px;
    color: #2C2C2C ;
    margin: 5px 0;
    text-decoration: none;
  }

  a:hover {
    color: #2C2C2C ;
  }
`;

// Estilizando a seção do site map
const SiteMap = styled.div`
  h3 {
    font-size: 18px;
    color: #2C2C2C ;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 5px 0;
  }

  a {
    font-size: 14px;
    color: #2C2C2C ;
    text-decoration: none;
  }

  a:hover {
    color: #8a8acb;
  }
`;

// Estilizando a seção de copyright
const Copyright = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  color: #2C2C2C;
  width: 100%;
  border-top: 1px solid #D94C81;
  padding-top: 10px;
`;

// Componente do Footer
const Footer = () => {
  return (
    <FooterContainer>
      <InfoSection>
        <h3>ENDEREÇO</h3>
        <p>Rua Maestro Orlando Alves Correa, 25 - Centro</p>
        <p>Conceição dos Ouros/MG - 37548-000</p>
      </InfoSection>
      <InfoSection>
        <h3>CONTATO</h3>
        <a href="https://wa.me/553599372979">+55 35 99937-2979</a>
      </InfoSection>
      <InfoSection>
        <h3>NOSSOS CANAIS</h3>
        <a href="">Instagram</a><br />
      </InfoSection>
      <Copyright>
        ©2024 Desenvolvido por João Ryan dos Santos.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
