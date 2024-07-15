import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import PageLayout from '../layouts/PageLayout'
import NotFound from '../pages/NotFound'
import User from '../components/User'

const Paths = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/user/:userName" element={<User />} />   
        </Route>
        <Route path="*" element={<NotFound />}
            />  
      </Routes>
    </Router>  
  );
}
 
export default Paths;