import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import BasicComponents from './BasicComponents'
import PageNotFound from './PageNotFound'
import Tasks from './Tasks'



function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicComponents />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
