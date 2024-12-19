
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NoMatch from './components/NoMatch'
import Home from './components/Home'
import Ayuda from './components/Ayuda'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ayuda" element={<Ayuda/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
       
    </>
  )
}

export default App
