import React, { useRef } from 'react'
import {toast} from 'react-toastify'
import { useTitle } from '../hooks/useTitle'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services';

export const Login = () => {
  useTitle("Login");
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const authDetail = {
        email: email.current.value,
        password: password.current.value
      }
  
      const data = await login(authDetail);
  
      data.accessToken ? navigate('/products') : toast.error(data);
    } catch(e) {
      toast.error(e.message, {
        position: "bottom-center",
        closeOnClick: true
      })
    }
  }

  return (
    <main className='flex justify-center items-center'>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleLogin}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
              <div>
                  <label htmlFor="email" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" ref={email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
              </div>
              <div>
                  <label htmlFor="password" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" ref={password} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
              </div>
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
              </div>
          </form>
      </div>
    </main>
  )
}
