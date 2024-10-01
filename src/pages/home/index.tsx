import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styled, { keyframes } from 'styled-components';
import img from '../../assets/image/img3.jpg'
//styles
import * as Styled from './styled';
import { ImagensCard } from '../ImagensCard';
import { Feedback } from '../Feedback';
import Footer from '../../components/Footer';
import CardMatricula from '../Card';

//icons


export function Home(): JSX.Element {


  return (
    <>
      <Styled.Page>
        <Styled.Image src={img} >
          <Styled.DivText>
            <Styled.Title>Ballet Dani Santos</Styled.Title>
            <Styled.Text>
              Na Ballet Dani Santos, oferecemos aulas de ballet infantil em um ambiente acolhedor, onde as crianças desenvolvem disciplina, coordenação motora e autoconfiança de forma divertida. Nossos professores experientes garantem que cada aluno evolua no seu próprio ritmo,
              explorando a arte da dança enquanto fazem novos amigos. Inscreva-se hoje e permita que seu filho descubra a magia do ballet!
            </Styled.Text>
          </Styled.DivText>
          {/*   <Styled.Image>
            <img src={img}
              alt="Dev Image" />
          </Styled.Image> */}
        </Styled.Image>
        <ImagensCard />
        <Feedback />
      </Styled.Page>
      <Footer />
    </>
  );
}
