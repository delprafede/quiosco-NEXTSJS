import { formatCurrency } from "@/src/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

type ProductsCardProps = {
  product: Product;
};

const ProductsCard = ({ product }: ProductsCardProps) => {
  return (
    <div className="border bg-white  flex flex-col ">
      <div className="">
        <Image
          width={400}
          height={500}
          src={`/products/${product.image}.jpg`}
          alt={product.image}
        />
      </div>
      <div className=" p-5 flex flex-col justify-between  ">
        <h3 className=" text-2xl font-bold sm:text-2xl text-amber-300 flex text-wrap">
          {product.name}
        </h3>
        <p className=" mt-5 font-black text-4xl text-amber-500 ">
          {formatCurrency(product.price)}
        </p>
        <div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
