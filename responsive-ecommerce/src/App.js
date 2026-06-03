import Navbar from "./components/Navbar";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductSpecs from "./components/ProductSpecs";
import ProductOptions from "./components/ProductOptions";
import QuantitySelector from "./components/QuantitySelector";
import RelatedProducts from "./components/RelatedProducts";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="product-container">
        <div className="gallery">
          <ProductGallery />
        </div>

        <div className="details">
          <ProductInfo />

          <ProductSpecs />

          <ProductOptions />

          <QuantitySelector />

          <button>Add To Cart</button>
        </div>
      </div>

      <RelatedProducts />

      <Reviews />
    </div>
  );
}

export default App;