import React from 'react';
import './Home.css';
import imag from '../Images/pic-home-1.png';

var tamanio = {
  width: "100%",
};

class Home extends React.Component {
  render() {
    return (
      <div className="home"> 
        <img src={ imag } style={ tamanio } alt="edificio"/>
        <div className="logo"></div>
        <div className="contenido animated slideInUp">The Brickyard<br />At the intersection of aspiration and opportunity</div>
      </div>
    )
  }
}

export default Home;
