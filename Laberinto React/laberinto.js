import React from "react"
import $ from "jquery"

import Personaje from './Personaje.js'
import Meta from './Meta.js'

import Espacio from './Espacio.js'
import Mas from './Mas.js'
import Menos from './Menos.js'
import img from './download.png'

const styles = {
	background: `url(${img})`,
	backgroundSize: 1080
}

export default class Laberinto extends React.Component{
	
	constructor(){
		super()
		this.state = {
			laberinto:[],
			x:1,
			y:1,
			
		}

		$.getJSON('http://52.88.26.79:7000/?type=json&w=8&h=8').done((result)=>{
			this.setState({laberinto:result})
		})
	}

//mover el muñequito

	handleKeyDown(e) {

		e.preventDefault()

        if (e.key === "ArrowLeft") {
            const movimientosLab = this.state.laberinto
            if(movimientosLab[this.state.y][this.state.x-1] == " "){
                
                movimientosLab[this.state.y][this.state.x] = " "
                movimientosLab[this.state.y][this.state.x-1] = "p"
                this.setState({
                    x: this.state.x -1,
                    laberinto: movimientosLab
                })
            }
            if(movimientosLab[this.state.y][this.state.x+1] == "g"){
                
                movimientosLab[this.state.y][this.state.x] = " "
                movimientosLab[this.state.y][this.state.x+1] = "p"
                this.setState({
                    x: this.state.x +1,
                    laberinto: movimientosLab,
    
                })
                alert("Has Ganado!");
                
            } 
        }
        if (e.key === "ArrowRight") {
        	const movimientosLab = this.state.laberinto
        	if(movimientosLab[this.state.y][this.state.x+1] == " "){
        		
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: movimientosLab

            	})
        	} 
        	if(movimientosLab[this.state.y][this.state.x+1] == "g"){
        		
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: movimientosLab,
                	
            	})
            	alert("Has Ganado!");
            	
        	} 
        }
        
        if (e.key === "ArrowUp") {
            const movimientosLab = this.state.laberinto
        	if(movimientosLab[this.state.y-1][this.state.x] == " "){
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y-1][this.state.x] = "p"
            	this.setState({
                	y: this.state.y -1,
                	laberinto: movimientosLab
            	})
        	}
        	if(movimientosLab[this.state.y][this.state.x+1] == "g"){
        		
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: movimientosLab,
                	
            	})
            	alert("Has Ganado");
            	
        	} 
        }
        if (e.key === "ArrowDown") {
            const movimientosLab = this.state.laberinto
        	if(movimientosLab[this.state.y+1][this.state.x] == " "){
        		
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y+1][this.state.x] = "p"
            	this.setState({
                	y: this.state.y + 1,
                	laberinto: movimientosLab
            	})
        	}
        	if(movimientosLab[this.state.y][this.state.x+1] == "g"){
        		
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: movimientosLab,
                	
            	})
            	alert("Has Ganado!");
            	
        	} 
        }

    }

	render(){
		return <div id="Laberinto" style = {styles} onKeyDown = {this.handleKeyDown.bind(this)} tabIndex = "0">
			{
				this.state.laberinto.map(row=>{
					let columns = row.map(column =>{
						if(column== "+")
						{
							return <Mas/>
						}
						if(column == "-" || column =="|")
						{
							return <Menos/>
						}
						if(column == " "){
							return <Espacio/>
						}
						if(column == "p"){
							return <Personaje/>
						}
						if(column == "g"){
							return <Meta/>
						}
						return <span>{column}</span>
					})
					columns.push(<br />)
						return columns
				})
			}
		</div>
	}

}