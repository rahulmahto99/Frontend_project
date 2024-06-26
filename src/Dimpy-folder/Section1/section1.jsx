import React from 'react';

function Section1() {
  return (
    <div>
      <header className="bg-neutral-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-36 h-4 bg-no-repeat bg-contain" style={{ backgroundImage: 'url(https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg)' }}></div>
        </div>
        <button className="bg-[#82b440] shadow-[#6f9a37] 'sans':['Helvetica Neue'] hover:bg-[#79aa39] place-items-center text-white py-2 px-4 rounded"><a href="https://themeforest.net/checkout/103039293/create_account?_ga=2.4684659.1510235861.1719405330-1093604875.1719405330"> Buy now</a>
        </button>
      </header>

      <div className="justify-space-between">
        <div className="bg-white py-4 shadow">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="logo">

              </div>
              <nav className="hidden md:flex space-x-8">
                <div className="justify-space-between">
                  <div><a href="#" className="text-blue-600 font-semibold hover:underline">
                    HOME <span className="hover:no-underline">▾</span>
                  </a>
                    <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
                      ABOUT US
                    </a>
                    <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
                      SERVICE <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
                    </a></div>
                </div>
                <div><img
                  src="https://demo2.pavothemes.com/insul/wp-content/uploads/2024/04/logo.svg"
                  alt="Logo"
                  className="h-8"
                />
                </div>
                <div> <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
                  BLOG <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
                </a>
                  <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline ">
                    PAGE <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
                  </a>
                  <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
                    CONTACT <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
                  </a></div>


              </nav>
            </div>
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                TRY FOR FREE <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}
export default Section1;
