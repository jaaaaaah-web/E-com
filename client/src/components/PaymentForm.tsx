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
  const [gcashName, setGcashName] = useState("");
  const [gcashReference, setGcashReference] = useState("");
  const [proofFileName, setProofFileName] = useState("");
  const [gcashError, setGcashError] = useState("");
  const [qrSrc, setQrSrc] = useState("/gcash-qr.png");

  const router = useRouter();

  const handleCheckout = () => {
    if (!selectedMethod) {
      setMethodError("Please select a payment method.");
      return;
    }

    if (selectedMethod === "gcash") {
      if (!gcashName.trim() || !gcashReference.trim() || !proofFileName) {
        setGcashError("Please add your GCash username, reference number, and proof of payment.");
        return;
      }
    }

    setMethodError("");
    setGcashError("");
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
            setGcashError("");
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
            setGcashError("");
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
      {selectedMethod === "gcash" && (
        <div className="rounded-xl border border-gray-200 p-4 flex flex-col gap-4">
          <div className="relative mx-auto w-full max-w-[320px] aspect-square rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
            <Image
              src={qrSrc}
              alt="GCash QR code"
              fill
              className="object-contain"
              onError={() => setQrSrc("/qr.png")}
            />
          </div>
          <p className="text-xs text-gray-500 text-center">
            Scan this QR using GCash and upload your proof of payment below.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={gcashName}
              onChange={(e) => setGcashName(e.target.value)}
              placeholder="GCash username"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
            <input
              type="text"
              value={gcashReference}
              onChange={(e) => setGcashReference(e.target.value)}
              placeholder="Reference number"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
            <label className="w-full rounded-lg border border-dashed border-gray-300 px-3 py-3 text-sm cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-gray-700">
                {proofFileName ? `Proof of payment: ${proofFileName}` : "Upload proof of payment"}
              </span>
              <input
                type="file"
                accept="image/*,application/pdf"
                className="hidden"
                onChange={(e) => {
                  const fileName = e.target.files?.[0]?.name || "";
                  setProofFileName(fileName);
                }}
              />
            </label>
          </div>
          {gcashError && <p className="text-xs text-red-500">{gcashError}</p>}
        </div>
      )}
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