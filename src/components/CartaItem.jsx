import React, { Component } from 'react';
import '../components/styles/CartaItem.css';

class CartaItem extends Component {
    //<img src={this.props.imgsrc} class="card-img" alt="..."/>
    render(){
        return(
                <div className=" menu-item container">
                    <hr></hr>
                    <div className='row g-0'>
                        <div className='container'>
                            <div className='col-md-1 col-sm-4'>
                                <img  src={this.props.imgsrc} className="product-img"/>
                            </div>
                            <div className='col-md-11 col-sm-8'>
                                <div className="menu-item-title">
                                    <h4 className="tituloProducto mainText"><strong>{this.props.title}</strong></h4>
                                    <span className="precio-item mainText">{this.props.price}</span>
                                </div>
                            <div className="menu-item-desc">
                                <p>{this.props.dscr}</p>
                            </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            
        );
    }
}

export default CartaItem;