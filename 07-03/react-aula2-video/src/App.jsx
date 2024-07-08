
import Banner from "./components/Banner";
import Header from "./components/Header";
import { Componente1, Componente2, Componente3 } from "./components/VariosComponentes";

const App = () => {
  return ( 
    // parte visível do component

    /* Pode ser dessa forma também

    fazendo os imports no começo do arquivo
    import React from 'react';
    
    return (
      <React.Fragment>
        <Header />
        <Banner />  
      </React.Fragment>
    )

    
    */
    <>
      <Header />  
      <Banner />
      <Componente1 />
      <Componente2 />
      <Componente3 />
    </>
  );
}
 
export default App;