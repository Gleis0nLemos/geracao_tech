import { InputText } from 'primereact/inputtext';
import { InputIcon } from 'primereact/inputicon';
import { IconField } from 'primereact/iconfield';
import { Button } from 'primereact/button';
import { useState } from 'react';

const Login = () => {

  const [mostrarSenha, setMostrarSenha] = useState(false)

  return (  
    <>
      <div className='bg-primary-500 h-screen flex align-items-center justify-content-center px-3'>
        <form className='col-12 md:col-4 xl:col-3 surface-0 p-3 border-round-md'>
          <h3 className='text-center text-4xl'>Seja bem-vindo</h3>
          <label htmlFor="email" className='block uppercase font-bold text-sm mb-1'>Email</label>
          <InputText 
            id='email'
            type='email'
            placeholder='email@email.com'
            className='mb-3 w-full'
            />
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
            type="submit"
            label="Entrar"
            className="w-full"
            />
        </form>
      </div>
    </>
  );
}
 
export default Login;