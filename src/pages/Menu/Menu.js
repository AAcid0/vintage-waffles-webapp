import React, {Fragment, useState} from 'react';
import logo from '../../images/Recurso.svg';
import Carta from './component/Carta';
import './menu.css';
import { v4 as uuidv4 } from 'uuid';
import MenuJSON from '../../infoPlatos/Menu.json'

const Menu = () => {

    const [tipoPlato, settipoPlato] = useState("");

    const handleCLick = (e, tipo) => {
        e.preventDefault()
        settipoPlato(tipo)
    }
    
    const renderProductos = (tipo) => {
        let listaPlatos = MenuJSON.filter(function(item) {
            return item.tipo == tipo
        })
        return (
        <div className='d-flex flex-row'>
            {listaPlatos.map(ele => <Carta key={uuidv4()} imgsrc={ele.imgurl} nombreProducto={ele.nombre} ingredientes={ele.ingredientes} precio={ele.precio} />)}
        </div>
        )
    }
    return ( 
        <Fragment>
            <div id='jumbotronMenu' className='jumbotron'>
                <div id='containerMenu' className='container'>
                    <img id='svgLogoBanner' className='mx-auto d-block py-2' src={logo} viewBox='0 0 150 150' />
                    <h3 className='mainText'>NUESTRO MENÚ</h3>
                </div>
            </div>
            <div style={{"backgroundColor":"#ececec"}} className='row g-0'> {/* g-0 no gutters overflow de row */}
            <div className='container'>
                <p style={{"color":"black"}} className='textoDiv'>Échale un vistazo a nuestra carta de deliciosos productos 100% artesanales</p>
                {/* Barra de navegacion con tipos de platos */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navBarMenuPage">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-MenuPage">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => handleCLick(e, "waffle")}>Waffles</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => handleCLick(e, "adicion")}>Adiciones</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => handleCLick(e, "desa_pos")}>Desayunos Y Postres</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => handleCLick(e, "decora")}>Decoraciones</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
                {tipoPlato ? renderProductos(tipoPlato) : (<p className="textoDiv">Presiona un elemento para desplegar</p>)}     
            </div>
        </Fragment>
        
     );
}
 
export default Menu;