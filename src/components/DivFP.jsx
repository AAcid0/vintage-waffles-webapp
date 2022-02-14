import React, { Component } from 'react';
import './styles/DivFP.css'
import loving from '../images/svg/loving1.svg'


class DivFP extends Component {
    render(){
        return(
            <div className="container-fluid py-5" id="containerfluid">
                
                <div className="row">
                    <div  className='row d-block'>
                        <h1 className="animate__bounceInRight mainText">VINTAGE WAFFLES</h1>
                        <p className="sec-Text animate__bounceInRight textoDiv text-uppercase"><strong>un espacio lleno de dulzura, amor y buenas vibras</strong></p>
                        <hr style={{"width":"50%","margin":"auto"}} className='my-4'/>
                    </div>
                    
                    <div className="col">
                        <img id='elloving' className='mx-auto d-block mt-0' src={loving} viewBox='0 0 400 400'/>
                        {/* <div className='container'>
                        <div class="image-mosaic">
                            <div
                                class="card card-wide"
                                style={{"backgroundImage" : "url("+img1+")","backgroundPosition":"0% 70%"}}
                            ></div>
                            <div
                                class="card card-tall"
                                style={{"backgroundImage": "url("+img3+")"}}
                            ></div>
                            <div
                                class="card"
                                style={{"backgroundImage": "url("+img2+")"}}
                            ></div>
                            <div
                                class="card"
                                style={{"backgroundImage": "url("+img1+")"}}
                            ></div>
                        </div>
                        </div> */}
                        
                    </div>
                    <div className="col">
                    
                            
                            <p className="animate__bounceInRight textoDiv">En <strong>Vintage Waffles</strong> encontrarás deliciosos productos hechos con amor para que los disfrutes junto a las personas que mas quieres</p>
                            {/* <p className="animate__bounceInRight textoDiv">
                            Expresa tus emociones a tus seres queridos con uno de nuestros deliciosos productos artesanales que puedes acompañar con 
                            lindas decoraciones
                            </p> */}
                        
                    </div>
                </div>
            </div>
        );
    }    
}




export default DivFP;