import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UserInfo from './UserInfo'
import Greeting from './Greeting'
import TaskComponent from './TaskComponent'
import Counter from './Counter'
import TaskForm from './TaskForm'
import TaskEntryDisplay from './TaskEntryDisplay'
import BasicComponents from './BasicComponents'



function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicComponents />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
