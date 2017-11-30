import React from "react"
import img from './pared.png'

const styles = {
	width: '2%',
	height: '2%'

}

export default class Menos extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}