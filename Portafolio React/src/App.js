import React, { Component } from 'react';
import Inicio from './Components/Inicio';
import Nombre from './Components/Nombre';
import Primera from './Components/Primera';
import Segunda from './Components/Segunda';
import Tercera from './Components/Tercera';
import Cuarta from './Components/Cuarta';
import Fin from './Components/Fin';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      className: 'hidden'
    }
  }

  handleScroll() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 700 ) {
      this.setState({
        className: 'show'
      })
    }else {
      this.setState({
        className: 'hidden'
      })
    }
  }
  
  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  render() {
    return (
      <div className="App">
        <Nombre className={this.state.className} />
        <Inicio/>
        <Primera/>
        <Segunda/>
        <Tercera/>
        <Cuarta/>
        <Fin/>
      </div>
    );
  }
}

export default App;
