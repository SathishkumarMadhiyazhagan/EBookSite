import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle"
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";

export const OrderPage = () => {
  useTitle("Order");
  const {state} = useLocation();
  return (
    <main>
      {state.status ? (<OrderSuccess data={state.data}/>) : (<OrderFail />)}
    </main>
  )
}
