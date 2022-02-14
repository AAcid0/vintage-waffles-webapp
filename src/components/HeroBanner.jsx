import React, { Component, Fragment } from 'react';
import "./styles/HeroBanner.css"
import logo from '../images/svg/LogoDarksvg.svg';

class HeroBanner extends Component {
    //<h1 className="slide-in-left"><span>Vintage Waffles</span></h1>
    render(){
        return(
            <Fragment>
                {/* <video id= 'videoHeroBanner' playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={vidfondo} type="video/mp4"/>
                </video> */}
                <div className="banner-img">
                    <img src={logo} className="animate__fadeIn logo"></img>
                    <div className="banner-txt">
                        {/*<p className="animate__fadeIn"><bold>TUS WAFFLES FAVORITOS ESTÁN AQUÍ</bold></p>*/}
                        <div className="scrolldown animate__bounceInUp"></div>
                    </div>
                    
                </div>
            </Fragment>
            
        );
    }
}
export default HeroBanner;