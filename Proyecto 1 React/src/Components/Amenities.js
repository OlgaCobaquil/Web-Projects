import React from 'react';
import imag from '../Images/pic-home-4.png';
import './Amenities.css'

class Amenities extends React.Component {
  render() {
    return (
      <div className="amenities"> 
        <div className="rectangulo-grande">
          <div className="personas animated fadeInLeft">
            <img src={imag} alt="people"/>
          </div>
          <div className="letras animated fadeInRight">
            <h1>
              <span>
                Curated
              </span>
              <br />
              Amenities
            </h1>
            <p>Catering to a creative community and enhancing a true live/work/play environment, The Brickyard will offer unparalleled amenities set within acres of green space. Highlights include: 9,300 RSF of daycare facilities, 9,200 RSF of prime retail, rooftop terraces and outdoor meeting areas, on-site cafeterias, abundant bike storage with changing areas and showers, and an ample parking ratio of 2.9/1,000.</p>
            <div className="botoncito-amen">Experience the Amenities</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Amenities;