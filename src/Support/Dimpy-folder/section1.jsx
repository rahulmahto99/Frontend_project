

function Section1() {
  return (<>
    <div className="justify-between flex items-center h-20">
    <div className="justify- flex items-center">  
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          HOME <span className="hover:no-underline">▾</span>
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
          ABOUT US
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
         SERVICE <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
        </a>
      </div>
      <div className="div2 h-10">
        <img
          src="https://demo2.pavothemes.com/insul/wp-content/uploads/2024/04/logo.svg"
          alt="Logo"
        />
      </div>
      <div className="div3 justify-evenly">
        <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
          BLOG <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline ">
          PAGE <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
          CONTACT <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
        </a>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
          TRY FOR FREE <span className="ml-1">→</span>
        </button>
      </div>
      
    </div>
      
      </>
  );
}


{/*<div className="justify-space-between">
      <div className="bg-white py-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
           </div>
           </div>*/}
{/* <div className="bg-white py-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="logo">
             
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                HOME <span className="hover:no-underline">▾</span>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
                ABOUT US
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
                SERVICE <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
              </a>
              <img
                src="https://demo2.pavothemes.com/insul/wp-content/uploads/2024/04/logo.svg"
                alt="Logo"
                className="h-8"
              />
              <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
                BLOG <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline ">
                PAGE <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600 hover:underline">
                CONTACT <span className="text-black hover:no-underline hover:text-blue-600">▾</span>
              </a>
             
            </nav>
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              TRY FOR FREE <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      </div> */}
export default Section1;
