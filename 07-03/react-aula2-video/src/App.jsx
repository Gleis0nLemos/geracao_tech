
import Banner from "./components/Banner";
import Header from "./components/Header";

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
    </>
  );
}
 
export default App;