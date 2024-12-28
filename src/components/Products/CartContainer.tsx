import React from "react";
import ProductCart from "@/components/Products/ProductCart";
import { useGetProductsQuery } from "@/redux/service/api";
import { TProduct } from "@/types/types.product";

const CartContainer: React.FC = () => {
  const { data, isLoading, isError } = useGetProductsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;
  const products = data?.products || [];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {products?.map((product: TProduct) => (
        <ProductCart
          id={product.id}
          key={product.id}
          thumbnail={product.thumbnail}
          title={product.title}
          brand={product.brand}
          price={product.price * 120}
          discountPercentage={
            product.price * 120 -
            (product.price * 120 * product.discountPercentage) / 100
          }
          description={product.description}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default CartContainer;
