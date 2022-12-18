import axios from "axios";
import { useEffect, useState } from "react";

type Props = {};

export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
};

function ProductCard({}: Props) {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const url = "http://localhost:8080/v1/products";
    axios.get(url).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="px-10 flex gap-3 flex-row flex-wrap">
      {products
        ? products.map((product) => {
            return (
              <div
                className="flex flex-col p-3 border-black border-solid rounded-xl border-[1px]  w-[300px]"
                key={product.id}
              >
                <h1 className=" font-bold text-[30px]">{product.name}</h1>
                <h2 className="font-medium text-[20px]">{product.brand}</h2>
                <div className="mt-5">
                  <button className="py-1 px-5 rounded-md text-white bg-slate-400 hover:bg-white hover:text-black transition-all">
                    Detail
                  </button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ProductCard;
