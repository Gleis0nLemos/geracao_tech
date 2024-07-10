import { Link } from "react-router-dom";

const Products = () => {
  const productList = [
    {
      id: 1,
      name: "Product 1"
    },
    {
      id: 2,
      name: "Product 2"
    },
    {
      id: 3,
      name: "Product 3"
    },
    {
      id: 4,
      name: "Product 4"
    },
    {
      id: 5,
      name: "Product 5"
    }
  ]

  return (  
    <div>
      <h1>Products</h1>
      <ul>{productList.map(product => (
        <li key={product.id}>
          <Link to={`/products/${product.id}/${product.name}`}>{product.name}</Link>
        </li>
      ))}
      </ul>
    </div>
  );
}
 
export default Products;