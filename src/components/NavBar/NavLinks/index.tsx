import React, { FC } from 'react';
import { LinksList, ListItem } from './style';
import { NavLink } from 'react-router-dom';

type LinksProps = {
  hidden: boolean;
};

const Links: FC<LinksProps> = (props) => {

  const checkActive = (match: any, location: any) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    return (pathname === "/")
  }

  return (
    <LinksList>
      <ListItem>
        <NavLink to='/'>
          {'Artigos'}
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/project'>
          {'Projetos'}
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/profile' >
          {'Sobre Mim'}
        </NavLink>
      </ListItem>
    </LinksList>
  );
};

export default Links;
