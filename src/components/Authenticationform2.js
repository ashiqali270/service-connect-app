import React, { useState } from "react";
import { FaEnvelope,FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Authenticationform2() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return <section className="flex flex-col items-center justify-center min-h-screen font-sans p-4 bg-primary ">
    
      <div>
      <div className="p-6 w-full max-w-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Getting Started.!
        </h2>
       </div>
      <div className="flex items-center bg-gray-300 rounded-lg px-3 py-2 mb-3">
          <FaEnvelope className="text-gray-700 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent w-full focus:outline-none text-gray-800"
          />
        </div>
         <div className="flex items-center bg-gray-300 rounded-lg px-3 py-2 mb-3">
          <FaLock className="text-gray-700 mr-2" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent w-full focus:outline-none text-gray-800"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-700"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="flex items-center bg-gray-300 rounded-lg px-3 py-2 mb-3">
          <FaLock className="text-gray-700 mr-2" />
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="bg-transparent w-full focus:outline-none text-gray-800"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="text-gray-700"
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
         <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-sm text-gray-700">
            Agree to Terms & Conditions
          </label>
        </div>
      
         <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-1 rounded-full flex items-center justify-center space-x-2">
          <span>Sign In</span>
          <span className="bg-white text-gray-900 p-1 rounded-full">→</span>
        </button>
        </div>
        

    </section>
     



     }