import React from 'react';

const ToDoItem = ({task, toggleTask, deleteTask}) => {
        return (
            <div style={{textAlign: "center", margin: "2px"}}>
                <input 
                    type = "checkbox"
                    checked ={task.completed} 
                    onChange= {() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
                <button onClick={() => deleteTask(task.id)}>Zruš</button>
            </div>
        )
    }


export default ToDoItem