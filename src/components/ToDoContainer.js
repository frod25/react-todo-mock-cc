import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {
  
  state = {
    toDos: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/todos')
    .then(res => res.json())
    .then(toDoArray => this.setState({toDos: toDoArray}))
  }

  toggleComplete = (updatedToDo) => {
    const updatedToDos = this.state.toDos.map(toDo => toDo.id === updatedToDo.id ? updatedToDo : toDo)
    this.setState({toDos: updatedToDos})
  }

  addNewToDo = newToDo => {
    this.setState({
      toDos: [...this.state.toDos, newToDo]
    })
  }

  deleteToDo = toDoId => {
    const updatedToDos = this.state.toDos.filter(toDo => toDo.id !== toDoId)
    this.setState({toDos: updatedToDos})
  }

  completedArray = () => this.state.toDos.filter(toDo => toDo.completed)
  incompleteArray = () => this.state.toDos.filter(toDo => !toDo.completed)

  render() {
    return (
      <div id="todo-container">
        <NewToDoForm addNewToDo={this.addNewToDo}/>
        <CompletedContainer toDos={this.completedArray()} toggleComplete={this.toggleComplete} deleteToDo={this.deleteToDo}/>
        <IncompleteContainer toDos={this.incompleteArray()} toggleComplete={this.toggleComplete} deleteToDo={this.deleteToDo}/>
      </div>
    );
  }
}
