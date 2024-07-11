import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import 'primeflex/primeflex.css';

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  }
  
  return (  
    <>
      <div
        className='bg-primary-500 h-screen flex justify-content-center align-items-center'
        style={{ height: '100vh' }} 
        >
        <div
          className='card shadow-5 p-4 surface-0 border-round-md' 
          style={{ width: '300px' }}        
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
            <div className='field mb-3'>
              <label htmlFor="password" className='block uppercase font-bold text-sm mb-1'>Senha</label>
              <Password 
                id="password" 
                placeholder="**********"
                toggleMask 
                feedback={false}
                />
            </div>
            <Button 
              label="Entrar"
              type="submit"
              className="button-sm button-primary"
              />
          </form>
        </div>
      </div>
    </>
  );
}
 
export default Login;
