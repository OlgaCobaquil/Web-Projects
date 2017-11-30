import React from "react"
import img from './download.png'

const styles = {
	width: '100%',
	height: '100%'
}

export default class Fondo extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}