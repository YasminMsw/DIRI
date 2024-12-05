import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskLogging from './TaskLogging'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskLogging/>
    </>
  )
}

export default App
