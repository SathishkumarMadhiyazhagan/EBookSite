import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import { useTitle } from "../hooks/useTitle"
import { register } from "../services";

export const Register = () => {
  useTitle("Register");
  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault();
    try {
      const authDetail = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      }
  
      const data = await register(authDetail);
  
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
          <form className="space-y-6" onSubmit={handleRegister}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register in to our platform</h5>
              <div>
                  <label htmlFor="name" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required autoComplete="off" />
              </div>
              <div>
                  <label htmlFor="email" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required autoComplete="off"/>
              </div>
              <div>
                  <label htmlFor="password" className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required autoComplete="off"/>
              </div>
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register your account</button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
              </div>
          </form>
      </div>
    </main>
  )
}
