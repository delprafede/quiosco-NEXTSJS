"use client"
import { useStore } from "@/src/lib/store";
import { Product } from "@prisma/client";

type AddToCartButtonProps = {
    product: Product;
}

const AddToCartButton = ({product} : AddToCartButtonProps) => {

     const addToCart = useStore(state => state.addToCart)
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          addToCart(product);
        }}
        type="button"
        className=" bg-indigo-500 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
      >
        Agregar
      </button>
    </div>
  );
};

export default AddToCartButton;
