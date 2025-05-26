import { Category } from "@prisma/client";
import Image from "next/image";
import React from "react";

type CategoryIconsProps = {
  category: Category;
};

const CategoryIcons = ({ category }: CategoryIconsProps) => {
  return <div>

    <div className={` flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}>
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Image
            src={`./icon_${category.slug}.svg`} 
            alt={category.name}
            width={40}
            height={40}
         
            />
        </div>
        <span className="text-gray-700 text-sm">{category.name}</span>
    </div>
  </div>;
};

export default CategoryIcons;
