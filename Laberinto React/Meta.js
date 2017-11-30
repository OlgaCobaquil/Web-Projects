import React from "react"
import img from './dance.gif'

const styles = {
	width: '2%',
	height: '2%'

}

export default class Meta extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}