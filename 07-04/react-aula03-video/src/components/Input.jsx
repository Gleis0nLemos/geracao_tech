import { useRef, useState } from "react";

const Input = () => {
  // const [nome, setNome] = useState("");
  const nome = useRef("");

  console.log("Re-renderizou");

  return (  
    <>
      <input 
        type="text" 
        // onChange={(e) => nome.current = e.target.value}
        ref={nome}
        placeholder="digite seu nome"
        />
        {/*
          chamada com onChange + onClick
          onClick={() => console.log(nome.current)} 
        */}
      <button onClick={() => console.log(nome.current.value, nome.current.type)}>mostrar</button> 
      <h1>{nome.current}</h1>
    </>
  );
}
 
export default Input;