import React from 'react'
import { Link, useLocation } from "react-router-dom";
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

const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;

  &.active, &:hover {
    color: white;
    text-decoration: underline;
  }
`;
const Header = () => {
  const location = useLocation();
  return (
    <>
      <HeaderContainer>
        <Nav>
          <StyledLink 
            to="/" 
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </StyledLink>
          <StyledLink 
            to="/products"
            className={location.pathname.startsWith("/products") ? "active" : ""}
          >
            Products
          </StyledLink>
        </Nav>
      </HeaderContainer>
    </>
  );
}

export default Header;