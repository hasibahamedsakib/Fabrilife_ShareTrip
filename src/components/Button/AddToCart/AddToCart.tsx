import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/slices/productSlice";
import { RootState } from "@/redux/store";
import { TProduct } from "@/types/types.product";
import { FiPlus, FiShoppingCart } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddToCart = ({
  id,
  thumbnail,
  title,
  brand,
  price,
  discountAmount,
  isModal,
}: TProduct) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.product);

  const isInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, thumbnail, title, brand, price, discountAmount }));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };
  const productInCart = cartItems.find((item) => item.id === id);

  return (
    <div className="mt-4 flex justify-between items-center ">
      {!isInCart ? (
        <button
          className={`w-[185px] h-8 mx-auto  ${
            isModal
              ? "bg-success"
              : "bg-white/30 backdrop-blur-md hover:bg-success"
          } text-white px-4 py-2  shadow flex items-center justify-center gap-2 text-sm rounded-md transition-all duration-300`}
          onClick={handleAddToCart}
        >
          <FiShoppingCart />
          Add to Cart
        </button>
      ) : (
        <div
          className={`w-[185px] h-8 mx-auto  flex items-center justify-between gap-2  ${
            isModal
              ? "bg-success"
              : "bg-white/30 backdrop-blur-md hover:bg-success"
          } transition-all duration-300  py-2 rounded-md shadow text-sm group text-white`}
        >
          <button className=" px-2 py-1 " onClick={handleRemoveFromCart}>
            <RiDeleteBin6Line size={16} />
          </button>
          <span className="text-sm">
            {productInCart ? `${productInCart.quantity} Added in Cart` : ""}
          </span>
          <button className=" px-2 py-1 " onClick={handleAddToCart}>
            <FiPlus size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
