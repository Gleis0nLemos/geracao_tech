import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #004aad;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;

  &.active, &:hover {
    color: white;
    text-decoration: underline;
  }
`;
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </Nav>
      </HeaderContainer>
    </>
  );
}

export default Header;