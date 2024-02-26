import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { Link } from "wouter";

import ProductList from "../components/ProductList";
import Carousel from "../components/Carousel";
import Features from "../components/Features";

function Home() {
  const [user] = useAuthState(auth); // Obtén el estado de autenticación actual

  return (
    <>
      <Carousel />

      <div className="m-2 p-2 flex items-end">
        <h1 className="mr-6 text-[#430199] text-3xl">Productos destacados</h1>
        <div className="flex-grow h-0.5 bg-[#430199]"></div>
      </div>

      <ProductList />

    <Features />

      <h1>Geek E-commerce</h1>
      <h2>
        Bienvenido:
        {user && <p>Email: {user.email}</p>}
        {/* Muestra el email del usuario si está autenticado */}
      </h2>
      <button onClick={() => auth.signOut()}>Cerrar sesión</button>

      <br />
      <br />
      <Link href="/cart">Ir al Carrito</Link>

    </>
  );
}

export default Home;
