import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {

    const renderCards = () => {
        return props.toDos.map((toDo) => 
            <ToDoCard 
                key={toDo.id} 
                title={toDo.title}
                completed={toDo.completed}
                id={toDo.id}
                toggleComplete={props.toggleComplete}
                deleteToDo={props.deleteToDo}
            />
        )
      }

    return (
        <div>
            <h1>Completed Todos</h1>
             {renderCards()}
        </div>
    )
}

export default CompletedContainer