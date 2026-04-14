import {
  Circle,
  Info,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PaymentMethod = "cod" | "gcash" | null;

const PaymentForm = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("cod");
  const [methodError, setMethodError] = useState("");

  const router = useRouter();

  const handleCheckout = () => {
    if (!selectedMethod) {
      setMethodError("Please select a payment method.");
      return;
    }

    setMethodError("");
    router.push("/");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="rounded-xl border border-gray-200 divide-y divide-gray-200">
        <button
          type="button"
          className="w-full px-4 py-4 flex items-start justify-between text-left cursor-pointer"
          onClick={() => {
            setSelectedMethod("gcash");
            setMethodError("");
          }}
        >
          <div className="flex items-start gap-3">
            <Image src="/gcash.png" alt="GCash" width={54} height={32} className="rounded-md" />
            <div>
              <p className="text-base text-gray-700">GCash</p>
            </div>
          </div>
          <span
            className={`mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 ${
              selectedMethod === "gcash"
                ? "border-rose-500 text-rose-500"
                : "border-gray-300 text-transparent"
            }`}
          >
            <Circle className="w-3 h-3 fill-current" />
          </span>
        </button>

        <button
          type="button"
          className="w-full px-4 py-4 flex items-center justify-between text-left"
          onClick={() => {
            setSelectedMethod("cod");
            setMethodError("");
          }}
        >
          <div className="flex items-center gap-3">
            <Image src="/cod.png" alt="Cash on delivery" width={54} height={32} className="rounded-md" />
            <div className="flex items-center gap-1.5">
              <p className="text-xl text-gray-900">Cash on delivery</p>
              <Info className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          <span
            className={`mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 ${
              selectedMethod === "cod"
                ? "border-rose-500 text-rose-500"
                : "border-gray-300 text-transparent"
            }`}
          >
            <Circle className="w-3 h-3 fill-current" />
          </span>
        </button>

      </div>
      {methodError && <p className="text-xs text-red-500">{methodError}</p>}
      <button
        type="button"
        onClick={handleCheckout}
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Checkout
        <ShoppingCart className="w-3 h-3" />
      </button>
    </form>
  );
};

export default PaymentForm;