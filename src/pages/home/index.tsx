import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styled, { keyframes } from 'styled-components';
import img from '../../assets/image/img3.jpg'
//styles
import * as Styled from './styled';
import { ImagensCard } from '../ImagensCard';
import { Feedback } from '../Feedback';
import Footer from '../../components/Footer';

//icons


export function Home(): JSX.Element {


  return (
    <>
      <Styled.Page>
        <Styled.Image src={img} >


          <Styled.DivText>
            <Styled.Title>Ballet Dani Santos</Styled.Title>
            <Styled.Text>
              Somos uma empresa onde a tecnologia se encontra com a criatividade e inovação, refletindo nossa identidade única e nosso compromisso de ir além do convencional.
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
