import "primereact/resources/themes/lara-light-blue/theme.css"; // Tema PrimeReact
import "primeicons/primeicons.css"; // Ïcones PrimeReact
import "primeflex/primeflex.css"; // PrimeFlex para utilitários CSS
// import 'primereact/resources/primereact.min.css'; // Estilos PrimeReact
// import Paths from "./routes/Paths"; 

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const App = () => {

  const header = <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />;

  const footer = (
    <span>
      <Button 
        label="Salvar" 
        icon="pi pi-check"
        />
      <Button 
        label="Cancelar" 
        icon="pi pi-times"
        className="p-button-secondary"
        />
    </span>
  )

  return (  
    <>
      <div className="flex justify-content-center align-items-center" 
        style={{ 
          height: '100vh' 
        }}> 
        <Card
          title="Título do Card"
          subTitle="Subtítulo"
          style={{ width: '25em' }}
          header={header}
          footer={footer}
          >
          <p
            className="m-0"
            style={{ lineHeight: '1.5'}}
            >
            Este é um exemplo de conteúdo dentro de um card usando PrimeReact
          </p>
        </Card>
      </div> 
    </>
  );
}
 
export default App;