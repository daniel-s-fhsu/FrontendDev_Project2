import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicComponents from './pages/BasicComponents'
import PageNotFound from './pages/PageNotFound'
import Tasks from './pages/Tasks'
import Header from './pages/Header';
import SignInForm from './pages/SignIn';
import { AuthProvider } from './UserContext';
import ProtectedRoute from './routes/ProtectedRoute';


function App() {

  

  return (
    <>
    <AuthProvider>
   <BrowserRouter>
  <Header />
  <main className="content">
    <Routes>
      <Route path="/" element={<BasicComponents />} />
      <Route path="/signIn" element={<SignInForm />} />
      <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </main>
</BrowserRouter>
</AuthProvider>
    </>
  )
}

export default App
