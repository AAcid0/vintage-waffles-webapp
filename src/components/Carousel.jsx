import React, {Fragment, useEffect} from 'react';
import './styles/Carousel.css';
import img1 from '../images/products/pd4.jpg';
import img3 from '../images/pd2.jpg';
import img2 from '../images/clientes.JPG';
import img5 from '../images/planNiños.jpeg';
import img4 from '../images/products/pd10.jpg';
import img6 from '../images/products/muestra1.jpeg';

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
        style={{"backgroundImage": "url("+img5+")"}}
      ></div>
      <div
        class="card"
        style={{"backgroundImage": "url("+img4+")"}}
      ></div>
      <div
        class="card"
        style={{"backgroundImage": "url("+img6+")"}}
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