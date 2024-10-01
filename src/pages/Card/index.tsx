import React from 'react';
import styled from 'styled-components';

// Container do Card Responsivo
const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  text-decoration: none;
  color: #000;
  background-color: #f8f9fa;
  border: 2px solid #dedede;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%; /* Ajuste em telas menores */
  }

  @media (min-width: 769px) {
    width: 90%;
  }
`;

// Título do Card
const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #343a40;
`;

// Texto descritivo do card
const CardDescription = styled.p`
  font-size: 1rem;
  color: #6c757d;
  text-align: center;
`;

const CardButton = styled.div`
  padding: 10px 20px;
  background-color: #FF69B4;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF69B4;
  }
`;

const CardMatricula: React.FC = () => {
    const whatsappLink = "https://wa.me/5535998236000";

    return (
        <CardContainer href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <CardTitle>Matrículas Abertas</CardTitle>
            <CardDescription>
                Venha matricular sua filha na nossa escola de ballet infantil! Garanta a vaga e faça parte de um ambiente de aprendizado e diversão.
            </CardDescription>
            <CardButton>Fale com a gente no WhatsApp</CardButton>
        </CardContainer>
    );
};

export default CardMatricula;
