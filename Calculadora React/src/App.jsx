import React from 'react';
import Panel from './Components/Panel';
import Display from './Components/Display';
import calcular from './calculo';
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      siguiente: null,
      operando: null,
    };
  }
  
  handleClick = (buttonName) => {
    this.setState(calcular(this.state, buttonName));
  } 

  render() {
    return (
      <div className="App">
        <Display
          value={this.state.siguiente || this.state.total || '0'}
        />
        
        <Panel
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}
export default App;