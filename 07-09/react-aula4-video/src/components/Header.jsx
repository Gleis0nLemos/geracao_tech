import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: blueviolet;
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;

  & h1 {
    color: #FFF;
  }

  & nav ul {
    display: flex;
    gap: 36px;
    list-style: none;
    & li a {
      color: #FFFFFF90;
      text-decoration: none;
      font-size: 16px;
      transition-duration: 150ms;
      &:hover, &.active {
        color: #FFFFFF;
      }
    }
  }
`;

const Header = () => {
  return (  
    <HeaderContainer>
      <h1>LOGO</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
        </ul>
      </nav>
  
    </HeaderContainer>
  );
}
 
export default Header;