import React from 'react';
import * as Styled from './styled';
import { useEffect, useRef, useState } from 'react';
import img1 from '../../assets/image/img1.jpg';
import img2 from '../../assets/image/img2.jpg';
import img3 from '../../assets/image/img3.jpg';
import img4 from '../../assets/image/img4.jpg';

interface CardProps {
  img: string;
}

const Card: React.FC<CardProps> = ({ img }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Styled.OuterCard ref={cardRef} isVisible={isVisible}>
      <img src={img} />
    </Styled.OuterCard>
  );
};

export function ImagensCard(): JSX.Element {

  return (
    <Styled.Container>
      <Styled.DivText>
        <Styled.Title>Descubra a Arte do Ballet</Styled.Title>
        <Styled.Text>
          Explore as belíssimas apresentações e momentos capturados na nossa escola de ballet.
          Cada foto conta a história de dedicação, graça e paixão pela dança.
        </Styled.Text>
      </Styled.DivText>
      <Styled.DivImagens>
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
        <Card img={img4} />
        <Card img={''} />
      </Styled.DivImagens>
    </Styled.Container>
  );
}
