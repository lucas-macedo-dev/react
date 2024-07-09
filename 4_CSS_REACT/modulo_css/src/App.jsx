import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from '../components/MyComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>React com CSS</h1>
      <MyComponent></MyComponent>
      <p>Parágrafo do app.jsx</p>
    </div>
  )
}

export default App
