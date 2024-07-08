import React from 'react';
import FormaDeBolo from './components/FormaDeBolo';

function App() {

  return (
    <div>
      <FormaDeBolo sabor="Limão" cobertura="Menta" />
      <FormaDeBolo sabor="Leite condensado" cobertura="Chocolate" />
    </div>
  )
}

export default App
