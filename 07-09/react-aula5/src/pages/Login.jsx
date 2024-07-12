import { InputText } from 'primereact/inputtext';
import { InputIcon } from 'primereact/inputicon';
import { IconField } from 'primereact/iconfield';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

  const [mostrarSenha, setMostrarSenha] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  }
  
  return (  
    <>
      <div
        className='bg-primary-500 h-screen flex justify-content-center align-items-center px-3'
        style={{ height: '100vh' }} 
        >
        <div
          className='col-12 md:col-4 xl:col-3 card shadow-5 p-4 surface-0 border-round-md'         
          >
          <h3 className='text-center text-2xl'>Seja Bem-vindo</h3>
          <form onSubmit={handleSubmit}>
            <div className='field mb-3'>
              <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
              <InputText 
                id="email"
                type="email" 
                placeholder="email@email.com"
                className='inputtext-sm mb-3 w-full'
                />
            </div>
            <label htmlFor="senha" className='block uppercase font-bold text-sm mb-1' >Senha</label>
            <div className='mb-3'>
              <IconField>
                <InputIcon 
                  className={`pi ${ mostrarSenha ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  />
                <InputText 
                  id='senha'
                  placeholder='******'
                  type={ mostrarSenha ? 'text' : 'password' }
                  className='w-full'
                    />
              </IconField>
            </div>
            <Button 
              label="Entrar"
              type="submit"
              className="button-sm button-primary w-full"
              />
          </form>
        </div>
      </div>
    </>
  );
}
 
export default Login;
