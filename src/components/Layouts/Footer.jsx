import { Link } from "react-router-dom";

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-white shadow dark:bg-gray-900 mt-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {date.getFullYear()} <Link to="/" className="hover:underline">EBookSite™</Link>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}
