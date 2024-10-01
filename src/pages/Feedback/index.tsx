import React from 'react';
import * as Styled from './styled';
import ProjectCard from '../../components/ProjectCard';
import img from '../../assets/image/AgroControl.png';
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CardMatricula from '../Card';

interface FeedbackBubbleProps {
  feedback: string;
  name: string;
}


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

const moveRigthDown = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
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
  top: 0;
  animation: ${({ reverse }) => (reverse ? moveDown : moveUp)} 40s linear infinite;
  @media (max-width: 1000px) {
    top: 50;
    width: 100vw;
    gap: 10px;
    flex-direction: row;
    animation: ${moveRigthDown} 40s linear infinite;
    align-items: center;
  }
`;

// Card externo com transição de opacidade
const OuterCard = styled.div<{ opacity: number }>`
  width: 300px;
  height: 200px;
  background-color: #505050;
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
  font-size: 12px;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: #f0f0f0 transparent transparent transparent;
  }

 

`;

const BubbleContainer = styled.div`
 // position: relative;
  //max-width: 300px;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 800px) {
    width: 400px;
  }
`;

const FeedbackText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0;
  width: 200px;
  height: 170px;
`;

const NameTag = styled.div`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #fff;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #555;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Componente de cada Card com lógica de fade-in/fade-out
const FeedbackBubble: React.FC<FeedbackBubbleProps> = ({ feedback, name }) => {
  const calculateOpacity = (index: number) => {
    const normalizedIndex = index % 6; // Pegar o índice relativo no loop

    return normalizedIndex === 0 || normalizedIndex === 5 ? 0 : 1;
  };

  return <BubbleContainer>
    <FeedbackText>{feedback}</FeedbackText>
    <NameTag>{name}</NameTag>
  </BubbleContainer>
};


export function Feedback(): JSX.Element {
  const [speed, setSpeed] = useState(10);


  const cards = [
    "Minha filha ama as aulas de ballet! A professora é muito atenciosa e cria um ambiente divertido e acolhedor. Estou impressionada com o progresso da Júlia, especialmente na confiança e coordenação.",
    "As aulas de ballet são maravilhosas! O Pedro está super envolvido, e a professora é muito carinhosa e paciente. Ele se diverte muito e está aprendendo a se expressar melhor.",
    "Lara sempre fica ansiosa pela aula de ballet! Adoro ver como ela está crescendo em postura e confiança. A professora cria um espaço seguro e lúdico, perfeito para o desenvolvimento dela.",
    "Estou muito satisfeita com as aulas de ballet! A Bia está adorando, e é visível o quanto ela evoluiu em coordenação e autoestima. A professora tem um cuidado incrível com cada criança."
  ];

  return (
    <Styled.Container>
      <Styled.DivText>
        <Styled.Title>Depoimentos dos Pais</Styled.Title>
        <Styled.Text>Agradecemos a confiança dos pais que escolheram nossa escola de ballet para o desenvolvimento artístico de seus filhos. Aqui estão algumas das opiniões sobre a experiência de seus pequenos dançarinos.</Styled.Text>
      </Styled.DivText>
      <Styled.DivImagens>

        <Carousel speed={speed}>
          {/* {cards.concat(cards).map((card, index) => (
            <Card key={index} index={index}>
              {card}
            </Card>
          ))} */}
          <FeedbackBubble
            feedback="Minha filha ama as aulas de ballet! A professora é muito atenciosa e cria um ambiente divertido e acolhedor."
            name="Maria, mãe da Júlia"
          />
          <FeedbackBubble
            feedback="O Pedro está super envolvido, e a professora é muito carinhosa e paciente."
            name="Renata, mãe do Pedro"
          />
          <FeedbackBubble
            feedback="Minha filha ama as aulas de ballet! A professora é muito atenciosa e cria um ambiente divertido e acolhedor."
            name="Maria, mãe da Júlia"
          />
          <FeedbackBubble
            feedback="O Pedro está super envolvido, e a professora é muito carinhosa e paciente."
            name="Renata, mãe do Pedro"
          />
          <FeedbackBubble
            feedback="Minha filha ama as aulas de ballet! A professora é muito atenciosa e cria um ambiente divertido e acolhedor."
            name="Maria, mãe da Júlia"
          />
          <FeedbackBubble
            feedback="O Pedro está super envolvido, e a professora é muito carinhosa e paciente."
            name="Renata, mãe do Pedro"
          />
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
      <CardMatricula />
    </Styled.Container >
  );
}
