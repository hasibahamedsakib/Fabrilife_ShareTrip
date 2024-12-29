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
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {products?.map((product: TProduct) => {
        const productPrice = Math.round(product.price * 120);
        const discountAmount = Math.round(
          productPrice * ((product.discountPercentage || 0) / 100)
        );

        return (
          <ProductCart
            id={product.id}
            key={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            brand={product.brand}
            price={productPrice}
            discountAmount={discountAmount}
            description={product.description}
            rating={product.rating}
          />
        );
      })}
    </div>
  );
};

export default CartContainer;
