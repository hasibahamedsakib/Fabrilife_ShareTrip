import React from "react";
import { TProduct } from "@/types/types.product";
import { FiX } from "react-icons/fi";
import AddToCart from "../Button/AddToCart/AddToCart";
import { TbCurrencyTaka } from "react-icons/tb";

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
          <h2 className="tex-txl md:text-2xl font-bold text-justify">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-700 border-2 border-gray-500 hover:border-red-600 p-1 rounded-full transition-all duration-300"
          >
            <FiX size={20} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src={thumbnail}
            alt={title}
            className="w-2/3 mx-auto sm:w-full md:w-1/2  border-2 border-success p-2 rounded-md"
          />
          <div className="flex flex-col justify-between md:w-1/2">
            <div>
              <p className="text-secondary-800 text-xl md:text-2xl font-semibold leading-7">
                {title}
              </p>
              <p className="text-secondary-700 text-sm font-normal leading-5">
                Brand: {brand}
              </p>

              <p className="text-success text-base font-medium font-Murecho flex items-center mt-2">
                Discount Amount: <TbCurrencyTaka size={22} />{" "}
                {(discountAmount || 0).toLocaleString("en-US")}
              </p>
              <p className="text-primary text-xl font-medium font-Murecho flex items-center ">
                Current Price: <TbCurrencyTaka size={22} />{" "}
                {(price - (discountAmount || 0)).toLocaleString("en-US")}
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
