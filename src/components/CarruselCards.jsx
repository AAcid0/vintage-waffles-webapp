import React, { useEffect } from 'react';
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'
import Card1 from './Card1';

import img1 from '../images/clients/cliente1.png';
import img2 from '../images/clients/cliente2.png';
import img3 from '../images/clients/cliente3.png';
import img4 from '../images/clients/cliente4.png';
import img5 from '../images/clients/cliente5.png';
import img6 from '../images/clients/cliente6.png';
import img7 from '../images/clients/cliente7.png';
import img8 from '../images/clients/cliente8.png';
import img9 from '../images/clients/cliente9.png';
import img10 from '../images/clients/cliente10.png';
import img11 from '../images/clients/cliente11.png';

import './styles/Carrusel.css'

const CarruselCards = () => {
    useEffect(() => {
        new Swiper('.swiper', {
            slidesPerView: 1,
            speed: 400,
            spaceBetween: 100,
            breakpoints:{
                320:{
                    slidesPerView: 2,
                    spaceBetween: 100
                },

                640:{
                    slidesPerView: 2,
                    spaceBetween: 100
                },
                720:{
                    slidesPerView: 3,
                    spaceBetween: 100
                }
            },
            autoplay: {
                delay: 5000,
            }
            
        })
    })
    return ( 
        <div className="jumbotron jumbotron-fluid cajaCarrusel">
        <p className="lg-text display-1 text-center pt-2" style={{"fontSize" : "60px"}}>ÚNETE YA A LA FAMILIA<br/><i>#WAFFLELOVERS</i></p>
            <div className="swiper pb-3 px-4">
                <div className="swiper-wrapper">
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img1} />
                    </div>
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img2} />
                    </div>
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img3} />
                    </div>
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img4} />
                    </div>
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img5} />
                    </div>
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img6} />
                    </div>
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img7} />
                    </div>
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img8} />
                    </div>
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img9} />
                    </div>
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img10} />
                    </div>
                    <div className="swiper-slide d-flex justify-content-center">
                        <Card1 imgsrc={img11} />
                    </div>
                </div>
            </div>

{/*         <p className="lg-text display-1 text-center pb-3" style={{"fontSize" : "60px"}}><br/>¿QUÉ ESPERAS PARA UNIRTE A ELLOS?</p>
 */}    </div>
     );
}
 
export default CarruselCards;
