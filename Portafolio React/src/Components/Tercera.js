import React from 'react';
import imag5 from '../Images/pro7.png';
import imag6 from '../Images/pro8.png';
import './Segunda.css';

class Tercera extends React.Component {
  render() {
    return (
      <div className="Primera"> 
        <div className="rectangulo-grande">
          <h11>
            <span>
            laberinto 
            </span>
            <br />
            React - stack de desarrollo       
          </h11>
          <div className="im-uno animated fadeInLeft">
            <img src={imag5} alt="laberinto1"/>
          </div>
          <div className="im-dos animated fadeInRight">
            <img src={imag6} alt="laberinto2"/>
          </div>
        </div>
      </div>

    )
  }
}

export default Tercera;