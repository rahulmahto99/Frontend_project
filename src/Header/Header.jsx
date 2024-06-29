import "./Header.css";
import HeaderButton from "../Buttons/Button";

export const Header = () => {
  const menuItems1 = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Service", link: "/service" },
  ];
  const menuItems2 = [
    { name: "Blog", link: "/blog" },
    { name: "Page", link: "/page" },
    { name: "Contact", link: "/contact" },
  ];
  
  return (
    <>
      <div className="parent flex justify-between items-center px-10 py-6">
        <div className="child1">
          <ul className="flex gap-10">
            {menuItems1.map((item, index) => (
              <li
                key={index}
                className="menu-item font-medium text-[#3a3838]  uppercase text-base"
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="child2 flex items-end justify-end">
          <div className="logo">
            <img
              src="https://demo2.pavothemes.com/insul/wp-content/uploads/2024/04/logo.svg"
              alt="logo"
            />
          </div>
        </div>
        <div className="child3 flex  items-center">
          <ul className="flex gap-10 items-center">
          {menuItems2.map((item, index) => (
              <li
                key={index}
                className="menu-item text-[#3a3838] font-medium uppercase text-base"
              >
                <a href={item.link}>{item.name}</a>
              </li>
            ))}

            <HeaderButton />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
