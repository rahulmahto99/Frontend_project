import React, { useState, useEffect } from "react";
import ProductButton from "../Buttons/ProductButton";

function RecommendedProduct() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [initialProductsToShow, setInitialProductsToShow] = useState(8);

  useEffect(() => {
    // Fetch data from products.json (or your API endpoint)
    fetch("/src/ProductsDetails/Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    // Update visible products based on initialProductsToShow
    setVisibleProducts(products.slice(0, initialProductsToShow));
  }, [products, initialProductsToShow]);

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setVisibleProducts(products); // Show all products
  };

  return (
    <div className="bg-[#F7F8FA]">
      <div className="max-w-[1200px] mx-auto text-xl px-4 font-bold pt-7 pb-7">
        <h1 className="pb-5">RECOMMENDED FOR YOU</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="first px-4 py-4 bg-[#FFFFFF] shadow-sm relative"
            >
              <div className="img">
                <img src={product.image} alt={product.name} />
              </div>
              <h1 className="text-xs font-normal absolute right-4 top-2 px-4 py-1 text-white rounded bg-[#F42B23]">Sale</h1>
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
        {/* Show More button */}
        {visibleProducts.length < products.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleShowMore}
              className="text-xs block font-semibold px-10 py-3 uppercase hover:bg-[#3A7AF5] hover:text-white rounded w-full  border-black bg-white border hover:border-[#3A7AF5] text-[#0b0335] w-72 mt-10"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecommendedProduct;
