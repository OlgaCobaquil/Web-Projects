import React from "react"
import img from './columna.png'

const styles = {
	width: '2%',
	height: '2%'

}

export default class Mas extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}
