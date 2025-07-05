import React from 'react';
import user_icon from '../../assets/user.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/padlock.png';

const Signin = () => {
  return (
    <form action="">
        <div className="w-screen h-screen flex items-center justify-center bg-blue-200">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="text-2xl font-bold text-gray-800">Login</div>
          <div className="underline w-16 h-1 bg-blue-500 rounded"></div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          
          <div className="flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
            <img src={email_icon} alt="Email Icon" className="w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Email Id"
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>
          <div className="flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
            <img src={password_icon} alt="Password Icon" className="w-5 h-5" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>
        </div>




        {/* Submit Buttons */}
        <div className="flex justify-between mt-10">
          {/* Navigate to Signup */}
          <a to="/signup">
            <div className="bg-blue-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition">
              Sign Up
            </div>
          </a>

          {/* Static Login Button (can be changed to a form submit later) */}
          <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition"
            >
              Login
            </button>
        </div>
      </div>
    </div>
    </form>
  )
}

export default Signin
