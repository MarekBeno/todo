import { useState, useEffect } from 'react'
import './App.css'
import ToDoItem from './componenets/ToDoItem'



function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"))
    if (storedTasks) {
      setTasks(storedTasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false}
    setTasks([...tasks, newTask])
  }

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) => 
        task.id === taskId ? {...task, completed: !task.completed} : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    
    <div>
      <h1 className="mainText">ToDo List</h1>
      <form className="list"
        onSubmit={(event) => {
          event.preventDefault()
          const taskText = event.target.elements.task.value
          if (taskText) {
            addTask(taskText)
            event.target.reset()
          }
        }}
      >
        <input className = "textIn"type="text" name="task" placeholder="Pridajte úlohu" />
        <button type ="submit">Pridaj</button>
      </form>

      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task ={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
         /> 
      ))}

      <footer className='credits'>
        <h3>App by Marek Beňo</h3>
      </footer>
    </div>
  )
}

export default App
