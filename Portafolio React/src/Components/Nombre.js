import React from 'react';
import imag2 from '../Images/Html-512.png';
import './Nombre.css'

class Nombre extends React.Component {
  render() {
    return (
      <div className={this.props.className}>  	
	    <div className="header-wrapper"  >
		  <div className="header">
			  <div className="navi">
				<ul>
				  <li><a href="hi" >Olga Lucia Cobaquil </a></li>
				  <li><a href="https://github.com/OlgaCobaquil/Web-Projects" >GitHub </a></li>
				  <li className="centro"><a className="brickyard-logo-nav" href="/index.php"><img src={ imag2 } alt="centro"/></a></li>
				  <li><a href=" https://codepen.io/olcb/" >CodePen </a></li>
				  <li><a href="hi" >olga.cobaquil94@gmail.com</a></li>
				</ul>
				</div>
			</div>
		</div>
	</div>
	)
  }
}
	
export default Nombre;