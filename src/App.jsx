import Header from "./Header/Header";
import Herosection from "./HeroSection/Hero";
import ProductCategories from "./ProductCategories/Product-categories";
import Brand from "./BrandSection/Brand";
import ElectronicsProduct from "./ElectronicsProduct/ElectronicsProduct";
import RecommendedProduct from "./RecommendedProduct/RecommendedProduct";
import ComputerProduct from "./ComputerProduct/ComputerProduct";
import SmartPhones from "./SmartphonesProduct/smartphonesProduct";
import CameraProduct from "./cameraProduct/CameraProduct";
import Beforefooter from "./BeforeFooter/BeforeFooter";
import Footer from "./Footer/Footer";


function App() {
  return (
    <>
    <Header />
    <Herosection/>
    <ProductCategories/>
    <Brand />
    <ElectronicsProduct/>
    <ComputerProduct/>
    <SmartPhones/>
    <cameraProduct/>
    <RecommendedProduct/>
    <Beforefooter/>
    <Footer/>
    </>
  );
}

export default App;
