import React from 'react';
import FormaDeBolo from './components/FormaDeBolo';
import Card from './components/Card';
import CardDinamico from './components/CarDinamico,';

function App() {

  return (
    <div>
      <Card
        title="Notícia 1"
        category="Esportes"
        content="Conteúdo da notícia 1"
        image="https://via.placeholder.com/100"
        />
      <Card
        title="Notícia 2"
        category="Esportes"
        content="Conteúdo da notícia 2"
        />
      <Card
        title="Notícia 3"
        category="Esportes"
        content="Conteúdo da notícia 3"
        />
      <CardDinamico>
        <h2>Notícia dinâmica 1</h2>
        <img src='https://via.placeholder.com/100' alt="Imagem" />
        <p>Conteúdo dinâmico da noticia 1</p>
      </CardDinamico>
      <CardDinamico>
        <h2>NOtícia dinâmica 2</h2>
        <p>Conteúdo dinâmico da noticia 2</p>
      </CardDinamico>
  </div>
  )
}

export default App
