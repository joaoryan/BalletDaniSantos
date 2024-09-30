import styled from 'styled-components';
import * as color from '../../styles/color';

interface ImageProps {
  src?: string;  // Propriedade opcional
}

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 // width: 100vw;
  overflow-x: hidden;
  gap: 200px;
  overflow-y: scroll; /* Permite rolar verticalmente */
  
  /* Estilo da barra de rolagem no Chrome e Safari */
  &::-webkit-scrollbar {
    display: none; /* Esconde a barra de rolagem */
  }
  @media (max-width: 800px) {
    //padding: 10px 26px;
    gap: 50px;
  }
`;

/* export const Image = styled.div`
  img{
    width: 300px;
  }
`; */

export const Image = styled.div<ImageProps>`
  width: 100vw;
  height: 700px;
  background-image: linear-gradient(
    to top right,
    #FDECEF 15%, /* Deixa o canto inferior esquerdo mais escuro */
      rgba(0, 0, 0, 0) 60%    /* Transparente no canto superior direito */
    ), url(${props => props.src || '/default-image.jpg'});
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 800px) {
    background-image: linear-gradient(
    to top right,
    #FDECEF 15%, /* Deixa o canto inferior esquerdo mais escuro */
      rgba(0, 0, 0, 0) 70%    /* Transparente no canto superior direito */
    ), url(${props => props.src || '/default-image.jpg'});
  }
`;


export const Container = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: space-around;
   z-index: 2;
`;

export const DivText = styled.div`
    max-width: 600px;
    height: 100%;
    width: 100vw;
    overflow: auto;
    display: flex;
    justify-content: flex-end;
    z-index: 2;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    padding: 120px 90px;
   @media (max-width: 800px) {
    padding: 120px 20px;
    width: 90%;
    height: 600px;
  }
`;


export const Title = styled.div`
  font-size: 40px;
  margin: 0px 0px 30px 0px;
  font-weight: 600;
  color: #FF69B4;
  @media (max-width: 800px) {
    font-size: 30px;
    margin: 0px 0px 20px 0px;
  }
  @media (max-width: 500px) {
    font-size: 28px;
    margin: 0px 0px 20px 0px;
  }
`;

export const SubTitle = styled.div`
  font-size: 30px;
  margin: 30px 0px;
  :hover{
    color: #f0a63b; 
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  margin: 20PX 0px;
  font-weight: 400;
  color: #4D4D4D ;
  width: 100%;
  @media (max-width: 500px) {
    font-size: 18px;
    color: black;
    //padding: 0px 10px;
  }
  a{
    border-bottom: 1px dashed #f0a63b; // #f3b755; //#F27100
    color: #f0a63b; // #f3b755; //#F27100
    text-decoration: none;
  }
`;

export const DivIcon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 60px;
`;

export const Icon = styled.div`
  cursor: pointer;
  a{
    color: #8899a6;
    cursor: pointer;
    transition: 0.5s;
    :hover{
      transition: 0.5s;
      color: #f0a63b; // #f3b755; //#F27100
    }
  }
  svg{
    font-size: 30px;
  }
`;
