import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home';
import Products from '../pages/Products';
import Header from '../components/Header';

const Paths = () => {
  return (  
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default Paths;