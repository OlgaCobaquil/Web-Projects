import Button from './Button';
import React from 'react';
import './Panel.css'

class Panel extends React.Component {
  handleClick = (buttonName) => {
  	this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <div className="button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} ancho/>
          <Button name="<" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} operaciones />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} operaciones />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} operaciones />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} operaciones />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} ancho />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} operaciones />
        </div>
      </div>
    );
  }
}

export default Panel;