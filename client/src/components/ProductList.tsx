import { ProductType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";
import Image from "next/image";

type TemporaryProductType = Omit<ProductType, "sizes" | "colors"> & {
  flavors: string[];
};

// TEMPORARY
const products: TemporaryProductType[] = [
  {
    id: 1,
    name: "AC Plant",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    flavors: ["Eggplant Seedling", "Sili Seedling", "Tomato Seedling"],
    images: {
      "Eggplant Seedling": "/products/1a.png",
      "Sili Seedling": "/products/1b.png",
      "Tomato Seedling": "/products/1c.png",
    },
  },
  {
    id: 2,
    name: "Agricom Best Foods",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    flavors: ["Adobo", "Kaldereta", "Kilawin"],
    images: { 
      "Adobo": "/products/2a.png",
      "Kaldereta": "/products/2b.png", 
      "Kilawin": "/products/2c.png" },
  },
  {
    id: 3,
    name: "Agrismart Seedlings",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    flavors: ["Ampalaya Seedling", "Sigarilyas Seedling"],
    images: { 
      "Ampalaya Seedling": "/products/3a.png", 
      "Sigarilyas Seedling": "/products/3b.png" },
  },
  {
    id: 4,
    name: "Aquchickboy",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 29.9,
    flavors: ["Balut", "Salted Egg"],
    images: { 
      "Balut": "/products/4a.png", 
      "Salted Egg": "/products/4b.png" 
    },
  },
  {
    id: 5,
    name: "RNR Food Products",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    flavors: ["MC_1", "MC_2", "MC_3"],
    images: { 
      "MC_1": "/products/5a.png", 
      "MC_2": "/products/5b.png", 
      "MC_3": "/products/5c.png" },
  },
  {
    id: 6,
    name: "Sagittarian",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    flavors: ["Chicken Adobo", "Chicken Afritada", "Chicken Kaldereta", "Corned Chicken"],
    images: { 
      "Chicken Adobo": "/products/6a.png", 
      "Chicken Afritada": "/products/6b.png", 
      "Chicken Kaldereta": "/products/6c.png", 
      "Corned Chicken": "/products/6d.png" },
  },
  {
    id: 7,
    name: "Oteps Tinuno",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    flavors: ["Garlic Chili Oil", "Pickles", "Special Sauce"],
    images: { 
      "Garlic Chili Oil": "/products/7a.png", 
      "Pickles": "/products/7b.png", 
      "Special Sauce": "/products/7c.png" 
    },
  },
  {
    id: 8,
    name: "JBPMA Integrated Farm",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    flavors: ["Mango Juice", "Mango Pickles"],
    images: { 
      "Mango Juice": "/products/8a.png", 
      "Mango Pickles": "/products/8b.png" 
    },
  },
];

const partnerLogos = [
  { name: "AC Plant", file: "AC PLANT LOGO.png" },
  { name: "Agricom", file: "AGRICOM LOGO.png" },
  { name: "Agrismart Seedling Farm", file: "AGRISMART SEEDLING FARM LOGO.png" },
  { name: "Amancio Nicolas", file: "AMANCIO NICOLAS LOGO.png" },
  { name: "Aquchickboy", file: "AQUCHICKBOY LOGO.png" },
  { name: "BNCL", file: "BNCL LOGO.png" },
  { name: "Browngold", file: "BROWNGOLD LOGO.png" },
  { name: "EMAS", file: "EMAS LOGO.png" },
  { name: "Gracela", file: "GRACELA LOGO.png" },
  { name: "Isaaco", file: "ISAACO LOGO.png" },
  { name: "JBPMA", file: "JBPMA LOGO.png" },
  { name: "Liver Leaf", file: "liver leaf logo official.jpg" },
  { name: "Lucky Family Homemade Products", file: "LUCKY FAMILY HOMEMADE PRODUCTS LOGO.png" },
  { name: "Manalo-Taguba", file: "MANALO-TAGUBA LOGO.png" },
  { name: "Melizabeth", file: "MELIZABETH LOGO.png" },
  { name: "MJ_S Health Products", file: "MJ_S HEALTH PRODUCTS LOGO.png" },
  { name: "OTEP_S", file: "OTEP_S LOGO.png" },
  { name: "RM_S", file: "RM_S LOGO.png" },
  { name: "RNR", file: "RNR LOGO.png" },
  { name: "Sagittarian", file: "SAGITTARIAN LOGO.png" },
];

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  return (
    <div className="w-full">
      <section className="mb-8 rounded-2xl border border-gray-100 bg-white/90 p-5 shadow-sm">
        <h2 className="text-sm font-semibold tracking-[0.16em] text-gray-500 uppercase">
          Partner Stores
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {partnerLogos.map((partner) => {
            return (
              <div
                key={partner.file}
                className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-4"
              >
                <div className="relative mx-auto h-14 w-full max-w-[120px]">
                  <Image
                    src={`/partners/${partner.file}`}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>
                <p className="mt-2 line-clamp-2 text-center text-[11px] font-medium text-gray-700">
                  {partner.name}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => {
          const productCardData: ProductType = {
            ...product,
            sizes: ["20ml"],
            colors: product.flavors,
          };

          return <ProductCard key={product.id} product={productCardData} />;
        })}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;
