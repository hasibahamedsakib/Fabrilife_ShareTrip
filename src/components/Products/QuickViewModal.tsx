import React from "react";
import { TProduct } from "@/types/types.product";
import { FiX } from "react-icons/fi";
import AddToCart from "../Button/AddToCart/AddToCart";

interface QuickViewModalProps {
  product: TProduct;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
}) => {
  const {
    id,
    thumbnail,
    title,
    brand,
    price,
    discountAmount,
    description,
    rating,
  } = product;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src={thumbnail}
            alt={title}
            className="w-full md:w-1/2 rounded"
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-secondary-700 text-sm font-normal leading-5">
                Brand: {brand}
              </p>
              <p className="text-secondary-800 text-base font-semibold leading-7">
                {title}
              </p>
              <p className="text-primary text-lg font-medium mt-2">
                ৳ {discountAmount}
              </p>
              <p className="text-secondary-600 text-sm font-normal line-through">
                ৳ {price % 1 ? price.toFixed(2) : price}
              </p>
              <p className="text-secondary-700 text-sm font-normal mt-2">
                Rating: {rating} / 5
              </p>
              <p className="text-secondary-700 text-sm font-normal mt-2">
                {description}
              </p>
            </div>
            {/* add to cart component */}
            <AddToCart
              id={id}
              thumbnail={thumbnail}
              title={title}
              brand={brand}
              price={price}
              discountAmount={discountAmount}
              isModal={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
