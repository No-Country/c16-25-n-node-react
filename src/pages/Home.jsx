import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
// import { AuthProvider } from 'react-firebase-hooks/auth';
import { Link } from "wouter";


import ProductList from "../components/ProductList"

function Home({products, searchText, category}) {//props para filtrado y busqueda
    

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

            <ProductList products={products} searchText={searchText} category={category} />

            {/* <ShoppingCart cartItems={cart} onRemoveItem={handleRemoveFromCart} /> */}

            {/* <h3>Detalles del Producto:</h3>
            <ProductDetail productId="9H1ZbrozIEAmbgHRg3NR" /> */}
        </>
    )
}


export default Home