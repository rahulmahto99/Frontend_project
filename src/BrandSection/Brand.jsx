function Brand() {
  return (
    <div className="text-center pt-10 px-7 pb-10 max-w-[1200px] mx-auto">
      <div className="text-lg font-extrabold uppercase pb-7">BRAND WE LOVE</div>
      <div className="flex basis-20 justify-center items-center  pb-10 gap-7">
        <div className="border-[#e2e5e7] border transition-all hover:border-[#2d2d2d] hover:transition-all hover:border overflow-hidden cursor-pointer ">
          <img
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-brand-slider1_210x.jpg?v=1640070525"
            className="hover:scale-105"
            alt=""
          />
        </div>
        <div className="border-[#e2e5e7] border transition-all hover:border-[#2d2d2d] hover:transition-all hover:border overflow-hidden cursor-pointer ">
          <img
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-brand-slider2_210x.jpg?v=1640070525"
            className="hover:scale-105"
            alt=""
          />
        </div>
        <div className="border-[#e2e5e7] border transition-all hover:border-[#2d2d2d] hover:transition-all hover:border overflow-hidden cursor-pointer ">
          <img
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-brand-slider3_210x.jpg?v=1640070525"
            className="hover:scale-105"
            alt=""
          />
        </div>
        <div className="border-[#e2e5e7] border transition-all hover:border-[#2d2d2d] hover:transition-all hover:border overflow-hidden  cursor-pointer">
          <img
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-brand-slider4_210x.jpg?v=1640070525"
            className="hover:scale-105"
            alt=""
          />
        </div>
        <div className="border-[#e2e5e7] border transition-all hover:border-[#2d2d2d] hover:transition-all hover:border overflow-hidden cursor-pointer ">
          <img
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-brand-slider5_210x.jpg?v=1640070525"
            className="hover:scale-105"
            alt=""
          />
        </div>
      </div>
      <div className="flex basis-6/12 gap-4 ">
        <div className="flex basis-6/12 overflow-hidden">
          <div className=" bg-[url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-spotlight1-1_570x.jpg?v=1640312167')] h-40 w-full bg-no-repeat bg-cover  pt-10 pl-8 hover:scale-105"></div>
        </div>
        <div className="flex basis-6/12 overflow-hidden">
          <div className=" bg-[url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-spotlight1-2_570x.jpg?v=1640312167')] h-40 w-full bg-no-repeat bg-cover  pt-10 pl-8 hover:scale-105"></div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
