import React, { useState } from 'react';
import styled from 'styled-components';
import img from '../../assets/image/AgroControl.png';

interface ImageProps {
    position: string;
    zoom: boolean; // Nova prop para controlar o zoom
}

const CardWrapper = styled.div`
  width: 400px;
  //border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 200px;
  position: relative;
`;

const Image = styled.img.attrs<ImageProps>(({ position, zoom }) => ({
    style: {
      transformOrigin: position,
      transform: zoom ? 'scale(1.2)' : 'scale(1)', // Aplica o zoom quando `zoom` for verdadeiro
    },
  }))<ImageProps>`
    width: 100%;
    height: 100%;
    transition: transform 0.8s ease-in-out;
`;

const Content = styled.div`
  padding: 16px;
`;

const Category = styled.span`
  color: #ffa726;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: inline-block;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0px;
  color: #f0a63b;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0px;
  line-height: 1.5;
`;

const TimeInfo = styled.span`
  font-size: 12px;
  color: #999;
  display: block;
  margin-bottom: 8px;
`;
const ProjectCard = () => {
    const [position, setPosition] = useState('center center');
    const [zoom, setZoom] = useState<boolean>(false);

    const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => { left: any; top: any; width: any; height: any; }; }; pageX: number; pageY: number; }) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const xPos = ((e.pageX - left) / width) * 100;
      const yPos = ((e.pageY - top) / height) * 100;
  
      setPosition(`${xPos}% ${yPos}%`);
      setZoom(true);
    };
  
    const handleMouseLeave = () => {
      setZoom(false); 
    };

  return (
    <CardWrapper>
       <ImageWrapper onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <Image
          src={img}
          alt="Dev Image"
          position={position}
          zoom={zoom} 
        />
      </ImageWrapper>

      <Content>
      {/*   <Category>web</Category>
        <TimeInfo>há 6 dias</TimeInfo> */}
        <Title>AgroControl</Title>
        <Description>
          Uma aplicação para controle financeiro permite o gerenciamento eficiente de receitas, despesas e investimentos em propriedades rurais...
        </Description>
      </Content>
    </CardWrapper>
  );
};

export default ProjectCard;


