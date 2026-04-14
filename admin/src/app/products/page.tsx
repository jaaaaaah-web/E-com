import { Product, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Product[]> => {
  return [
    {
      id: 1,
    name: "Ac Plant",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    products: ["Eggplant Seedling", "Sili Seedling", "Tamato Seedling"],
    images: {
      "Eggplant Seedling": "/products/1a.png",
      "Sili Seedling": "/products/1b.png",
      "Tamato Seedling": "/products/1c.png",
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
    products: ["Adobo", "Kaldereta", "Kilawin"],
    images: { "Adobo": "/products/2a.png", "Kaldereta": "/products/2b.png", "Kilawin": "/products/2c.png" },
    },
    {
      id: 3,
    name: "Agrismart Seedlings",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    products: ["Ampalaya Seedling", "Sigarilyas Seedling"],
    images: {
      "Ampalaya Seedling": "/products/3a.png",
      "Sigarilyas Seedling": "/products/3b.png",
      },
    },
    {
      id: 4,
    name: "Aquchickboy",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 29.9,
    products: ["balut", "Salted Egg"],
    images: { "balut": "/products/4a.png", "Salted Egg": "/products/4b.png" },
    },
    {
      id: 5,
    name: "RNR Food Products",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    products: ["MC bbq","MC chili garlic", "MC garlic"],
    images: {
      "MC bbq": "/products/5a.png",
      "MC chili garlic": "/products/5b.png",
      "MC garlic": "/products/5c.png",
      },
    },
    {
      id: 6,
      name: "Sagittarian",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      products: ["Chicken Adobo", "Chicken Afritada", "Chicken Kaldereta", "Corned Chicken"],
      images: { "Chicken Adobo": "/products/6a.png", "Chicken Afritada": "/products/6b.png", "Chicken Kaldereta": "/products/6c.png", "Corned Chicken": "/products/6d.png" },
    },
    {
      id: 7,
      name: "Oteps Tinuno ",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 69.9,
      products: ["Garlic Chili Oil", "Pickles", "Special Sauce"],
      images: { "Garlic Chili Oil": "/products/7a.png", "Pickles": "/products/7b.png", "Special Sauce": "/products/7c.png" },
    },
    {
      id: 8,
      name: "JBPMA Integrated Farm",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      products: ["Mango Juice", "Mango Pickles"],
      images: { "Mango Juice": "/products/8b.png", "Mango Pickles": "/products/8gr.png" },
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Products</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
