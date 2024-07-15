import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(userName) {
      navigate(`/user/${userName}`);
    }
  }

  return (
    <>
      <div className="home">
        <h1>Home</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Nome de Usuário"
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>  
  );
}
 
export default Home;