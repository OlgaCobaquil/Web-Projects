// Set up your application entry point here...
//connect de react dom import store 
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import { createStore } from 'redux'
import reducer from './reducers/index'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Root store={store}/>, document.getElementById('app'));
