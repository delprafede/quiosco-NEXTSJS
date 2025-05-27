import React from "react";
import { prisma } from "@/src/lib/prisma";
import CategoryIcons from "./ui/CategoryIcons";

const getCategories = async () => {
  return await prisma.category.findMany({});
};

const OrderSidebar = async () => {
  // Fetch categories when the component mounts
  const categories = await getCategories();
 
  return (
    <aside className=" md:w-72 md:h-screen bg-white">
      <main className="mt-10">
        {categories.map(category => (
          <CategoryIcons 
            key={category.id}
            category={category}
           
          />
        ))}
      </main>
    </aside>
  );
};

export default OrderSidebar;
