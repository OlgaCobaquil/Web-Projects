import React from 'react';
import './Inicio.css';
import imagen from '../Images/bajo.png'

class Inicio extends React.Component {
  render() {
    return (
      <div className="inicio">
        <img src={ imagen } alt="inicio" />
      </div>
    )
  }
}

export default Inicio;