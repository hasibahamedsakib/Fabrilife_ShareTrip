import { TProduct } from "@/types/types.product";
import React, { lazy, useState } from "react";
import { FiEye, FiMinus } from "react-icons/fi";
import { TbCurrencyTaka } from "react-icons/tb";
// import QuickViewModal from "./QuickViewModal";
// import AddToCart from "@/components/Button/AddToCart/AddToCart";
import disCountBadge from "@/assets/discount-banner.png";

// add lazy loading
const AddToCart = lazy(() => import("@/components/Button/AddToCart/AddToCart"));
const QuickViewModal = lazy(
  () => import("@/components/Products/QuickViewModal")
);

const ProductCart: React.FC<TProduct> = ({
  id,
  thumbnail,
  title,
  brand,
  price,
  discountAmount,
  description,
  rating,
}: TProduct) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickView = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="group relative  rounded-lg transition-all hover:shadow-lg  duration-200 p-1">
      {/* Discount Badge */}
      {discountAmount && (
        <div
          className="absolute top-4 -left-[10px] bg-no-repeat bg-contain bg-center text-white text-sm font-medium flex items-center justify-center w-20 h-8 z-10"
          style={{
            backgroundImage: `url(${disCountBadge})`,
          }}
        >
          <FiMinus size={12} className="mb-1 -ml-[8px]" />
          <TbCurrencyTaka size={16} className="mb-1" />
          <p className="mb-1"> {discountAmount}</p>
        </div>
      )}

      {/* Image Container with Overlay */}
      <div className="relative h-[210px] bg-[#ebe6e6] rounded-lg">
        <div className="h-[210px]  overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full rounded-lg mb-4 object-contain p-1"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-[33%] transition-all rounded-lg flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 gap-y-2 pb-3">
          {/* Add to Cart Button */}
          <AddToCart
            id={id}
            thumbnail={thumbnail}
            title={title}
            brand={brand}
            price={price}
            discountPercentage={discountAmount}
          />
          {/* Quick View Button */}
          <button
            className="bg-blend-saturation bg-white/30 backdrop-blur-md hover:bg-success  text-white px-4 py-2 shadow flex items-center justify-center gap-2 w-[150px] sm:w-[185px] h-8 mx-auto rounded-md border-[1.5px] border-white/30 hover:border-success"
            onClick={handleQuickView}
          >
            <FiEye />
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-2">
        <div>
          <p className="text-secondary-700 text-sm font-normal">{brand}</p>
          <p className="text-secondary-800 text-base font-medium">{title}</p>
        </div>
        <div className="flex items-center">
          <p className="text-primary text-xl font-medium font-Murecho flex items-center ">
            <TbCurrencyTaka size={22} />{" "}
            {(price - (discountAmount || 0)).toLocaleString("en-US")}
          </p>
          <p className="text-secondary-600 text-sm font-normal line-through ml-2">
            ৳ {price.toLocaleString("en-US")}
          </p>
        </div>
      </div>

      {/* Quick View Modal */}
      {isModalOpen && (
        <QuickViewModal
          product={{
            id,
            thumbnail,
            title,
            brand,
            price,
            discountAmount,
            description,
            rating,
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductCart;
