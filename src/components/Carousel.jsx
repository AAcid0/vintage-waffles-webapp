import React, {Fragment, useEffect} from 'react';
import './styles/Carousel.css';
import img1 from '../images/products/cajatropical2.jpeg';
import img3 from '../images/pd2.jpg';
import img2 from '../images/products/desayuno1.png'; //cambiar
import img5 from '../images/planNiños.jpeg';
import img4 from '../images/products/pd2.jpg';
import img6 from '../images/products/muestra1.jpeg';
import img7 from '../images/products/waffle1.jpeg';
import img8 from '../images/products/cajaDecorada.jpg';
const Carousel = () => {
/*   const showSlides = () => {
  var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

    var index = 0, time = 5000;
    slides[index].classList.add('active');

    setInterval( () => {
      slides[index].classList.remove('active');
      
      index++;
      if (index === slides.length) index = 0;

      slides[index].classList.add('active');

    }, time);
}
  } 
  useEffect(() => {
    showSlides();
  }) */
    return (
      <div className="image-mosaic">
      <div
        className="card card-wide"
        style={{"backgroundImage" : "url("+img1+")","backgroundPosition":"0% 70%",backgroundSize:"100%"}}
      ></div>
      <div
        className="card card-tall"
        style={{"backgroundImage": "url("+img3+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img2+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img5+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img4+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img6+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img7+")"}}
      ></div>
      <div
        className="card"
        style={{"backgroundImage": "url("+img8+")"}}
      ></div>
      {/* <Fragment>
        <div id="slideshow-example" data-component="slideshow">
		      <div role="list">
			      <div className="slide">
				      <img className="imgCarousel" src="https://i.ibb.co/RpnPnsZ/pd1.jpg" alt=""/>
			      </div>
			      <div className="slide">
				      <img className="imgCarousel" src="https://i.ibb.co/KLXDdRd/pd2.jpg" alt=""/>
			      </div>
			      <div className="slide">
				      <img className="imgCarousel" src="https://i.ibb.co/0mPB5zr/pd3.jpg" alt=""/>
			      </div>
		      </div>
	      </div>
    </Fragment>  */}
    </div>
      
  )
  }
 
export default Carousel;