import React from 'react'

function Section1() {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      {/* <h1 className="text-xl font-bold text-blue-600 underline underline-offset-4 ">Hello, Tailwind CSS!</h1>
      <p className="text-gray-700 mt-2">This is a Tailwind CSS example.</p> */}
      <div class="flex flex-row bg-white p-4"> 
          <div1>
           <img src='https://demo2.pavothemes.com/insul/wp-content/uploads/2024/04/h1-faq.jpg'  class="min-h-80vh  rounded-3xl p-4 min-w-50vh "/> 
          </div1>
          <div2 class=" min-h-50vh min-w-100vh">
          <i class="fa-solid fa-circle"/>PRICING FCQS

            <h1 >
            Frequently asked questions
            </h1>
           
              

       
      <div class="w-full max-w-lg bg-white shadow-lg rounded-lg">

        {/*button1*/}
              <div class="border-b">
                <button id="dropdownButton1" class="w-full text-left p-4 text-xl font-semibold text-blue-600 flex justify-between items-center">
                  <span>01. What is it that makes you stand out in the industry?</span>
                  <svg id="dropdownIcon1" class="w-6 h-6 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            <div id="dropdownContent1" class="p-4 text-gray-700 hidden">
              <p>Of course, I'd be happy to help you with a business review. However, could you please provide more specific details about the business you’d like to review? Are you looking for a review of a particular company’s.</p>
            </div>
        
        {/*button2*/}
            <div class="border-b">
              <button id="dropdownButton2" class="w-full text-left p-4 text-xl font-semibold text-blue-600 flex justify-between items-center">
                <span>02. How do you ensure customer satisfaction?</span>
                <svg id="dropdownIcon2" class="w-6 h-6 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            </div>
            <div id="dropdownContent2" class="p-4 text-gray-700 hidden">
               We prioritize customer feedback and implement quality assurance processes to meet and exceed customer expectations.
            </div>
        

        {/*button3*/}
            <div class="border-b">
              <button id="dropdownButton3" class="w-full text-left p-4 text-xl font-semibold text-blue-600 flex justify-between items-center">
                <span>03. What are your main products or services?</span>
                <svg id="dropdownIcon3" class="w-6 h-6 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div id="dropdownContent3" class="p-4 text-gray-700 hidden">
              Our main products include software solutions, IT consulting, and cloud services designed to help businesses succeed.
            </div>



        {/*button4*/}
            <div>
              <button id="dropdownButton4" class="w-full text-left p-4 text-xl font-semibold text-blue-600 flex justify-between items-center">
                <span>04. Can you provide examples of your successful projects?</span>
                <svg id="dropdownIcon4" class="w-6 h-6 transform transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div id="dropdownContent4" class="p-4 text-gray-700 hidden">
              Yes, we have completed numerous projects, including a recent implementation of a custom ERP system for a leading manufacturing firm.
            </div>
      </div>




            
          </div2>
      </div>
    </div>
  );
}

export default Section1;