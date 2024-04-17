import { Link } from "react-router-dom"
import { Rating } from "./Rating";
import { useCart } from "../../context";
import { useEffect, useState } from "react";

export const ProductCard = ({product}) => {
    const {id, name, overview, price, poster, rating, in_stock, best_seller} = product;
    const {cartList, addToCart, removeToCart} = useCart();
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        const findInCart = cartList.find((item) => item.id === id);
        if(findInCart) {
            setInCart(true);
        } else {
            setInCart(false);
        }
        
    }, [cartList, id])

  return (
    <div className="m-3 max-w-sm bg-white text-left rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/productdetail/${id}`} className="relative" >
            {best_seller && (<span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>)}
            <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
        </Link>
        <div className="p-5">
            <Link to={`/productdetail/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            
            <div className="flex items-center my-2">
                <Rating rating={rating}/>
            </div>

            <p className="flex justify-between items-center bottom-0">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>{price}</span>
                </span>
                {inCart ?
                (<button onClick={() => removeToCart(product)}  disabled={in_stock ? "" : "disabled"} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${in_stock ? "" : "cursor-not-allowed"}`}>
                    Remove Item 
                    <svg className="ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>

                </button>) : 
                (<button onClick={() => addToCart(product)} disabled={in_stock ? "" : "disabled"} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${in_stock ? "" : "cursor-not-allowed"}`}>
                    Add To Cart  
                <svg className="ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                </svg>
                </button>)}
            </p>
        </div>
    </div>
  )
}
