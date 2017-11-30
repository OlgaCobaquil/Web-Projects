import React from 'react';
import './Inicio.css';
import imagen from '../Images/Home.png'

class Inicio extends React.Component {
  render() {
    return (
      <div className="inicio">
        <img src={ imagen } alt="inicio" />
        <div className="titulo animated tada">
          <h1>
            <span>portafolio</span>
            <br /> 
            web
          </h1>
        </div>
      </div>
    )
  }
}

export default Inicio;