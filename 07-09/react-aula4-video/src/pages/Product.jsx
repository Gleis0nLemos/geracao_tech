import { useParams } from "react-router-dom";

const Product = () => {
  const { name } = useParams();
  return (  
    <>
      <h1>Produto {name}</h1>
    </>
  );
}
 
export default Product;