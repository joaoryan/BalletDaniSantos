import styled from 'styled-components';
import * as color from '../../styles/color';

export const Content = styled.div`
  display: flex;
  align-items: center;  
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 3;
  gap: 30px;
  background: #F9C9D4; 
  opacity: 0.5;
  backdrop-filter: blur(10px);   
  
 
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: yellow;
  font-size: 40px;
  margin-left: 30px;
`;

export const Pages = styled.div`
 // height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const page = styled.div`
  display: flex;
  flex-direction: right;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  font-weight: 800;
  opacity: 1 !important;
  & > a{
    width: 100%;
    color: #8899a6;;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
  }
  & > a:hover {
    transition: 0.5s;
    color: white
  }
  .active {
   color: #FF69B4 // #f3b755; //#F27100
  }
  .active:hover {
    color: #FF69B4; //#F27100
  }
`;