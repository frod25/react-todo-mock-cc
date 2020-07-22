import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {

    
    
    state = {
        searchTerm: ""
    }
  
    handleOnChange = (event) => {
       this.setState({searchTerm: event.target.value}) 
    }

    renderCards = () => {
      const searchFiltered = this.props.toDos.filter(toDo => {
        return toDo.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      })
      return searchFiltered.map((toDo) => 
        <ToDoCard 
          key={toDo.id}
          title={toDo.title}
          completed={toDo.completed}
          id={toDo.id}
          toggleComplete={this.props.toggleComplete}
          deleteToDo={this.props.deleteToDo}
        />
      )
    }

  render() {
    return (
        <div>
            <h1>Incomplete Todos</h1>
            <SearchBarComponent handleOnChange={this.handleOnChange}/>
            {this.renderCards()}
        </div>
    )
  }
}
