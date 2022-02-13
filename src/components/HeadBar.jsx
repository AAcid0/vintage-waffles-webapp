import React, { Component } from 'react';
import logo from '../images/logoClaroHor.svg';
import './styles/HeadBar.css';
import {Link} from 'react-router-dom';

class HeadBar extends Component {
    render(){
      return(
        <nav class="navbar navbar-expand-lg static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="Logo Vintage Waffles Cali" id='logoNav'/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto ulNavBar">
        <li class="nav-item">
          <Link className="nav-link text-white" to="/">Inicio</Link>
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li class="nav-item">
          <Link className="nav-link text-white" to="/nosotros">¿Quiénes Somos?</Link>
          
        </li>
        <li class="nav-item">
        <Link className="nav-link text-white" to="/nuestromenu">Nuestros Productos</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link text-white" to="/nuestromenu">Contáctanos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        // <nav className="navbar navbar-expand-lg navbar-light sticky-top navBarHeadBar p-4">
        //   <div className="container" id="navBox">
        //     <a className="navbar-brand" href="#"><img id="logoNav" src={logo} viewBox='0 0 300 100'/></a>
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //       <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //       <ul className='navbar-nav ms-auto'>
        //         <li className='nav-item'>
        //         <Link className="nav-link" to="/">Inicio</Link>
        //         </li>
        //         <li className='nav-item'>
        //         <Link className="nav-link" to="/nosotros">¿Quiénes Somos?</Link>
        //         </li>
        //         <li className='nav-item'>
        //         <Link className="nav-link" to="/nuestromenu">Nuestros Productos</Link>
        //         </li>
        //         <li className='nav-item'>
        //         <Link className="nav-link" to="/nuestromenu">Contáctanos</Link>
        //         </li>
                
        //       </ul>
        //       {/* <div className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll head-navbar">
        //         <Link to="/">Inicio</Link>
        //         <Link to="/nosotros">¿Quiénes Somos?</Link>
        //         <Link to="/nuestromenu">Nuestros Productos</Link>
        //         <Link to="/nuestromenu">Contáctanos</Link> */}
        //         {/* <a className="nav-link buttonae active" aria-current="page" href="#">Inicio</a>
        //         <a className="nav-link buttonae" href="#">Nuestros Productos</a>
        //         <a className="nav-link buttonae" href="#">Contáctanos</a> */}
        //       </div>
        //     </div>
        // </nav> 
      );
    }
}

export default HeadBar;