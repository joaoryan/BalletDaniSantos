import styled from 'styled-components'
import { Colors } from '../../assets/styles/StyleTypes'
const width = '660px'

export const Section = styled.div`
	text-transform: none;
	width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: #0e0e0e;
`;

export const Header = styled.div`
	position: absolute;
	top: 0px;
	left: 0px;
	height: 65px;
	width: 100%;
  background-color: ${props => props.theme.colors.header};
`

export const Container = styled.div`
	display: flex;
  flex-direction: column;
	height: 100vh;
	width: 100vw;
  color: #8899a6;
  font-weight: 300;
  line-height: 1.7;
  letter-spacing: 0.069rem;
`;

export const SideMenu = styled.div`
	width: auto;
  height: auto;
  background: linear-gradient(to right, #0e0e0e, #1c1e21);
	box-shadow: ${props => props.theme.colors.navbarShadow};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

export const Main = styled.main`
  width: ${width};
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: 1;
  background: ${Colors.PRIMARY_PURE};
  box-shadow: 5px 0px 10px #00000080;
  border-radius: 0px 35px 35px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: overlay;
`;

export const Aside = styled.aside`
  width: calc(100vw - ${width} + 40px);
  min-height: 750px;
  height: 100%;
  position: absolute;
  top:0px;
  left: calc(${width} - 40px);
  z-index: 0;
`;

export const DivLang = styled.div`
  position: absolute;
  top: 20px;
  left: calc(100vw - 175px);
  height: 40px;
  width: 175px;
  background: #f2f2f2;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px #00000080;
  border-radius: 20px 0px 0px 20px;
  opacity: 1;
`;

export const Settings = styled.img`
  height: 30px;
  padding: 5px;
  border-radius: 30px;
  border: 2px solid #f15b29;
  background-color:#383838;
  margin: 0px 30px;
`

export const Canvas = styled.canvas`
    position: absolute;
    display: none;
    z-index: 100;
`
