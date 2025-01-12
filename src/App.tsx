import { lazy, Suspense } from "react";
// import CartContainer from "@/components/Products/CartContainer";
const PreLoader = lazy(() => import("@/components/Loader/PreLoader"));
const CartContainer = lazy(() => import("@/components/Products/CartContainer"));
const App = () => {
  return (
    <div className="Container mx-auto py-10 2xl:py-20 font-Murecho">
      <Suspense fallback={<PreLoader />}>
        <CartContainer />
      </Suspense>
    </div>
  );
};

export default App;
