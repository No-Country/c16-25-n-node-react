import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
// import { AuthProvider } from 'react-firebase-hooks/auth';

import ProductDetail from "../components/ProductDetail"
import ProductList from "../components/ProductList"

function Home() {
    const [user] = useAuthState(auth); // Obtén el estado de autenticación actual

    return (
        <>
            <h1>Geek E-commerce</h1>
            <h2>Bienvenido: 
                {user && <p>Email: {user.email}</p>} 
                {/* Muestra el email del usuario si está autenticado */}
            </h2>
            <br />
            <br />
            <ProductList />
            <h3>Detalles del Producto:</h3>
            <ProductDetail productId="9H1ZbrozIEAmbgHRg3NR" />
        </>
    )
}


export default Home