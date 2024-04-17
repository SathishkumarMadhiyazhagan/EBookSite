import { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { useTitle } from "../../hooks/useTitle"
import { ProductFilter } from "./components/ProductFilter";
// import { useFetchProducts } from "../../hooks/useFetchProducts";
import { useSearchParams } from "react-router-dom";
import { useFilter } from "../../context";
import { getProductList } from "../../services";
import { toast } from "react-toastify";

export const ProductsPage = () => {
  useTitle("Products");
  const {products, initialProductList} = useFilter();
  const [showFilter, setShowFilter] = useState(false);
  const [searchParams] = useSearchParams();
  const searchTearm = searchParams.get("search");

  // const [products] = useFetchProducts("http://localhost:8000/products", searchTearm);
  // const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
          try {
            const data = await getProductList(searchTearm);
            initialProductList(data);
          } catch(e) {
            toast.error(e.message, {
              position: "bottom-center",
              closeOnClick: true
            })
          }
        }
        fetchProducts();
      }, [searchTearm]);  // eslint-disable-line

  return (
    <main>
      <section className="my-5">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
            <span>
              <button onClick={() => setShowFilter(!showFilter)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
              </button>
            </span>            
          </div>    

          <div className="flex flex-wrap justify-center lg:flex-row">
            {products && products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>  
        </section>

        {showFilter && <ProductFilter showFilter={showFilter} setShowFilter={setShowFilter} />}
    </main>
  )
}
