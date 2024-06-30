import { useState, useEffect } from "react";
import Productbtn from "../Buttons/ProductButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// install Swiper modules

function ComputerProduct() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from products.json (or your API endpoint)
    fetch("/src/ProductsDetails/Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Slice the products array for the first tab
  const productsToDisplay =
    activeTab === "tab1" ? products.slice(0, 3) : products;

  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto px-7 py-10">
        <div className="headtop flex justify-between border border-b-2 border-x-0 border-t-0">
          <h1 className="text-lg font-extrabold text-[#0b0335] border border-b-2 inline-block border-[#1D5DD9] border-x-0 border-t-0">
            COMPUTERS & LAPTOPS
          </h1>
          <nav className="flex text-xs font-normal gap-6">
            <button
              className={`tab-button ${
                activeTab === "tab1" ? "active" : ""
              } hover:text-[#1d5dd9] text-[#828282]`}
              onClick={() => handleTabClick("tab1")}
            >
              New Products
            </button>
            <button
              className={`tab-button ${
                activeTab === "tab2" ? "active" : ""
              } hover:text-[#1d5dd9] text-[#828282]`}
              onClick={() => handleTabClick("tab2")}
            >
              Best Sellers
            </button>
            <button
              className={`tab-button ${
                activeTab === "tab3" ? "active" : ""
              } hover:text-[#1d5dd9] text-[#828282]`}
              onClick={() => handleTabClick("tab3")}
            >
              Featured Products
            </button>
          </nav>
        </div>
        <div className="container pt-7 flex ">
          <div className="first basis-5/12">
            <div className="overflow-hidden">
              <div className="bg-[url('https://new-ella-demo.myshopify.com/cdn/shop/files/home-9-banner-product-tab-2.jpg?v=1640936286')] h-full pb-96 bg-no-repeat bg-cover pt-10 pl-8 hover:scale-105 p-52 hover:transition-all"></div>
            </div>
          </div>
          <div className="second basis-7/12 pl-4">
            <main>
              {activeTab === "tab1" && (
                <article id="tab1">
                  <div className="content">
                    <Swiper
                      navigation={true} modules={[Navigation]} className="mySwiper"
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                      }}
                    >
                      {productsToDisplay.map((product) => (
                        <SwiperSlide key={product.id}>
                          <div className="first px-4 py-4 bg-[#FFFFFF] shadow-sm relative">
                            <div className="img">
                              <img src={product.image} alt={product.name} />
                            </div>
                            <h1 className="text-xs font-normal absolute right-4 top-2 px-4 py-1 text-white rounded bg-[#F42B23]">
                              Sale
                            </h1>
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
                              <Productbtn />
                            </button>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </article>
              )}
              {activeTab === "tab2" && (
                <article id="tab2">
                  <div className="content"></div>
                </article>
              )}
              {activeTab === "tab3" && (
                <article id="tab3">
                  <div className="content"></div>
                </article>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerProduct;
