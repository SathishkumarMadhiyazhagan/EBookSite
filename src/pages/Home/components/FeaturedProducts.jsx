import { useEffect, useState } from "react"
import { ProductCard } from "../../../components"
import { getFeaturedList } from "../../../services";
import { toast } from "react-toastify";
// import { useFetchProducts } from "../../../hooks/useFetchProducts";

export const FeaturedProducts = () => {
  // const [products] = useFetchProducts("http://localhost:8000/featured_products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch(e) {
        toast.error(e.message, {
          position: "bottom-center",
          closeOnClick: true
        })
      }
    }
    fetchProducts();
  }, []);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </section>
  )
}
