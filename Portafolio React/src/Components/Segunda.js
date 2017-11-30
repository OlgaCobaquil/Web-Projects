import React from 'react';
import imag3 from '../Images/pro3.png';
import imag4 from '../Images/pro4.png';
import './Segunda.css';

class Segunda extends React.Component {
  render() {
    return (
      <div className="Primera"> 
        <div className="rectangulo-grande">
          <h11>
            <span>
              Memoria
            </span>
            <br />
            Dom access and manipulation
          </h11>
          <div className="im-uno animated fadeInLeft">
            <img src={imag3} alt="memoria1"/>
          </div>
          <div className="im-dos animated fadeInRight">
            <img src={imag4} alt="memoria2"/>
          </div>
        </div>
      </div>

    )
  }
}

export default Segunda;