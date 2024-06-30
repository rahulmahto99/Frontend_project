import { FaAngleDown } from "react-icons/fa6";

function ProductCategories() {
  return (
    <div className="flex gap-6 px-5 py-10 max-w-[1200px] mx-auto">
      <div className="basis-4/12 overflow-hidden">
        <div className="basis-4/12 bg-[url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-custom-image-banner-1_370x.jpg?v=1639976027')] h-svh bg-no-repeat bg-cover pt-10 pl-8 hover:scale-105 hover:transition-all">
          <h1 className="text-xl flex items-center gap-1 text-[rgb(11,3,53)] font-extrabold">
            SMARTPHONES <FaAngleDown />
          </h1>
          <h1 className="text-base font-normal text-[#0b0335]">from $899*</h1>
        </div>
      </div>
      <div className="flex flex-col basis-4/12 justify-between">
        <div className="basis-3/6 overflow-hidden">
          <div className="bg-[url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-custom-image-banner-2_370x.jpg?v=16399760277')] h-2/4 bg-no-repeat bg-cover pb-52 pt-10 pl-8 hover:scale-105 hover:transition-all">
            <h1 className="text-xl flex items-center gap-1 text-[#0b0335] font-extrabold">
              Tablets <FaAngleDown />
            </h1>
            <h1 className="text-base font-normal text-[#0b0335]">from $899*</h1>
          </div>
        </div>
        <div className="basis-3/6 overflow-hidden">
          <div className="bg-[url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-custom-image-banner-4_370x.jpg?v=1639976027')] h-2/4 bg-no-repeat bg-cover pt-10 pl-8 hover:scale-105 p-52 hover:transition-all">
            <h1 className="text-xl flex items-center gap-1 text-[#0b0335] font-extrabold">
              Headphones <FaAngleDown />
            </h1>
            <h1 className="text-base font-normal text-[#0b0335]">from $899*</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col basis-4/12">
        <div className="basis-3/6 overflow-hidden">
          <div className="bg-[url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-custom-image-banner-3_370x.jpg?v=1639976027')] h-3/6 bg-no-repeat bg-cover pb-52 pt-10 pl-8 hover:scale-105 hover:transition-all">
            <h1 className="text-xl flex items-center gap-1 text-[#0b0335] font-extrabold">
              Laptops <FaAngleDown />
            </h1>
            <h1 className="text-base font-normal text-[#0b0335]">from $899*</h1>
          </div>
        </div>
        <div className="basis-3/6 overflow-hidden">
          <div className="bg-[url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-custom-image-banner-5_370x.jpg?v=1639976027')] h-3/6 bg-no-repeat bg-cover pt-10 pl-8 hover:scale-105 p-52 hover:transition-all">
            <h1 className="text-xl flex items-center gap-1 text-[#0b0335] font-extrabold">
              Smart Tv <FaAngleDown />
            </h1>
            <h1 className="text-base font-normal text-[#0b0335]">from $899*</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;
