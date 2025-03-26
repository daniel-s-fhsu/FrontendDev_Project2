import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './UserInfo'
import Greeting from './Greeting'
import TaskComponent from './TaskComponent'
import Counter from './Counter'
import TaskForm from './TaskForm'

function App() {
  const [count, setCount] = useState(0)

  const taskArray = [{name: 'Feed dogs', description: 'Get the dogs some food'},
                    {name: 'Feed cats', description: 'Get the cats some food'},
                    {name:'Do homework', description: 'Spend some time getting schoolwork done'},
                    {name: 'Do work', description: 'Get work done for work'},
                    {name: 'Clean house', description: 'Do chores around the house'}];
  const [tasksWithId, setTasksWithId] = useState(taskArray.map((task, index) => ({name: task.name, description: task.description, id: crypto.randomUUID()}))); 


  const handleAlert = () => {
    alert("Showing an alert");
  };

  const handleSubmit = (name, description) => {
    const newTasksWithId = [...tasksWithId, {name, description, id: crypto.randomUUID()}];
    setTasksWithId(newTasksWithId);
  }

  return (
    <div>
      <Greeting username="Bob"/>
      <hr />
      <Greeting username="Alice" />
      <hr />
      <UserInfo handleClick={handleAlert}/>
      <hr />
      <TaskComponent />
      <hr />
      <Counter />
      <hr />
      <TaskForm handleSubmit={handleSubmit} />
      <br />
      <ul>
        {tasksWithId.map(task => (
          <li key={task.id}>
            {task.name} :: {task.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
