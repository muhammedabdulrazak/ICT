import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Nave from './components/Nave'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Api from './components/Api'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
      <Nave />
      <Routes>
        <Route path="/l" element={<Login />}/>
        <Route path="/s" element={<Signup />} />
        <Route path="/st" element={<StateBasics />} />
        <Route path="/c" element={<Counter />} />
        <Route path="/a" element={<Api />} />
        <Route path="/p" element={<Pokemon />} /> 
      </Routes>
    </>
  )
}
export default App

