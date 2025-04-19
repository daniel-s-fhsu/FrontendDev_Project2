import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicComponents from './pages/BasicComponents'
import PageNotFound from './pages/PageNotFound'
import Tasks from './pages/Tasks'
import Header from './pages/Header';



function App() {

  

  return (
    <>
   <BrowserRouter>
  <Header />
  <main className="content">
    <Routes>
      <Route path="/" element={<BasicComponents />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </main>
</BrowserRouter>
    </>
  )
}

export default App
