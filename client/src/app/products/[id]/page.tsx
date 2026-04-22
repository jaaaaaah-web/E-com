import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

type TemporaryProductType = Omit<
  ProductType,
  "sizes" | "colors" | "shortDescription" | "description"
> & {
  flavors: string[];
};

// TEMPORARY
const products: TemporaryProductType[] = [
  {
    id: 1,
    name: "AC Plant",
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
    price: 59.9,
    flavors: ["Adobo", "Kaldereta", "Kilawin"],
    images: {
      Adobo: "/products/2a.png",
      Kaldereta: "/products/2b.png",
      Kilawin: "/products/2c.png",
    },
  },
  {
    id: 3,
    name: "Agrismart Seedlings",
    price: 69.9,
    flavors: ["Ampalaya Seedling", "Sigarilyas Seedling"],
    images: {
      "Ampalaya Seedling": "/products/3a.png",
      "Sigarilyas Seedling": "/products/3b.png",
    },
  },
  {
    id: 4,
    name: "Aquchickboy",
    price: 29.9,
    flavors: ["Balut", "Salted Egg"],
    images: {
      Balut: "/products/4a.png",
      "Salted Egg": "/products/4b.png",
    },
  },
  {
    id: 5,
    name: "RNR Food Products",
    price: 49.9,
    flavors: ["MC_1", "MC_2", "MC_3"],
    images: {
      MC_1: "/products/5a.png",
      MC_2: "/products/5b.png",
      MC_3: "/products/5c.png",
    },
  },
  {
    id: 6,
    name: "Sagittarian",
    price: 59.9,
    flavors: [
      "Chicken Adobo",
      "Chicken Afritada",
      "Chicken Kaldereta",
      "Corned Chicken",
    ],
    images: {
      "Chicken Adobo": "/products/6a.png",
      "Chicken Afritada": "/products/6b.png",
      "Chicken Kaldereta": "/products/6c.png",
      "Corned Chicken": "/products/6d.png",
    },
  },
  {
    id: 7,
    name: "Oteps Tinuno",
    price: 69.9,
    flavors: ["Garlic Chili Oil", "Pickles", "Special Sauce"],
    images: {
      "Garlic Chili Oil": "/products/7a.png",
      Pickles: "/products/7b.png",
      "Special Sauce": "/products/7c.png",
    },
  },
  {
    id: 8,
    name: "JBPMA Integrated Farm",
    price: 59.9,
    flavors: ["Mango Juice", "Mango Pickles"],
    images: {
      "Mango Juice": "/products/8a.png",
      "Mango Pickles": "/products/8b.png",
    },
  },
];

const getProductById = (id: string) => {
  const parsedId = Number(id);
  if (Number.isNaN(parsedId)) return null;

  const temporaryProduct = products.find((item) => item.id === parsedId);
  if (!temporaryProduct) return null;

  const product: ProductType = {
    ...temporaryProduct,
    shortDescription: "",
    description: "",
    sizes: ["20ml"],
    colors: temporaryProduct.flavors,
  };

  return product;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product not found",
      describe: "This product does not exist.",
    };
  }

  return {
    title: product.name,
    describe: product.description,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { id } = await params;
  const { size, color } = await searchParams;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="relative aspect-2/3 w-full lg:w-5/12">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/cod.png"
            alt="cod"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/gcash.png"
            alt="gcash"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
