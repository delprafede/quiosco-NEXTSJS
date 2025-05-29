"use client";

import { useStore } from "@/src/lib/store";
import ProductDetails from "./ProductDetails";

const OrderSummary = () => {
  const order = useStore((state) => state.order);

  return (
    <aside className=" lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className=" text-4xl text-center font-black">Mi Pedido</h1>

      {order.length === 0 ? (
        <p className=" text-2xl font-black text-center mt-10">
          El carrito esta vacio
        </p>
      ) : (
        <div className=" my-10">
          {order.map((item) => (
            
            <ProductDetails
            key={item.id}
            item={item}
            />
          )
          )}
        </div>
      )}
    </aside>
  );
};

export default OrderSummary;
