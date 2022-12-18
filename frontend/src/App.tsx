import ProductCard from "./components/ProductCard";
import SubjectList from "./components/SubjectList";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="mx-auto flex flex-col justify-start items-start">
      <div className="px-10 my-4">
        <h1 className=" font-black uppercase text-[40px] hover:scale-105 transition-all">
          Products list api express mysql
        </h1>
      </div>
      <ProductCard />
      <div className="px-10 my-4">
        <h1 className=" font-black uppercase text-[40px] hover:scale-105 transition-all">
          Users list api express mysql
        </h1>
      </div>
      <UserCard />
      <div className="px-10 my-4">
        <h1 className=" font-black uppercase text-[40px] hover:scale-105 transition-all">
          Subjects list api express mysql
        </h1>
      </div>
      <SubjectList />
    </div>
  );
}

export default App;
