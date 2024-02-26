import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { Link } from "wouter";

import ProductList from "../components/ProductList"

function Home() {
    const [user] = useAuthState(auth); // Obtén el estado de autenticación actual

    console.log('Home se renderiza con: ', {products, searchText})
    return (
        <>
            <h1>Geek E-commerce</h1>
            <h2>Bienvenido: 
                {user && <p>Email: {user.email}</p>} 
                {/* Muestra el email del usuario si está autenticado */}
            </h2>
            <button onClick={() => auth.signOut()}>Cerrar sesión</button>
            <br />
            <br />
            <Link href="/cart">Ir al Carrito</Link>

            <ProductList />
        </>
    )
}


export default Home