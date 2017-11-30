import React, { Component} from 'react';
import { connect } from 'react-redux';
import incrementAction from '../actions/incrementAction'
class App extends Component{
	render(){
		return (
			<div id="App">
			hello world :D {this.props.count}
			<h1 onClick={this.props.doIncrement}>Hello world {this.props.count} veces</h1>

			</div>);
	}

}

function mapStateToProps(state) {
  return {
    count: state.contador.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doIncrement: () => { dispatch(incrementAction) }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)