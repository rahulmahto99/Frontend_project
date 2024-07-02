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
                <span class="hover:underline">Electronics<br/></span>
                <span class="hover:underline">Computers & Laptops <br/></span>
                <span class="hover:underline">Smartphones & Tablets <br/></span>
                <span class="hover:underline">Cameras <br/></span>
                <span class="hover:underline">Video Games & Systems <br/> </span>
                <span class="hover:underline">Home Furniture <br/> </span>
                <span class="hover:underline">Weekly Special</span>
            </div>
            <div class="w-[20%] min-h-[35%]"><b>Top Brands </b><br/>
               <span class="hover:underline"> Coco Lee <br/></span>
               <span class="hover:underline"> Anna<br/></span>
               <span class="hover:underline"> French Connection<br/></span>
               <span class="hover:underline"> Jimmy Choo<br/></span>
               <span class="hover:underline"> Chanel<br/></span>
               <span class="hover:underline"> Collette<br/></span>
               <span class="hover:underline"> View All<br/></span>
            </div>
            <div class="w-[20%] min-h-[35%]"><b>Further Info.</b><br/>
               <span class="hover:underline"> About <br/></span>
               <span class="hover:underline"> Blog <br/></span>
            </div>
            <div class="w-[20%] min-h-[35%] "><b>Customer Service </b><br/>
               <span class="hover:underline"> Search Terms <br/></span>
                <span class="hover:underline">Advanced Search <br/></span>
                <span class="hover:underline">Orders And Returns <br/></span>
                <span class="hover:underline">Contact Us <br/></span>
                <span class="hover:underline">Theme FAQs <br/></span>
                <span class="hover:underline">Consultant <br/></span>
                <span class="hover:underline">Store Locations <br/></span>
                
            </div>
            <div class="bg-gray-200 flex-col items-center justify-center min-h-[35%] h-80">
                <img src="https://new-ella-demo.myshopify.com/cdn/shop/files/logo_footer_ac6df23e-54dd-42d8-aa1b-e1d023125468_200x.png?v=1639978452" class="w-36 h-7 bg-gray-200"/>

                        <div class="bg-gray-200 p-2 rounded text-center">
                    <div class="flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 text-indigo-900" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.14 2 5 5.14 5 9c0 1.66.64 3.21 1.76 4.38L12 21l5.24-7.62C18.36 12.21 19 10.66 19 9c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
                        </svg>
                        <p class="text-gray-700">685 Market Street<br/>San Francisco, CA 94105, US</p>
                    </div>
                    <div class="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 text-indigo-900" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79C8.06 14.18 10.82 16.94 14.21 18.38l2.2-2.2c.27-.27.67-.36 1.02-.26 1.12.29 2.33.45 3.57.45.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1H5c.55 0 1 .45 1 1 0 1.24.16 2.45.45 3.57.1.34.01.74-.26 1.01l-2.2 2.2z"/>
                        </svg>
                        <p class="text-gray-700 ">Call us: <u>(090) 123-ELIA</u></p>
                    </div>
                    <div class="mb-4 flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 text-indigo-900" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z"/>
                        </svg>
                        <p class="text-gray-700 underline">example@domain.com</p>
                    </div>
                    <div class="flex justify-center space-x-4 mt-4">
                        <a href="#" class="text-indigo-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.42 3.08 8.12 7.22 9.48.53.1.74-.23.74-.52v-1.82c-2.95.64-3.57-1.42-3.57-1.42-.48-1.22-1.17-1.54-1.17-1.54-.95-.65.07-.64.07-.64 1.04.07 1.58 1.07 1.58 1.07.93 1.6 2.44 1.14 3.04.87.1-.67.36-1.14.65-1.4-2.36-.27-4.85-1.18-4.85-5.24 0-1.16.41-2.1 1.08-2.84-.11-.27-.47-1.36.1-2.83 0 0 .88-.28 2.9 1.07.83-.23 1.72-.35 2.61-.36.89.01 1.78.12 2.61.36 2.02-1.35 2.9-1.07 2.9-1.07.57 1.47.21 2.56.1 2.83.67.75 1.08 1.68 1.08 2.84 0 4.07-2.49 4.97-4.86 5.24.37.32.7.93.7 1.88v2.79c0 .29.21.63.75.52A10.003 10.003 0 0022 12z"/>
                            </svg>
                        </a>
                        <a href="#" class="text-indigo-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm8.46 3H7.79c-.49 0-.89.4-.89.89v10.22c0 .49.4.89.89.89h8.42c.49 0 .89-.4.89-.89V5.89a.89.89 0 00-.89-.89zM12 8.4a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2zm4.6-1.6a.9.9 0 110-1.8.9.9 0 010 1.8zM12 9a2.99 2.99 0 100 5.98A2.99 2.99 0 0012 9z"/>
                            </svg>
                        </a>
                        <a href="#" class="text-indigo-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.04C6.47 2.04 2 6.49 2 12.04c0 4.35 2.74 8.05 6.56 9.38-.09-.8-.17-2.04.04-2.92.18-.76 1.19-4.82 1.19-4.82s-.3-.6-.3-1.48c0-1.38.8-2.41 1.8-2.41.85 0 1.26.63 1.26 1.38 0 .85-.54 2.12-.82 3.3-.23.99.52 1.79 1.53 1.79 1.84 0 3.25-1.93 3.25-4.71 0-2.46-1.77-4.18-4.31-4.18-2.94 0-4.67 2.2-4.67 4.48 0 .88.34 1.82.77 2.33.09.1.1.2.07.31-.08.34-.25 1.07-.29 1.22-.05.23-.18.28-.41.17-1.53-.71-2.48-2.92-2.48-4.71 0-3.81 2.76-7.31 7.99-7.31 4.19 0 7.46 2.99 7.46 6.99 0 4.17-2.62 7.54-6.25 7.54-1.22 0-2.36-.64-2.75-1.38 0 0-.59 2.22-.73 2.75-.27 1.01-1 2.27-1.49 3.04C8.9 21.59 10.44 22 12 22c5.53 0 10-4.48 10-9.96 0-5.53-4.47-9.96-10-9.96z"/>
                            </svg>
                        </a>
                        <a href="#" class="text-indigo-900">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 4.56c-.88.39-1.83.65-2.83.77a4.97 4.97 0 002.17-2.73 9.96 9.96 0 01-3.15 1.2 4.92 4.92 0 00-8.4 4.48A14 14 0 011.67 3.16a4.93 4.93 0 001.52 6.57A4.87 4.87 0 01.96 9.1v.06a4.92 4.92 0 003.95 4.82c-.79.21-1.61.24-2.41.09a4.93 4.93 0 004.6 3.42 9.86 9.86 0 01-6.1 2.1c-.39 0-.78-.02-1.17-.06a14.03 14.03 0 007.56 2.22c9.05 0 14-7.5 14-14v-.64c.97-.7 1.8-1.57 2.46-2.56z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer