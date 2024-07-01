import React from 'react'

function Footer() {
  return (
    <div class="bg-gray-200 min-h-[80vh] ">
        <div class="text-center text-2xl font-bold text-gray-900 pt-4">
            <h1>SIGN UP FOR OUR NEWSLETTER</h1>
        </div>
        <div class="text-center text-gray-600">
            <p>Recieve your latest update about our products & promotions.</p>
        </div>
        <div class="bg-gray-200 flex justify-center min-w-full">
            <div class="bg-gray-200 p-4 rounded">
            <div class="flex">
                <input type="email" placeholder="enter your email address" class="px-4 py-2 border bg-gray-200 border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 "/>
                <button class="px-4 py-2 bg-indigo-900 text-white font-bold rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
            </div>
            </div>
        </div>
        <div class="flex p-8 justify-between">
            <div class="w-[20%] min-h-[35%]"><b>Shop </b><br/>
                Electronics<br/>Computers & Laptops <br/>Smartphones & Tablets <br/>Cameras <br/>Video Games & Systems <br/> Home Furniture <br/> Weekly Special
            </div>
            <div class="w-[20%] min-h-[35%]"><b>Top Brands </b><br/>
                Coco Lee <br/>
                Anna<br/>
                French Connection<br/>
                Jimmy Choo<br/>
                Chanel<br/>
                Collette<br/>
                View All<br/>
            </div>
            <div class="w-[20%] min-h-[35%]"><b>Further Info.</b><br/>
                About <br/>
                Blog <br/>
            </div>
            <div class="w-[20%] min-h-[35%]"><b>Customer Service </b><br/>
                Search Terms <br/>
                Advanced Search <br/>
                Orders And Returns <br/>
                Contact Us <br/>
                Theme FAQs <br/>
                Consultant <br/>
                Store Locations <br/>
            </div>
            <div class="w-[20%] min-h-[35%]">
                <img src="https://new-ella-demo.myshopify.com/cdn/shop/files/logo_footer_ac6df23e-54dd-42d8-aa1b-e1d023125468_200x.png?v=1639978452" class="w-36 h-7"/>
                <div class="bg-gray-100 flex items-left justify-left w-7">
                    <div class="text-black-500 w-7 h-7">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.14 2 5 5.14 5 9c0 1.66.64 3.21 1.76 4.38L12 21l5.24-7.62C18.36 12.21 19 10.66 19 9c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer