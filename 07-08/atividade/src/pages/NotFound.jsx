import { Link } from "react-router-dom";

const NotFound = () => {
  return (  
    <>
      <div className="content-not-found">
        <h3>Página não encontrada</h3>
        <Link to="/">Voltar</Link>
      </div>
    </>
  );
}
 
export default NotFound;