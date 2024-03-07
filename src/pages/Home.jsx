import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

import ProductList from "../components/ProductList";
import Carousel from "../components/Carousel";
import Features from "../components/Features";

function Home() {
  const [user] = useAuthState(auth); // Obtén el estado de autenticación actual
  return (
    <>
      <Carousel />

      <div className="m-2 p-2 flex items-end w-10/12 mx-auto">
        <h1 className="mr-6 text-[#430199] text-3xl">Productos destacados</h1>
        <div className="flex-grow h-0.5 bg-[#430199]"></div>
      </div>

      <ProductList />

      <Features />

      <button className="text-[#430199]" >Cerrar sesión</button>

      <br />
      <br />

    </>
  );
}

export default Home;
