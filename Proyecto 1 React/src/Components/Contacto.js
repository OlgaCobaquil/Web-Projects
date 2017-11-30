import React from 'react';
import './Contacto.css'
import imag from '../Images/contacto.png';

class Contacto extends React.Component {
  render() {
    return (
      <div className="contacto">
        <img src={ imag } alt="contacto"/>
      </div>
    )
  }
}

export default Contacto;