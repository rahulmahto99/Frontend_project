function Hero() {
  return (
    <div className="bg-[url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-slide-show-1_c1dece3c-e197-4465-b5b1-2a31785cd775.jpg?v=1640142783&width=1880')] bg-cover bg-no-repeat bg-center min-h-72 flex justify-between overflow-hidden overflow-x-auto hover:transition-all">
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="flex flex-col justify-center ">
          <div className=" gap-5 ">
            <h1 className="text-sm text-[#f42b23] pb-1 font-bold underline">
              Special Offer
            </h1>
            <h1 className="text-4xl font-extrabold pb-1 text-[#0b0335] ">
              4k UHD T.V
            </h1>
            <h1 className="text-sm font-normal pb-2 text-[#232323]">
              Quisquemos modales cosmopolis de milance <br />
              lorem de meleifend blanditos.
            </h1>
            <button className="text-xs block font-semibold px-10 py-3 uppercase bg-[#3a7af5] text-white rounded w-8/12 hover:border-black hover:bg-white hover:border hover:text-[#0b0335] hover:-translate-y-2 hover:transition-all">
              Shop Now
            </button>
          </div>
          <div>
            <h1 className="hidden">h</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
