function ElectronicsProduct() {
  return (
    <div className="w-full block relative px-44 border-b-0">
        <div className="flex items-center justify-between">
                 <div className="text-xl font-extrabold text-[#0B0335]">ELECTRONICS</div>
      <div className="flex space-x-4 text-xs mt-2">
        <a href="#" className="text-[#585DDB] border-r border-gray-300 pr-2">New Products</a>
        <a href="#" className="text-gray-500 hover:text-[#585DDB] border-r border-gray-300 pr-2">Best Sellers</a>
        <a href="#" className="text-gray-500 hover:text-[#585DDB] border-r border-gray-300 pr-2">Featured Products</a>
        <a href="#" className="text-gray-500 hover:text-[#585DDB]">View All</a>
      </div>
      </div>
      <div className="w-full border-b-2 mt-4 mb-8"></div>
      {/* image */}
      <div className="img">
        <img className=" " src="https://new-ella-demo.myshopify.com/cdn/shop/files/banner_375x.jpg?v=1640244728"></img>
        {/* <div className="grid grid-cols-2"> */}
        {/* </div> */}
        </div>
    </div>
  )
}

export default ElectronicsProduct
