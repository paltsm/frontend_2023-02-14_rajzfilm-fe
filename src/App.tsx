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
		return <div>
			<table>
				<thead className='thead'><td>név</td><td>év</td></thead>
				<tbody>
					{this.state.rajzfilmek.map((r)=> <tr><td>{r.nev}</td><td>{r.megjelenesEv}</td></tr>)}
				</tbody>
			</table>
		</div>
	
	}
}

export default App;