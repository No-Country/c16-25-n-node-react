import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const PrevArrow = (props) => (
  <button {...props} className="slick-arrow  slick-prev text-red-500">
    Prev
  </button>
);

const NextArrow = (props) => (
  <button {...props} className="slick-arrow slick-next">
    Next
  </button>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Habilitar las flechas de navegación
    prevArrow: <PrevArrow />, // Componente personalizado para la flecha anterior
    nextArrow: <NextArrow />, // Componente personalizado para la flecha siguiente
  };

  return (
    <div className="container mt-12 mx-auto">
      <div className="relative w-11/12 pt-6 px-6 pb-2">
        <Slider {...settings}>
          <div>
            <img
              className="object-fill h-auto md:rounded-l-lg"
              src={banner1}
              alt="Imagen"
            />
          </div>
          <div>
            <img
              className="object-fill h-auto w-full md:rounded-l-lg"
              src={banner2}
              alt="Imagen"
            />
          </div>
          <div>
            <img
              className="object-fill h-auto w-full md:rounded-l-lg"
              src={banner3}
              alt="Imagen"
            />
          </div>
        </Slider>
        <ul className="flex justify-center p-2 mt-4 space-x-4"></ul>
      </div>
    </div>
  );
};

export default Carousel;
