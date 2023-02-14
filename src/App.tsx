import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface Rajzfilm{
	nev:string;
	megjelenesEv:number;
}

interface State{
	nev:string;
	megjelenesEv:number;
	rajzfilmek:Rajzfilm[]
}

class App extends Component<{},State>{
	constructor(props:{}){
		super(props);

		this.state={
			nev:"",
			megjelenesEv:0,
			rajzfilmek:[]
		}
		this.adatok()
	}
	adatok = async() => {
		const response=await fetch('http://localhost:3000/rajzfilm')
		let data=await response.json()
		this.setState({
			rajzfilmek:data.rajzfilmek

		})
	}

	render(){
		return <table>
				{this.state.rajzfilmek.map((r)=> <tr><td>{r.nev}</td><td>{r.megjelenesEv}</td></tr>)}
			</table>
	
	}
}

export default App;