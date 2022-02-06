import React, { Component } from 'react';
import logo from '../images/logoClaroHor.svg';
import './styles/HeadBar.css';
import {Link} from 'react-router-dom';

class HeadBar extends Component {
    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-light sticky-top navBarHeadBar p-4">
          <div className="container-fluid" id="navBox">
            <a className="navbar-brand" href="#"><img id="logoNav" src={logo} viewBox='0 0 300 100'/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll head-navbar">
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">¿Quiénes Somos?</Link>
                <Link to="/nuestromenu">Nuestros Productos</Link>
                <Link to="/nuestromenu">Contáctanos</Link>
                {/* <a className="nav-link buttonae active" aria-current="page" href="#">Inicio</a>
                <a className="nav-link buttonae" href="#">Nuestros Productos</a>
                <a className="nav-link buttonae" href="#">Contáctanos</a> */}
              </div>
            </div>
          </div>
        </nav> 
      );
    }
}

export default HeadBar;