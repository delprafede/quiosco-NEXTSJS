import ProductsCard from "@/components/order/products/ProductsCard";
import { prisma } from "@/src/lib/prisma";


const getProducts = async (category: string) => {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
};

const OrderPage = async ({ params }: { params: { category: string } }) => {
 
  const products = await getProducts(params.category);

  return (
    <>
      <h1 className=" text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </h1>
      <main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </main>
    </>
  );
};

export default OrderPage;
