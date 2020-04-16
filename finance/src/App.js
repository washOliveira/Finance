import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {contas} from './contas';

class App extends Component {
	constructor(){
		super()
		this.state = {
			contas: contas,
			searchfield: ''
		}
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value})
	}
	
	render(){
		const filteredContas = this.state.contas.filter(contas => {
			return contas.nome.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return(
			<div className='tc bg-light-gray'>
				<h1>Contas</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList contas={filteredContas}/>
			</div>
		)
	}
}

export default App;