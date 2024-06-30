import React, { useState, useEffect } from "react";
import ProductButton from "../Buttons/ProductButton";

function RecommendedProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from products.json (or your API endpoint)
    fetch("/src/ProductsDetails/Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="bg-[#F7F8FA]">
      <div className="max-w-[1200px] mx-auto text-xl px-4 font-bold  pt-7 pb-7">
        <h1 className="pb-5">RECOMMENDED FOR YOU</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="first px-4 py-4 bg-[#FFFFFF] shadow-sm"
            >
              <div className="img">
                <img src={product.image} alt={product.name} />
              </div>
              <h1 className="text-sm font-bold pb-2 text-[#0b0335]">
                {product.name}
              </h1>
              <h1 className="text-xs font-normal pb-2 text-black hover:underline hover:text-[#1d5dd9]">
                {product.description} ${product.price}
              </h1>
              <h1 className="pb-2 text-sm font-normal text-[#969696]">
                ${product.price} From{" "}
                <span className="text-sm font-bold text-[#f42b23]">
                  ${product.discountedPrice}
                </span>
              </h1>
              <button>
                <ProductButton />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecommendedProduct;
