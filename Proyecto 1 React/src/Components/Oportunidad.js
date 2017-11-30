import React from 'react';
import imag from '../Images/pic-home-2.png';
import './Oportunidad.css'

class Oportunidad extends React.Component {
  render() {
    return (
      <div className="oportunidad"> 
        <div className="rectangulo-grande">
          <div className="edificio animated fadeInLeft">
            <img src={imag} alt="edificio"/>
          </div>
          <div className="letras animated fadeInRigth">
            <h1>
              <span>
                The
              </span>  
              <br />
              Opportunity
            </h1>
            <p> Conceived by Michael Maltzan with Gensler, and adjacent to Playa Vista Central Park, The Brickyard brings distinctive design and cohesive amenities to the creative landscape within a burgeoning new community. Named for its unique exterior, The Brickyard will offer 430,000 RSF of connected office, amenity and green space upon completion in early 2017.</p>
            <div className="botoncito-op">Tour de Brickyard</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Oportunidad;