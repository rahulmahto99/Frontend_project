import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


function Section1() {
  return (
    <>
    <div className="min-h-screen  flex justify-center items-center py-6">
      <div className="first basis-6/12">
          <div className="bg-[#1351D8]  pt-20 rounded-e-3xl mr-20 z-2 pb-20">
            <img
              src="https://demo2.pavothemes.com/insul/wp-content/uploads/2024/04/h1-choose.jpg"
              alt=""
              className=" ml-10 z-10 rounded-lg "
            />
          </div>
        </div>
        <div className="second basis-6/12 pl-8 pr-6">
          <h1 className="flex color align-middle items-center text-[#1351D8]">
            <GoDotFill />
            <span className="font-medium  uppercase text-base">
             
              WHY CHOOSE US
            </span>
          </h1>
          <h1 className="text-5xl font-bold py-4 pb-6 ">
            Solutions Today for Tomorrow’s Success
          </h1>
          <h1 className="text-xl text-[#262626] leading-9	 font-normal py-4 ">
            Of course, I’d be happy to help you with a business review. However,
            could you please provide more specific details about the business
            you’d like to review?
          </h1>

          <button className="px-6 py-3 inline-block mr-2 rounded-full text-base text-[white] uppercase font-semibold bg-[#1351D8]">
            Data Analysis
          </button>
          <button className="px-6 py-3 inline-block rounded-full text-base text-[black]  border-solid border-2 border-sky-500 hover:bg-[#1351D8] hover:text-[white] hover:border-none hover:transition uppercase font-semibold bg-[transparent] ">
            Data Analysis
          </button>
          <h1 className="text-xl text-[#262626] leading-9	 font-normal py-4 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </h1>
          <h1 className="text-xl text-[#262626] leading-9	 font-normal py-4 ">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn’t anything embarrassing hidden in the middle of text.
          </h1>
          <button className="flex items-center px-6 py-3 inline-block mr-2 rounded-full text-base text-white uppercase font-semibold bg-[#1351D8]">
      Get In Touch
      <span className="origin-top-right pl-2">
        <FaArrowRight />
      </span>
    </button>
        </div>
      </div>
     </>
     
  );
}

export default Section1;