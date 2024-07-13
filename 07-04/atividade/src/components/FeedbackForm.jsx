import { useState } from "react";

const FeedbackForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [coment, setComent] = useState("");

  const handleChangeName = (e) => {
    setNome(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangeComent = (e) => {
    setComent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !coment) {
      alert("Preencha todos os campos");
      return;
    }
    
    alert(`Nome: ${nome}\nEmail: ${email}\nComentário: ${coment}`);

    setNome("");
    setEmail("");
    setComent("");
  }

  return (  
    <>
      <form className="form">
        <div>
          <label htmlFor="name" className="form-label">Nome</label>
          <input 
            type="text" 
            value={nome}
            onChange={handleChangeName}
            placeholder="Insira seu nome"
            required/>
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="text" 
            value={email}
            onChange={handleChangeEmail}
            placeholder="Insira seu email"
            required/>
        </div>
        <div>
          <label htmlFor="coment" id="coment" className="form-label">Comentário</label>
          <textarea 
            onChange={handleChangeComent}
            value={coment}
            placeholder="Insira seu comentário" 
            name="coment" 
            id="coment"></textarea>
        </div>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </>
  );
}
 
export default FeedbackForm;