import {useState, useEffect} from 'react';
import CartaItem from './CartaItem';
import './styles/Minicarta.css'
import Menu from '../infoPlatos/Menu.json'
import { v4 as uuidv4 } from 'uuid';
import pd1 from '../images/products/pd1.jpg'; //Explosión de colores
import pd3 from '../images/products/pd3.jpg'; //Explosión de maní
import pd4 from '../images/pd1.jpg'; //Tradicional
import pd5 from '../images/products/pd5.jpeg'; //Chocolatoso
import pd2 from '../images/products/pd2.jpg'; //Mix de frutas

const Minicarta = () => {
    const [tipoPlato, settipoPlato] = useState(""); //titulo debajo de un poco de lo nuestro, cambia con click al nav

    const handleCLick = (e, plato) => {
        e.preventDefault();
        settipoPlato(plato);
    }
    
    const renderiza = (plato) => {
        let listaElem = Menu.filter(function(item) {
            return item.tipo == plato
        })
         return(
            <div className="primerTab">
                <h3 className='altText tipo-plato'>- {listaElem[0].titulo} -</h3>
                {listaElem.map(item => <CartaItem key={uuidv4()} imgsrc={item.imgurl} title={item.nombre} price={item.precio} dscr={item.ingredientes}/>)}
            </div>
            )
    }

    return ( 
        <div className="hero-menu wrapper">
            <hgroup>
                <h1 className='mainText'>UN POCO DE LO NUESTRO</h1>
            </hgroup>
            <p id='flechita' className="bi bi-arrow-down-circle m-4 text-center"></p>
            <div className='container' style={{width:"500px"}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light navBarMenu border border-dark d-flex">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul id='navBarMiniCarta' className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => handleCLick(e, "waffle")}>Waffles</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => handleCLick(e, "adicion")}>Adiciones</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-nowrap" onClick={e => handleCLick(e, "desa_pos")}>Desayunos Y Postres</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={e => handleCLick(e, "decora")}>Decoraciones</a>
                                </li>
                            </ul>
                        
                        </div>
                    </div>
                </nav>
            </div>
                
            <div className="tabs-container">
                <div className="tab1">
                    {
                        tipoPlato ? renderiza(tipoPlato) : (<p className="textoDiv">Échale un vistazo a nuestro menú</p>)
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Minicarta;
