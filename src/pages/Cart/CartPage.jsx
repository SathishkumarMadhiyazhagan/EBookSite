import { useTitle } from "../../hooks/useTitle";
import { CartList } from "./components/CartList";
import { CartEmpty } from "./components/CartEmpty";
import { useCart } from "../../context/cartContext";

export const CartPage = () => {
  useTitle("Cart");

  const {cartList} = useCart();

  return (
    <main>
      {cartList.length ? (<CartList />) : ( <CartEmpty />)}
    </main>
  )
}
