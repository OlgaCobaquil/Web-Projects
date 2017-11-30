// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import contadorReducers from './contadorReducer'

 export default combineReducers({
 	contador: contadorReducers
 });