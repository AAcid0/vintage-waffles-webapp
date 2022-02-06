import React, { Component } from 'react';
import vidfondo from '../images/vids/waffles-reducidos.mp4';
import './styles/Horarios.css';

class Horarios extends Component {
    render(){
        return(
            <div  id="video-container" className="jumbotron">
                <div className="capaOscura"></div>
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={vidfondo} type="video/mp4"/>
                </video>
                <div className="video-container-text">
                    <h3 className="mainText">ORDENA TU WAFFLE A DOMICILIO</h3>
                    <p>¿Qué esperas para sorprender a aquellos que más amas?</p>
                    <div className="days-container">
                        <div className="day-hour">
                            <span className="dia">lunes</span>
                            
                            <span className="hora">Cerrado</span>
                        </div>
                        <div className="day-hour">
                            <span className="dia">martes</span>
                            
                            <span className="hora">8 am - 4 pm</span>
                        </div>
                        <div className="day-hour">
                            <span className="dia">miércoles</span>
                            
                            <span className="hora">8 am - 4 pm</span>
                        </div>
                        <div className="day-hour">
                            <span className="dia">jueves</span>
                            
                            <span className="hora">8 am - 4 pm</span>
                        </div>
                        <div className="day-hour">
                            <span className="dia">viernes</span>
                            
                            <span className="hora">8 am - 4 pm</span>
                        </div>
                        <div className="day-hour">
                            <span className="dia">sábado</span>
                            
                            <span className="hora">8 am - 7 pm</span>
                        </div>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default Horarios;