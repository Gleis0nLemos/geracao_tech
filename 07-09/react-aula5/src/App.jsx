import "primereact/resources/themes/lara-light-blue/theme.css"; // Tema PrimeReact
import "primeicons/primeicons.css"; // Ïcones PrimeReact
import "primeflex/primeflex.css"; // PrimeFlex para utilitários CSS
// import 'primereact/resources/primereact.min.css'; // Estilos PrimeReact 

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const App = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data))
  }, []);

  return (  
    <>
      <div 
        className="flex justify-content-center align-items-center" 
        style={{ height: '100vh' }}
        > 
        <DataTable
          value={products}
          paginator
          rows={10}
          className="datatable-sm"
          > 
          <Column field="title" header="Produto" />
          <Column field="price" header="Preço" />
          <Column field="category" header="Categoria" />
        </DataTable>
      </div> 
    </>
  );
}
 
export default App;