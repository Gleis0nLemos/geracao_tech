import { useParams } from "react-router-dom";

const User = () => {
  const { userName } = useParams();
  
  return (  
    <>
      <div className="user">
        <h1>Bem vindo!</h1>
        <h2>{userName}</h2>
     </div>
    </>
  );
}
 
export default User;