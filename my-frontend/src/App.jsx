import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import Home from './components/home/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (

     <div>
      <Router>
     
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
        </Routes>
      </Router>
     </div>

  )
}

export default App;
