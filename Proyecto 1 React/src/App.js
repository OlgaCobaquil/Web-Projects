import React, { Component } from 'react';
import Home from './Components/Home';
import Oportunidad from './Components/Oportunidad';
import Organico from './Components/Organico';
import Amenities from './Components/Amenities';
import Playa from './Components/Playa';
import Contacto from './Components/Contacto';
import Navi from './Components/Navi';

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
    if (document.documentElement.scrollTop > 684 ) {
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
        <Navi className={this.state.className} />
        <Home/>
        <Oportunidad/>
        <Organico/>
        <Amenities/>
        <Playa/>
        <Contacto/>
      </div>
    );
  }
}

export default App;
