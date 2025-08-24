import React, { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import Home from './components/home/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './components/nav/Nav'
import { authActions } from './store/index';
import { useDispatch } from 'react-redux';
import WebcamCap from './components/webcam/WebcamCap'

function App() {
  const dispatch =useDispatch();

  //useEffect(()=>{
    //const id=sessionStorage.getItem("id");
   //if(id){
    //dispatch(authActions.login());
   //}
  //},[]);
  
  
  return (

     <div>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/signin" element={<Signin/>}/>
          <Route exact path="/webcam" element={<WebcamCap/>}/>
        </Routes>
      </Router>
     </div>

  )
}

export default App;
