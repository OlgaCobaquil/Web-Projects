import React from "react"
import img from './giphy.gif'

const styles = {
	width:'2%',
	height: '2%',

}

export default class Personaje extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}