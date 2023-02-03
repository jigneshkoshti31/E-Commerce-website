import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Nav from "./Nav"

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
        <h2 className='logo'>E-commerce</h2>
            {/* <img src='./images/logo.png' alt='my logo' /> */}
            {/* <h6>E-Commerce</h6> */}
        </NavLink>
        <Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo{
    font-size: 35px;
    font-weight: 500;
    color: rgb(64 134 156);
  }
  
`;


export default Header
