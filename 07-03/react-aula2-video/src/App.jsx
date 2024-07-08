
import Banner from "./components/Banner";
import Header from "./components/Header";

const App = () => {
  return ( 
    // parte visível do component

    /* Pode ser dessa forma também
    return (
      <React.Fragment>
        <Header />
        <Banner />  
      </React.Fragment>
    )

    fazendo os imports no começo do arquivo
    import React from 'react';
    import {fragment} from 'react';
    */
    <>
      <Header />  
      <Banner />
    </>
  );
}
 
export default App;