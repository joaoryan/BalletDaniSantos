import React from 'react';
import * as Styled from './styled';
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

const Carousel = styled.div<{ reverse?: boolean }>`
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

const BubbleContainer = styled.div`
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

const FeedbackBubble: React.FC<FeedbackBubbleProps> = ({ feedback, name }) => {
  return <BubbleContainer>
    <FeedbackText>{feedback}</FeedbackText>
    <NameTag>{name}</NameTag>
  </BubbleContainer>
};


export function Feedback(): JSX.Element {

  return (
    <Styled.Container>
      <Styled.DivText>
        <Styled.Title>Depoimentos dos Pais</Styled.Title>
        <Styled.Text>Agradecemos a confiança dos pais que escolheram nossa escola de ballet para o desenvolvimento
          artístico de seus filhos. Aqui estão algumas das opiniões sobre a experiência de seus pequenos dançarinos.
        </Styled.Text>
      </Styled.DivText>
      <Styled.DivImagens>

        <Carousel>
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
      </Styled.DivImagens>
    </Styled.Container >
  );
}
