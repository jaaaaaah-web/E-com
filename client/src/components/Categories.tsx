"use client";
import {
  Coffee,
  CupSoda,
  Package,
  Popcorn,
  ShoppingBasket,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "Coffee and Tea",
    icon: <Coffee className="w-4 h-4" />,
    slug: "coffe and tea",
  },
  {
    name: "Fruit Juice and Wine",
    icon: <CupSoda className="w-4 h-4" />,
    slug: "fruit juice and wine",
  },
  {
    name: "Ready To Eat Products",
    icon: <Package className="w-4 h-4" />,
    slug: "ready to eat products",
  },
  {
    name: "Chips",
    icon: <Popcorn className="w-4 h-4" />,
    slug: "chips",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category");

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", value || "all");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((category) => (
        <div
          className={`flex min-w-0 flex-1 basis-[calc(50%-0.25rem)] items-center justify-center gap-2 cursor-pointer rounded-md px-3 py-2 text-center sm:basis-[calc(33.333%-0.5rem)] md:basis-[calc(25%-0.5rem)] lg:basis-[calc(20%-0.5rem)] ${
            category.slug === selectedCategory ? "bg-white" : "text-gray-500"
          }`}
          key={category.name}
          onClick={() => handleChange(category.slug)}
        >
          {category.icon}
          <span className="leading-tight">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
