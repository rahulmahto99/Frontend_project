import Header from "./Header/Header";
import Herosection from "./Hero-section/Hero";
import ProductCategories from "./ProductCategories/Product-categories";
import Brand from "./Brand-section/Brand";
import ElectronicsProduct from "./ElectronicsProduct/ElectronicsProduct";
import RecommendedProduct from "./RecommendedProduct/RecommendedProduct"

function App() {
  return (
    <>
    <Header />
    <Herosection/>
    <ProductCategories/>
    <Brand />
    <ElectronicsProduct/>
    <RecommendedProduct/>
    </>
  );
}

export default App;
