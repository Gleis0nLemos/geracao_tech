import Banner from "./components/Banner";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";
import FormaDeBolo from "./components/FormaDeBolo";
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
      {/* <Header />  
      <Banner /> 
      <Componente1 />
      <Componente2 />
      <Componente3 /> */}
      {/* <FormaDeBolo sabor="Laranja" cobertura="Chocolate"/>
      <FormaDeBolo sabor="Chocolate" cobertura="Chantilly"/>   */}
      <Card
        title={"Notícia 1"}
        category={"Esportes"}
        paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, provident adipisci nemo quod ullam harum, eligendi sunt ut temporibus, possimus quia. Id odio, veniam rem cupiditate voluptatum natus corrupti possimus."}
        image={"https://images.educamaisbrasil.com.br/content/banco_de_imagens/mb/D/esportes-bolas.jpg"}
        tipo={"A"}
        />
      <Card
        title={"Notícia 2"}
        category={"Finanças"}
        paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, provident adipisci nemo quod ullam harum, eligendi sunt ut temporibus, possimus quia. Id odio, veniam rem cupiditate voluptatum natus corrupti possimus."}
        image={"https://images.educamaisbrasil.com.br/content/banco_de_imagens/mb/D/esportes-bolas.jpg"}
        />
      <Card
        title={"Notícia 3"}
        category={"Casa"}
        paragraph={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, provident adipisci nemo quod ullam harum, eligendi sunt ut temporibus, possimus quia. Id odio, veniam rem cupiditate voluptatum natus corrupti possimus."}
        image={"https://images.educamaisbrasil.com.br/content/banco_de_imagens/mb/D/esportes-bolas.jpg"}
        />
      <CardDinamico>
        <h1>Noticia 4</h1>
        <img src="https://images.educamaisbrasil.com.br/content/banco_de_imagens/mb/D/esportes-bolas.jpg" alt="" />
        <h6>Esportes</h6>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ut nemo cupiditate veritatis blanditiis tempore commodi! Quae dolorum harum cupiditate hic fugit dignissimos, eveniet ad maxime illo officiis, veniam repudiandae!</p>
      </CardDinamico>
      <CardDinamico>
        <img src="https://images.educamaisbrasil.com.br/content/banco_de_imagens/mb/D/esportes-bolas.jpg" alt="" />
        <h1>Noticia 4</h1>
      </CardDinamico>
    </>
  );
}
 
export default App;