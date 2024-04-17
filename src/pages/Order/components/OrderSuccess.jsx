import { Link } from "react-router-dom"

export const OrderSuccess = ({data}) => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
        <div className="my-5">
            <p className="text-green-600 text-7xl mb-5">
              <svg className="w-[68px] h-[68px]" style={{'margin': 'auto'}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </p>
            <p>Thank you {data.user.name} for order!</p>
            <p>Your Order ID: {data.id}</p>          
        </div>
        <div className="my-5">
            <p>Your order is confirmed.</p>
            <p>Please check your mail {data.user.email} for the eBook.</p>
            <p className="my-5">Payment ID: xyz_123456789</p>
        </div>
        <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
          Continue Shopping 
          <svg className="w-6 h-6 ml-1 text-gray-800 text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg>
        </Link>
    </section>
  )
}
