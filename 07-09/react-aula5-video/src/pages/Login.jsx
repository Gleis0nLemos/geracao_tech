import { InputText } from 'primereact/inputtext';
import { InputIcon } from 'primereact/inputicon';
import { IconField } from 'primereact/iconfield';
import { Button } from 'primereact/button';

const Login = () => {
  return (  
    <>
      <div>
        <form>
          <h3>Seja bem-vindo</h3>
          <label htmlFor="email">Email</label>
          <InputText 
            id='email'
            type='email'
            placeholder='email@email.com'
            />
          <label htmlFor="senha">Senha</label>
          <IconField>
            <InputIcon className="pi pi-eye" />
            <InputText 
              id='senha'
              placeholder='******'
               />
          </IconField>
          <Button 
            type="submit"
            label="Entrar" 
            />
        </form>
      </div>
    </>
  );
}
 
export default Login;