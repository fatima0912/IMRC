import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import { render } from '@testing-library/react';


const AppRoutes =() =>
{
   render()
   { return <BrowserRouter>
    <Header/>
    <hr />
    <Routes>
        <Route path = "/" element ={<Home />} />
        <Route path = "/Products" element ={<Products />}/>
        <Route path = "/Contact" element ={<Contact />}/>
        <Route path = "/About" element ={<About />}/>
         <Route path = "*" element ={<Navigate to="/"/>} />
    </Routes>
   
   <hr/>
    <Footer />
     </BrowserRouter>
   }
};

export default AppRoutes;
