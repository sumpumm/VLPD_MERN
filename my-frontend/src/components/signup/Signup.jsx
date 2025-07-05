import React from 'react';

import user_icon from '../../assets/user.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/padlock.png';

const Signup = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-200">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="text-2xl font-bold text-gray-800">Sign Up</div>
          <div className="underline w-16 h-1 bg-blue-500 rounded"></div>
        </div>

        {/* Form Start */}
        <form  className="space-y-4">
          <div>
            <div className="flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
              <img src={user_icon} alt="User Icon" className="w-5 h-5" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
          </div> 

          <div>
            <div className="flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
              <img src={email_icon} alt="Email Icon" className="w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
              <img src={password_icon} alt="New Password Icon" className="w-5 h-5" />
              <input
                type="password"
                name="password"
                placeholder="New Password"
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 border border-gray-300 rounded px-3 py-2">
              <img src={password_icon} alt="Confirm Password Icon" className="w-5 h-5" />
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          {/* Already have an account? */}
          <div className="text-sm text-right text-gray-600">
            Already have an account?
            <a to="#" className="text-blue-600 hover:underline cursor-pointer">
              Login
            </a>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;
