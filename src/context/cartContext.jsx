import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducers";

const initialCartValues = {
    cartList: [],
    total: 0
}

const CartContext = createContext(initialCartValues);


export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartValues);

    const addToCart = (product) => {
        let updatedList = state.cartList.concat(product)
        const updatedTotal = state.total + product.price;
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    const removeToCart = (product) => {
        let updatedList = state.cartList.filter((item) => item.id !== product.id);
        const updatedTotal = state.total - product.price;
        dispatch({
            type: 'REMOVE_TO_CART',
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
            payload: {
                products: [],
                total: 0
            }
        });
    }
    
    const cartValues = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeToCart,
        clearCart
    }
  return (
    <CartContext.Provider value={cartValues}>
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
    return useContext(CartContext)
} 