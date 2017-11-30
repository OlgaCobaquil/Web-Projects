import React from 'react';
import imag1 from '../Images/pro1.png';
import imag2 from '../Images/pro2.png';
import './Primera.css';

class Primera extends React.Component {
  render() {
    return (
      <div className="Primera"> 
        <div className="rectangulo-grande">
          <div className="im-uno animated fadeInLeft">
            <h11>
              <span>
                CSS
              </span>
              <br />
              Positions
            </h11>
            <img src={imag2} alt="casita"/>
          </div>
          <div className="im-dos animated fadeInRight">
            <h11>
              <span>
                Calculadora
              </span>
              <br />
              React
            </h11>
            <img src={imag1} alt="calculadora"/>
          </div>
        </div>
      </div>

    )
  }
}

export default Primera;