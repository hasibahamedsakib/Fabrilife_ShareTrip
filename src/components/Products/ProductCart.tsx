import { TProduct } from "@/types/types.product";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import QuickViewModal from "./QuickViewModal";
import AddToCart from "@/components/Button/AddToCart/AddToCart";

const ProductCart: React.FC<TProduct> = ({
  id,
  thumbnail,
  title,
  brand,
  price,
  discountPercentage,
  description,
  rating,
}: TProduct) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickView = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="group relative p-4 border rounded-lg  transition-all">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-[210px] mb-4 rounded"
      />
      <div>
        <p className="text-secondary-700 text-sm font-normal leading-5">
          {brand}
        </p>
        <p className="text-secondary-800 text-base font-semibold leading-7">
          {title}
        </p>
      </div>
      <div className="flex items-center mt-2">
        <p className="text-primary text-lg font-medium">
          ৳{" "}
          {discountPercentage % 1
            ? discountPercentage.toFixed(2)
            : discountPercentage}
        </p>
        <p className="text-secondary-600 text-sm font-normal line-through ml-2">
          ৳ {price % 1 ? price.toFixed(2) : price}
        </p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 gap-y-2">
        {/* Add to Cart Buttons */}
        <AddToCart
          id={id}
          thumbnail={thumbnail}
          title={title}
          brand={brand}
          price={price}
          discountPercentage={discountPercentage}
        />
        {/* quick view button */}
        <button
          className="bg-blend-saturation hover:bg-success text-white px-4 py-2  shadow flex items-center justify-center gap-2 w-[185px] h-8 mx-auto rounded-md "
          onClick={handleQuickView}
        >
          <FiEye />
          Quick View
        </button>
      </div>

      {isModalOpen && (
        <QuickViewModal
          product={{
            id,
            thumbnail,
            title,
            brand,
            price,
            discountPercentage,
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
