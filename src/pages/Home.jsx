import ProductList from "../components/ProductList";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import CarouselLogo from "../components/CarouselLogo";
import FilterNav from "../components/FilterNav";

function Home() {
  return (
    <>
      <FilterNav />
      
      <Carousel />

      <div className="m-2 p-2 flex items-end w-10/12 mx-auto">
        <h1 className="mr-6 text-[#430199] text-3xl">Productos destacados</h1>
        <div className="flex-grow h-0.5 bg-[#430199]"></div>
      </div>

      <ProductList />

      <Features />

      <CarouselLogo />
      </>
  );
}

export default Home;
