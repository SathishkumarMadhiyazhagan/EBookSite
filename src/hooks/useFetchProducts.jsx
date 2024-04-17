import { useEffect, useState } from "react";

export const useFetchProducts = (url, searchTearm = '') => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await fetch(`${url}?name_like=${searchTearm ? searchTearm : ''}`);
            const data = await response.json();
            setProducts(data);
          } catch(e) {
            console.log(e.message)
          }
        }
        fetchProducts();
      }, [url, searchTearm]);

  return [products]
}
