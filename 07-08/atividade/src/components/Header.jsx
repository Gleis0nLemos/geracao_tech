import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <>
      <nav className="header">
        <h1>LOGO</h1>
        <ul className="nav-links">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </nav>
    </> 
  );
}
 
export default Header;