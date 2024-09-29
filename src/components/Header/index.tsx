import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import * as Styled from './styeled';

export function Header(): JSX.Element {
  return (
    <Styled.Content>
      <Styled.page>
        <NavLink to="/">
          Artigos
        </NavLink>
      </Styled.page>

      <Styled.page>
        <NavLink to="/profile">
          Sobre Mim
        </NavLink>
      </Styled.page>

    </Styled.Content>
  );
}
