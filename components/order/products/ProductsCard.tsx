import { formatCurrency } from "@/src/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

type ProductsCardProps = {
  product: Product;
};

const ProductsCard = ({ product }: ProductsCardProps) => {
  return (
    <div className="border bg-white  flex flex-col ">
      <div className="relative w-full h-100">
        <Image
          fill
          src={`/products/${product.image}.jpg`}
          alt={product.image}
        />
      </div>
      <div className=" p-5 flex flex-col justify-between  ">
        <h3 className=" text-2xl font-bold sm:text-2xl text-amber-300 flex text-wrap">{product.name}</h3>
        <p className=" mt-5 font-black text-4xl text-amber-500 ">
          {formatCurrency(product.price)}
        </p>
        <button
          type="button"
          className=" bg-indigo-500 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
