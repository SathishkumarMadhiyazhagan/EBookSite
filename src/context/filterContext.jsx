import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";

const initialState = {
    productList: [],
    sortBy: null,
    ratings: null,
    onlyInStock: false,
    bestSellerOnly: false,
};

const FilterContext = createContext(initialState);


export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, initialState);

    function initialProductList(products) {
        dispatch(
            {
                type: 'PRODUCT_LIST',
                payload: {
                    products: products,

                }
            }
        )
    }

    function bestSellerOnlyFunc(products) {
        return state.bestSellerOnly ? products.filter((product) => product.best_seller === true) : products;
    }

    function onlyInStockFunc(products) {
        return state.onlyInStock ? products.filter((product) => product.in_stock === true) : products;
    }

    function sortFunc(products) {
        if(state.sortBy === "lowtohigh") {
            return products.sort((a, b) => Number(a.price) - Number(b.price));
        } 
        if(state.sortBy === "hightolow") {
            return products.sort((a, b) => Number(b.price) - Number(a.price));
        }
        return products;
    }

    function ratingFunc(products) {
        if(state.ratings === "4STARSABOVE") {
            return products.filter((product) => product.rating >= 4);
        }
        if(state.ratings === "3STARSABOVE") {
            return products.filter((product) => product.rating >= 3);   
        }
        if(state.ratings === "2STARSABOVE") {
            return products.filter((product) => product.rating >= 2);
        }
        if(state.ratings === "1STARSABOVE") {
            return products.filter((product) => product.rating >= 1);
        }
        return products;
    }

    const filterdProductList = sortFunc(ratingFunc(onlyInStockFunc(bestSellerOnlyFunc(state.productList))));

    const value = { 
        state,
        products: filterdProductList,
        initialProductList,
        dispatch
    }
  return (
    <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}
