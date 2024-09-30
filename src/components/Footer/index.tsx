import React from 'react';
import styled from 'styled-components';

// Estilizando o container principal do footer
const FooterContainer = styled.footer`
  background-color: #1c1e38;
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
    color: #8a8acb;
  }

  p, a {
    font-size: 14px;
    color: #fff;
    margin: 5px 0;
    text-decoration: none;
  }

  a:hover {
    color: #8a8acb;
  }
`;

// Estilizando a seção do site map
const SiteMap = styled.div`
  h3 {
    font-size: 18px;
    color: #8a8acb;
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
    color: #fff;
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
  color: #8a8acb;
  width: 100%;
  border-top: 1px solid #3a3a68;
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
                <a href="https://instagram.com">Instagram</a><br />
                <a href="https://linkedin.com">LinkedIn</a>
            </InfoSection>
            <Copyright>
                ©2024 Desenvolvido por João Ryan dos Santos.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;
