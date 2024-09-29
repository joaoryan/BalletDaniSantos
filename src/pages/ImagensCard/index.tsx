import React from 'react';
import * as Styled from './styled';
import ProjectCard from '../../components/ProjectCard';
import img from '../../assets/image/AgroControl.png';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface VisibilityProps {
  isVisible: boolean;
}

// Container principal para os cards
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  height: 200vh; /* Definindo uma altura grande para scroll */
`;

// Card externo
const OuterCard = styled.div<VisibilityProps>`
 
  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: transform 0.5s ease, opacity 0.5s ease;
  img{
    width: 600px;
    border-radius: 15px;
  }
`;

// Card interno que vai "entrar" no card externo
const InnerCard = styled.div<VisibilityProps>`
  width: 100px;
  height: 100px;
  background-color: #f08a5d;
  border-radius: 50%;
  position: absolute;
  top: ${({ isVisible }) => (isVisible ? '50%' : '150%')}; /* Efeito de transição de fora para dentro */
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.6s ease;
`;

const Card: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Função para criar o IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 50% do card precisa estar visível para ativar
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Limpeza
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <OuterCard ref={cardRef} isVisible={isVisible}>
      <img src={img} />
    </OuterCard>
  );
};

export function ImagensCard(): JSX.Element {

  return (
    <Styled.Container>
      <Styled.DivText>
        <Styled.Title>Ballet Dani Santos</Styled.Title>
        <Styled.Text>
          fotoooooo
        </Styled.Text>
      </Styled.DivText>
      <Styled.DivImagens>
        <Card />
        <Card />
        <Card />
        <Card />
      </Styled.DivImagens>
    </Styled.Container>
  );
}
