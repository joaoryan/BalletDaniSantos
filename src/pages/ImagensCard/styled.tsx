import styled from 'styled-components';
import * as color from '../../styles/color';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 90px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    padding: 10px 26px;
  }
`;

export const Image = styled.div`
    background: #222;
  border-radius: 12px;
  

  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 1;
  
  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
  img{
    width: 500px;
  }
`;

export const Container = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  overflow-x: none;
  justify-content: space-around;
  @media (max-width: 800px) {
    display: flex;
        padding: 0px;
        flex-direction: column;
        align-items: center;
  }
`;

export const DivText = styled.div`
  max-width: 600px;
  overflow: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const DivImagens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  height: 600px;
  padding: 20px;
  gap: 5px;

  @media (max-width: 800px) {
    height: auto;
    padding: 0px;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  margin: 0px 0px 30px 0px;
  font-weight: 600;
  color: #FF69B4;
  @media (max-width: 500px) {
    font-size: 24px;
    margin: 0px 0px 20px 0px;
  }
`;

export const SubTitle = styled.div`
  font-size: 28px;
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
  color: #4D4D4D;
  @media (max-width: 500px) {
    font-size: 18px;
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
