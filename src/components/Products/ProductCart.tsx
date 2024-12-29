// import { TProduct } from "@/types/types.product";
// import React, { useState } from "react";
// import { FiEye } from "react-icons/fi";
// import QuickViewModal from "./QuickViewModal";
// import AddToCart from "@/components/Button/AddToCart/AddToCart";

// const ProductCart: React.FC<TProduct> = ({
//   id,
//   thumbnail,
//   title,
//   brand,
//   price,
//   discountPercentage,
//   description,
//   rating,
// }: TProduct) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleQuickView = () => {
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="group relative border rounded-lg  transition-all">
//       <div className="bg-[#ebe6e6]">
//         <img
//           src={thumbnail}
//           alt={title}
//           className="w-full h-[210px] mb-4 rounded object-contain"
//         />
//       </div>
//       <div className="p-2">
//         <div>
//           <p className="text-secondary-700 text-sm font-normal ">{brand}</p>
//           <p className="text-secondary-800 text-base font-medium ">{title}</p>
//         </div>
//         <div className="flex items-center ">
//           <p className="text-primary text-lg font-medium">
//             ৳{" "}
//             {discountPercentage % 1
//               ? discountPercentage.toFixed(2)
//               : discountPercentage}
//           </p>
//           <p className="text-secondary-600 text-sm font-normal line-through ml-2">
//             ৳ {price % 1 ? price.toFixed(2) : price}
//           </p>
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 gap-y-2">
//         {/* Add to Cart Buttons */}
//         <AddToCart
//           id={id}
//           thumbnail={thumbnail}
//           title={title}
//           brand={brand}
//           price={price}
//           discountPercentage={discountPercentage}
//         />
//         {/* quick view button */}
//         <button
//           className="bg-blend-saturation hover:bg-success text-white px-4 py-2  shadow flex items-center justify-center gap-2 w-[185px] h-8 mx-auto rounded-md "
//           onClick={handleQuickView}
//         >
//           <FiEye />
//           Quick View
//         </button>
//       </div>
//       {isModalOpen && (
//         <QuickViewModal
//           product={{
//             id,
//             thumbnail,
//             title,
//             brand,
//             price,
//             discountPercentage,
//             description,
//             rating,
//           }}
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default ProductCart;

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
            backgroundImage: `url('/src/assets/discount-banner.png')`,
          }}
        >
          ৳ {discountAmount}
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
          {/* Add to Cart Buttons */}
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
            className="bg-blend-saturation bg-white/30 backdrop-blur-md hover:bg-success  text-white px-4 py-2 shadow flex items-center justify-center gap-2 w-[185px] h-8 mx-auto rounded-md"
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
          <p className="text-primary text-xl font-medium font-Murecho">
            ৳ {price - (discountAmount || 0)}
          </p>
          <p className="text-secondary-600 text-sm font-normal line-through ml-2">
            ৳ {price}
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
            discountPercentage: discountAmount,
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
