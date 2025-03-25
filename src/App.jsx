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

  const taskArray = ['Feed dogs', 'Feed cats', 'Do homework', 'Do work', 'Clean house'];
  const tasksWithId = taskArray.map((task, index) => ({task: task, id: index})); 

  const handleAlert = () => {
    alert("Showing an alert");
  };

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
      <TaskForm />
      <hr />
      <br />
      <ul>
        {tasksWithId.map(task => (
          <li key={task.id}>
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
