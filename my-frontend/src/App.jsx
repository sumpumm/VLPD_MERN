import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (

     <Signin/>

  )
}

export default App;
