import React from 'react'

const ToDoCard = (props) => {

  const buttonClass = props.completed ? "ui button orange" : "ui button blue"

  const updateToDo = () => {
    fetch(`http://localhost:3000/todos/${props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        completed: !props.completed
      })
    })
    .then(res => res.json())
    .then(updatedToDo => props.toggleComplete(updatedToDo))
  }

  const deleteFromServer = () => {
    fetch(`http://localhost:3000/todos/${props.id}`, {
      method: "DELETE"
    })
    .then(props.deleteToDo(props.id))
  }

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.title}</div>
        <button onClick={updateToDo} className={buttonClass}>{props.completed ? "Incomplete" : "Complete"}</button>
        <button onClick={deleteFromServer} className="ui button red">Delete</button>
      </div>  
    </div>
    )
}

export default ToDoCard