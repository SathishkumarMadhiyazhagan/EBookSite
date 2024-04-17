import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle"
import { Rating } from "../components";
import { useEffect, useState } from "react";
import { useCart } from "../context";
import { getProduct } from "../services";
import { toast } from "react-toastify";

export const ProductDetail = () => {
  useTitle("ProductDetails");
  const {cartList, addToCart, removeToCart} = useCart();
  const [inCart, setInCart] = useState(false);
  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
      async function fetchProducts() {
        try {
          const data = await getProduct(id);
          setProduct(data);
        } catch(e) {
          toast.error(e.message, {
            position: "bottom-center",
            closeOnClick: true
          })
        }
      }
      fetchProducts();
    }, [id]);

  useEffect(() => {
    const findInCart = cartList.find((item) => item.id === product.id);
    if(findInCart) {
        setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id])
  return (
    <main>
    <section>
      <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
      <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
      <div className="flex flex-wrap justify-around">
        <div className="max-w-xl my-3">
          <img className="rounded" src={product.poster} alt={product.name} />
        </div>
        <div className="max-w-xl my-3">
          <p className="text-3xl text-left font-bold text-gray-900 dark:text-slate-200">
            <span className="mr-1">$</span>
            <span className="">{product.price}</span>
          </p>
          <p className="flex items-center my-3"> 
            <Rating rating={product.rating}/>
          </p>
          <p className="my-4 text-left select-none">
            {product.best_seller &&(<span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>)}   
            {product.in_stock ? (<span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span> ) :
            (<span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>)}
            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
          </p>
          <p className="my-3 text-left">
          {inCart ?
            (<button onClick={() => removeToCart(product)} disabled={product.in_stock ? "" : "disabled"} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`}>
                Remove Item 
                <svg className="ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                </svg>

            </button>) : 
            (<button onClick={() => addToCart(product)} disabled={product.in_stock ? "" : "disabled"} className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`}>
                Add To Cart 
            <svg className="ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
            </svg>
            </button>)}
          </p>
          <p className="text-lg text-left  text-gray-900 dark:text-slate-200">{product.long_description}</p>
        </div>
      </div>
    </section>
  </main>
  )
}
