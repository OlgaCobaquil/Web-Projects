import React from 'react';
import imag1 from '../Images/ts_logo.png';
import imag2 from '../Images/logo-tishman-brickyard-nav.png';
import './Navi.css'

class Navi extends React.Component {
  render() {
    return (
      <div className={this.props.className}>  	
	    <div className="header-wrapper"  >
		  <div className="header">
			<div className="float-left ts-logo-header"><img src={ imag1 } alt="Tishman Brickyard"/></div>
			  <div className="navi">
				<ul>
				  <li><a href="index.php" title="The Opportunity">The Opportunity</a></li>
				  <li><a href="the-offices.php" title="The Offices">The Offices</a></li>
				  <li className="brickyard-nav-li"><a className="brickyard-logo-nav" href="/index.php"><img src={ imag2 } alt="Tishman Brickyard"/></a></li>
				  <li><a href="amenities.php" title="Amenities">Amenities</a></li>
				  <li><a href="the-location.php" title="The Location">The Location</a></li>
				</ul>
				</div>
				<div className="nav-contact"><a href="contact-us.php">Contact Us</a></div>
			</div>
		</div>
	</div>
	)
  }
}
	
export default Navi;
