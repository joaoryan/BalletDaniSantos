import React, { useState } from 'react';
import NavLinks from './NavLinks';
import { Img, Nav, Text, Title, Icon, DivIcon } from './styles';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import img from '../../assets/image/joao-ryan.png'

const NavBar = () => {
  const [backOffNav, setbackOffNav] = useState(false);

  return (
    <Nav>
      <Img>
        <img src={img} />
        <Title>{"João Ryan"}</Title>
      </Img>
      <Text>{"Graduando engenharia de software, desenvolvedor fullstack"}</Text>
      <DivIcon>
        <Icon>
          <a href="https://github.com/joaoryan" target="_blank"><AiFillGithub /></a>
        </Icon>
        <Icon>
          <a href="https://www.linkedin.com/in/joão-ryan-santos-a196a7207/" target="_blank"><AiFillLinkedin /></a>
        </Icon>
      </DivIcon>
      <NavLinks hidden={backOffNav} />
    </Nav>
  );
};

export default NavBar;
