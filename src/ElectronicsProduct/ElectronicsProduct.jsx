import {  GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
function ElectronicsProduct() {
    return (
        <div className="w-full block mb-4 border-b-0">
            <div className="flex items-center justify-between">
                <div className="text-xl font-extrabold text-[#0B0335]">ELECTRONICS</div>
                {/* <div className="flex space-x-4 text-xs mt-2">
        <a href="#" className="text-[#585DDB] border-r border-gray-300 pr-2">New Products</a>
        <a href="#" className="text-gray-500 hover:text-[#585DDB] border-r border-gray-300 pr-2">Best Sellers</a>
        <a href="#" className="text-gray-500 hover:text-[#585DDB] border-r border-gray-300 pr-2">Featured Products</a>
        <a href="#" className="text-gray-500 hover:text-[#585DDB]">View All</a>
      </div> */}


            </div>
            <div className="w-full border-b-2 mt-4 mb-8"></div>
            {/* image */}
            <div className="w-full flex h-auto p-1">
                <img className="min-w-[450px] min-h-[250px] " src="https://new-ella-demo.myshopify.com/cdn/shop/files/banner_375x.jpg?v=1640244728"></img>
                <div className="flex-row">
                    <div className="row">
                        <div className="col-md-12 heroSlider-fixed">
                            <div className="overlay">
                            </div>
                            {/*  Slider*/}
                            <div className="flex">
                                <div>
                                    <img src="https://new-ella-demo.myshopify.com/cdn/shop/products/product-app-4_23546feb-c1d6-4645-819e-10afcda659f6.jpg?v=1640334234" alt="" />
                                </div>
                                <div>
                                    <img src="https://new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_9e916edc-fec2-4699-bd5e-5433b5f07c26_870x.jpg?v=1640334229" alt="" />
                                </div>
                                <div>
                                    <img src="https://new-ella-demo.myshopify.com/cdn/shop/products/product-app-2_f3820da1-3014-42d6-bf64-e9b8b5cfd508_870x.jpg?v=1640334223" alt="" />
                                </div>
                                <div>
                                    <img src="https://new-ella-demo.myshopify.com/cdn/shop/products/product-app-3_870x.jpg?v=1640334216" alt="" />
                                </div>
                            </div>
                            {/* control arrows */}
                            <div className="prev">
                            <span className=""><GrPrevious /></span>
                            </div>
                            <div className="next">
                                <span className=""><GrNext /></span>
                            </div>

                        </div>
                    </div>
                </div> {/* <div className="grid grid-cols-2"> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default ElectronicsProduct
