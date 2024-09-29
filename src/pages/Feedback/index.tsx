import React from 'react';
import * as Styled from './styled';
import ProjectCard from '../../components/ProjectCard';
import img from '../../assets/image/AgroControl.png';
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

// Animação para mover os cards para baixo (coluna da direita)
const moveDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

// Container principal que envolverá todos os cards
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px; /* Altura visível do container */
  overflow: hidden; /* Esconder os cards que saem do container */
  position: relative;
`;

// Sub-container para cada carrossel (coluna)
const Column = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  margin: 0 20px;
`;

// Container que moverá os cards em loop (recebe a animação e velocidade)
const Carousel = styled.div<{ speed: number; reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  animation: ${({ reverse }) => (reverse ? moveDown : moveUp)} 50s linear infinite;
`;

// Card externo com transição de opacidade
const OuterCard = styled.div<{ opacity: number }>`
  width: 300px;
  height: 200px;
  background-color: #6c63ff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.5s ease-in-out; /* Transição suave */
`;

// Componente de cada Card com lógica de fade-in/fade-out
const Card: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
  const calculateOpacity = (index: number) => {
    const normalizedIndex = index % 6; // Pegar o índice relativo no loop

    return normalizedIndex === 0 || normalizedIndex === 5 ? 0 : 1;
  };

  const opacity = calculateOpacity(index);

  return <OuterCard opacity={1}>{children}</OuterCard>;
};


export function Feedback(): JSX.Element {
  const [speed, setSpeed] = useState(10);


  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];

  return (
    <Styled.Container>
      <Styled.DivText>
        <Styled.Title>O que clientes e pensam sobre ballet</Styled.Title>
      </Styled.DivText>
      <Styled.DivImagens>

        <Carousel speed={speed}>
          {cards.concat(cards).map((card, index) => (
            <Card key={index} index={index}>
              {card}
            </Card>
          ))}
        </Carousel>


        {/* Coluna da Direita (Carrossel Descendo) */}

        {/*      <Carousel speed={speed} reverse>
          <Card>Card A</Card>
          <Card>Card B</Card>
          <Card>Card C</Card>
          <Card>Card D</Card>
          <Card>Card E</Card>
          <Card>Card F</Card>
       
        <Card>Card A</Card>
        <Card>Card B</Card>
        <Card>Card C</Card>
        <Card>Card D</Card>
        <Card>Card E</Card>
        <Card>Card F</Card>
      </Carousel> */}



      </Styled.DivImagens>
    </Styled.Container >
  );
}
