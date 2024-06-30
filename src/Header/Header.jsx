import { RxCross1 } from "react-icons/rx";
import Countdown from "../Countdown/Countdown";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    // Header Notification Start Here
    <div className="w-full ">
      <div className="notification-header bg-[url('https://new-ella-demo.myshopify.com/cdn/shop/files/bg_announcement_countdow_2048x.jpg?v=1640253389')] bg-cover bg-no-repeat bg-center min-h-32 px-5 w-full">
        <div className="flex justify-between max-w-[1200px] mx-auto  min-h-32  items-center">
          <div>{/* first box */}</div>
          <div className="flex flex-col items-center ">
            <h1 className="text-xs font-bold text-white">
              Limited-time Offer!
            </h1>
            <Countdown />
          </div>
          <div>
            <RxCross1 color="white" />
          </div>
        </div>
      </div>
      <div className=" Header-top bg-[#F7F8FA]  py-3 ">
        <div className="max-w-[1200px] mx-auto flex justify-between  ">
          <div className="child1 flex gap-3">
            <div className="phone text-xs flex items-center font-normal text-[#06142e]">
              <FaPhoneAlt size={16} />
              <span className="pl-2">Toll-free: (091) 123-4567</span>
            </div>
            <div className="email text-xs flex items-center font-normal text-[#06142e]">
              <CiMail size={16} />
              <span className="pl-2">email@domain.com</span>
            </div>
          </div>
          <div className="child2 text-xs font-bold text-[#06142e]">
            <h1>Free Shipping Over $99*</h1>
          </div>
          <div className="child3 flex gap-3">
            <h1 className="text-xs font-normal text-[#06142e]">Theme FAQs</h1>
            <h1 className="text-xs font-normal text-[#06142e]">Need Help?</h1>
          </div>
        </div>
      </div>
      <div className=" Main-header max-w-[1200px] mx-auto flex py-4  bg-white  max-auto items-center">
        <div className="logo flex basis-3/12">
          <img
            src="https://new-ella-demo.myshopify.com/cdn/shop/files/home-9-logo.png?v=1640338542&width=300"
            alt=""
            width={140}
            className="object-contain"
          />
        </div>
        <div className="search-box flex  bg-slate-200 basis-5/12">
          <input
            type="text"
            placeholder="Search The Box"
            className="input-full-width bg-slate-50"
            width={200}
          />
          <span>
            <CiSearch />
          </span>
        </div>
        <div className="flex basis-4/12 justify-between">
          <div className="cart flex items-center">
            <CiShoppingCart size={30} style={{ fontWeight: "bold" }} />
            <span className="text-base font-medium text=[#06142e]">Cart</span>
          </div>
          <div className="wishlist  flex items-center">
            <CiHeart size={25} style={{ fontWeight: "bold" }} />
            <span className="text-base font-medium text=[#06142e]">
              Wishlist
            </span>
          </div>
          <div className="signin flex  items-center">
            <FaRegUser size={25} style={{ fontWeight: "bold" }} />
            <span className="text-base font-medium text=[#06142e]">
              Sign in Or Register
            </span>
          </div>
        </div>
      </div>
    </div>
    // Header Notification End Here
  );
};

export default Header;
