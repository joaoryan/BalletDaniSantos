import React from 'react'
import { Outlet } from 'react-router-dom'

import * as Styled from './styled';

/* import NavBar from '../../components/NavBar'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer' */

const Layout = () => {
  return (
    <>
      <Styled.Container>
        <Styled.Section>
          <Outlet />
        </Styled.Section>
      </Styled.Container>
    </>
  )
}

export default Layout;
