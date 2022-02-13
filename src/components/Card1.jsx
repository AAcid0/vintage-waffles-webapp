import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import './styles/Card1.css'
import img1 from '../images/cliente1.jpeg';

const Card1 = (props) => {
    return ( 

        <MDBCard style={{ width: '18rem' }}>
            <MDBCardImage src={props.imgsrc} alt='...' position='top' />
        </MDBCard>
    
    );
}

export default Card1;
