import React, { Component } from 'react';

export default class NewToDoForm extends Component {

  state = {
    value: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({title: this.state.value, completed: false})
    })
    .then(res => res.json())
    .then(newToDo => {
      this.props.addNewToDo(newToDo)
      this.setState({value: ''})
    })
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" placeholder="Title" value={this.state.value} onChange={this.handleChange}/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
