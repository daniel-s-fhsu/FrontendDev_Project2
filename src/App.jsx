import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInfo from './UserInfo'
import Greeting from './Greeting'
import TaskComponent from './TaskComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Greeting />
      <UserInfo />
      <TaskComponent />
    </div>
  )
}

export default App
