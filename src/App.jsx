import Header from "./Header/Header";
import Herosection from "./HeroSection/Hero";
import ProductCategories from "./ProductCategories/Product-categories";
import Brand from "./BrandSection/Brand";
import ElectronicsProduct from "./ElectronicsProduct/ElectronicsProduct";
import RecommendedProduct from "./RecommendedProduct/RecommendedProduct";
import ComputerProduct from "./ComputerProduct/ComputerProduct";
import Beforefooter from "./BeforeFooter/BeforeFooter";
import footer from './Footer/Footer'
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
    <RecommendedProduct/>
    <Beforefooter/>
    <Footer/>
    </>
  );
}

export default App;
