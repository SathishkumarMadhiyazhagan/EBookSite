import { useState } from "react";
import { CartCard } from "./CartCard";
import {PaymentCheckOut} from "./PaymentCheckOut"
import { useCart } from "../../../context";

export const CartList = () => {
  const {cartList, total} = useCart();
  const [paymentCheckOut, setPaymentCheckout] = useState(false);

  return (
    <>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Cart ({cartList.length})
        </p>
      </section>
      
      <section>
        {cartList && cartList.map((product, index) => (
          <CartCard key={index} product={product} />
        ))}
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold">Total Amount:</span>
            <span>${total}</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button type="button" onClick={() => setPaymentCheckout(true)} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            PLACE ORDER 
            <svg className="w-6 h-6 text-gray-800 text-white inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>
      {paymentCheckOut && <PaymentCheckOut setPaymentCheckout={setPaymentCheckout} total={total}/>}
    </>
  )
}
