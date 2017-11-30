import React from 'react';
import imag5 from '../Images/pro5.png';
import imag6 from '../Images/pro6.png';
import './Cuarta.css';

class Cuarta extends React.Component {
  render() {
    return (
      <div className="Cuarta"> 
        <h11>
          <span>
            Proyecto 1
          </span>
          <br />
            React Pagina Web      
        </h11>
        <div className="rectangulo-grande-cuatro">
          <div className="im-uno-cuatro animated fadeInLeft">
            <img src={imag5} alt="proyecto1"/>
          </div>
          <div className="im-dos-cuatro animated fadeInRight">
            <img src={imag6} alt="proyecto2"/>
          </div>
        </div>
      </div>

    )
  }
}

export default Cuarta;