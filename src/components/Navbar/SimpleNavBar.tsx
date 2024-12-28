import React from "react";
import { RootState } from "@/redux/store";
import { TProduct } from "@/types/types.product";
import { useAppSelector } from "@/redux/hooks";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const SimpleNavBar: React.FC = () => {
  const cartItems = useAppSelector((state: RootState) => state.product);

  const favoriteItems: TProduct[] = [];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold">
          <a href="/" className="flex items-center gap-2 text-white">
            {/* <img src="/logo-icon.png" alt="logo" width={40} height={40} /> */}
            <span className="text-xl sm:text-3xl font-serif text-yellow-300">
              Fabrilife
            </span>
            shareTrip
          </a>
        </div>
        <div className="flex gap-8">
          <button className="relative">
            <FiHeart className="w-6 h-6" />
            <span className="absolute -top-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {favoriteItems?.length}
            </span>
          </button>
          <button className="relative">
            <FiShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {cartItems?.length}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavBar;
