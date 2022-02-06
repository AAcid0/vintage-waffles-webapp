import React, { Fragment } from 'react';
import HeadBar from './components/HeadBar';
import HeroBanner from './components/HeroBanner';
import CarruselCards from './components/CarruselCards';
import DivFP from './components/DivFP';
import Footer from './components/Footer';
import Minicarta from './components/Minicarta';
import Horarios from './components/Horarios';
import Carousel from './components/Carousel'
import Card1 from './components/Card1';
import PagMenu from './pages/Menu/Menu';
import Nosotros from './pages/Nosotros/Nosotros';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

//import './App.css';

function App() {
  return (
      <div className="App">
        <HeadBar />
        
        
          
            <Routes>
            <Route path="/" element={
              <Fragment>
                <HeroBanner />
                <DivFP />
                <CarruselCards />
                <Minicarta />
                <Horarios />
                
              </Fragment>
              }/>

              <Route path="nuestromenu" element={<PagMenu />} />
              <Route path="nosotros" element={<Nosotros />}/>
            </Routes>
          
        
        
          {/* ESTOY HACIENDO LAS RUTAS, NO SE COMO HACER <LINK/> CON LOS BOTONES DEL HEADBAR */}
          {/* <Route path="/nuestromenu" element={<PagMenu />}/>  */}
        <div className='row g-0'>
        <Footer />  
        </div>
            

        
         
      </div>

  );
}

export default App;
