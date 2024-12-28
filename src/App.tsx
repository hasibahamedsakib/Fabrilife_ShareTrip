import CartContainer from "@/components/Products/CartContainer";
import SimpleNavBar from "@/components/Navbar/SimpleNavBar";

const App = () => {
  return (
    <div className="Container mx-auto py-10 2xl:py-20 font-Murecho">
      {/* <SimpleNavBar /> */}
      <CartContainer />
    </div>
  );
};

export default App;
