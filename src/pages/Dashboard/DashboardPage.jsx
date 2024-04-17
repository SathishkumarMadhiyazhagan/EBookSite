import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle"
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { toast } from "react-toastify";
import { getUserOrder } from "../../services";

export const DashboardPage = () => {
  useTitle("Dashboard");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrder() {
      try {
        const data = await getUserOrder();
        setOrders(data);
      } catch(e) {
        toast.error(e.message, {
          position: "bottom-center",
          closeOnClick: true
        })
      }
    }
    getOrder();
  }, [])
  return (
    <main>
       <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section> 

      <section>
        { orders.length !== 0 && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>
    </main>
  )
}
