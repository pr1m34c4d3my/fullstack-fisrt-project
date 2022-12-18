import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="mx-auto">
      <div className="px-10 my-4">
        <h1 className=" font-black uppercase text-[40px]">
          Products list api express mysql
        </h1>
      </div>
      <ProductCard />
      <div className="px-10 my-4">
        <h1 className=" font-black uppercase text-[40px]">
          User list api express mysql
        </h1>
      </div>
      <UserCard />
    </div>
  );
}

export default App;
