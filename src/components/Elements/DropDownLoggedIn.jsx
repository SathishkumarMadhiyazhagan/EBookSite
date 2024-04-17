import { Link } from "react-router-dom"
import { getUser, logout } from "../../services";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const DropDownLoggedIn = ({dropDown, setDropDown}) => {
  const [user, SetUser] = useState({});
  useEffect(() => {
    async function getLoginUser() {
      try {
        const data = await getUser();
        SetUser(data)
      } catch(e) {
        toast.error(e.message, {
          position: "bottom-center",
          closeOnClick: true
        })
      }
    }
    getLoginUser();
  }, [])
  const handleLogOut = () => {
    setDropDown(!dropDown);
    logout();
  }

  return (
    <div className={`z-50 ${ dropDown ? 'hidden' : ''} absolute top-10 right-0 z-10 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
        <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
            <Link to="/products" onClick={() => setDropDown(!dropDown)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">All EBooks</Link>
            </li>
            <li>
            <Link to="/dashboard" onClick={() => setDropDown(!dropDown)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
            <Link to="/" onClick={handleLogOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log Out</Link>
            </li>
        </ul>
    </div>
  )
}
