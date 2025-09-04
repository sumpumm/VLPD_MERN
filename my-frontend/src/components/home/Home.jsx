import React, { useState } from 'react';
import './Home.css';
import {useSelector} from 'react-redux';
import { Navigate } from "react-router-dom";

const Home = () => {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  if (!isLoggedIn) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to License Plate Detection System</h1>
        <p className="text-lg text-gray-300 max-w-xl text-center mb-6">
        License Plate Detection System helps you detect and record license plates from live video footage.
          Login to access the camera and view detected license plates.
        </p>
        <button
          onClick={() => window.location.href = "/signin"} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          Login to Continue
        </button>
      </div>
    );
  }

  return <Navigate to="/webcam" replace />;
}

export default Home