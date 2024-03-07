import { useEffect } from "react";
import Glide from "@glidejs/glide";

import logo_dc from "../assets/logo_dc.png";
import logo_marvel from "../assets/logo_marvel.png";
import logo_nintendo from "../assets/logo_nintendo.png";
import logo_starwars from "../assets/logo_starwars.png";
import logo_deamon from "../assets/logo_deamon.png";
import logo_dragonball from "../assets/logo_dragonball.png";

export default function CarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative p-4 w-full overflow-hidden">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={logo_dc}
                alt="logo_dc"
                className="m-auto h-14 max-h-16 w-auto max-w-full sm:h-12 sm:max-h-12"
              />
            </li>

            <li>
              <img
                src={logo_marvel}
                alt="logo_marvel"
                className="m-auto h-14 max-h-16 w-auto max-w-full sm:h-12 sm:max-h-12"
              />
            </li>
            <li>
              <img
                src={logo_nintendo}
                alt="logo_nintendo"
                className="m-auto h-14 max-h-16 w-auto max-w-full sm:h-12 sm:max-h-12"
              />
            </li>
            <li>
              <img
                src={logo_starwars}
                alt="logo_starwars"
                className="m-auto h-14 max-h-16 w-auto max-w-full sm:h-12 sm:max-h-12"
              />
            </li>
            <li>
              <img
                src={logo_deamon}
                alt="logo_deamon"
                className="m-auto h-14 max-h-16 w-auto max-w-full sm:h-12 sm:max-h-12"
              />
            </li>
            <li>
              <img
                src={logo_dragonball}
                alt="logo_dragonball"
                className="m-auto h-14 max-h-16 w-auto max-w-full sm:h-12 sm:max-h-12"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
