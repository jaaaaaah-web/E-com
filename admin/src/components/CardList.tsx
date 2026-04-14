import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
  {
    id: 1,
    name: "Ac Plant",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
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
    sizes: ["s", "m", "l", "xl"],
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
    sizes: ["s", "m", "l"],
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
    sizes: ["s", "m", "l"],
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
    sizes: ["s", "m", "l"],
    products: ["MC bbq","MC chili garlic", "MC garlic"],
    images: {
      "MC bbq": "/products/5a.png",
      "MC chili garlic": "/products/5b.png",
      "MC garlic": "/products/5c.png",
    },
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Order Payment",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Order Payment",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Order Payment",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Order Payment",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Order Payment",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {title === "Popular Products"
          ? popularProducts.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={Object.values(item.images)[0] || ""}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {item.name}
                  </CardTitle>
                </CardContent>
                <CardFooter className="p-0">₱{item.price}</CardFooter>
              </Card>
            ))
          : latestTransactions.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-0">
                  <CardTitle className="text-sm font-medium">
                    {item.title}
                  </CardTitle>
                  <Badge variant="secondary">{item.badge}</Badge>
                </CardContent>
                <CardFooter className="p-0">${item.count /1000}K</CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
};

export default CardList;
