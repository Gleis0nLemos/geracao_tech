import { Link } from "react-router-dom";

const Products = () => {
  return (  
    <>
      <h1>Products</h1>
      <ul>
        <li><Link to="/product/1/Abacate">Abacate</Link></li>
        <li><Link to="/product/2/Banana">Banana</Link></li>
        <li><Link to="/product/3/Cenoura">Cenoura</Link></li>
        <li><Link to="/product/4/Espinafre">Espinafre</Link></li>
        <li><Link to="/product/5/Framboesa">Framboesa</Link></li>
      </ul>
    </>
  );
}
 
export default Products;