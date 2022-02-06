import React, { Component } from 'react';
import '../components/styles/CartaItem.css';

class CartaItem extends Component {
    //<img src={this.props.imgsrc} class="card-img" alt="..."/>
    render(){
        return(
            <div className="my-3 menu-item">
                <hr></hr>
                    <img  src={this.props.imgsrc} className="product-img"/>
                    <div className="menu-item-title">
                        <h4 className="tituloProducto mainText"><strong>{this.props.title}</strong></h4>
                        <span className="linea-puntos"></span>
                        <span className="precio-item mainText">{this.props.price}</span>
                    </div>
                    <div className="menu-item-desc">
                        <p>{this.props.dscr}</p>
                    </div>
                </div>
            
        );
    }
}

export default CartaItem;