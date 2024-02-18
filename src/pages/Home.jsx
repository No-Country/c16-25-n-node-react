import ProductDetail from "../components/ProductDetail"
import ProductList from "../components/ProductList"

function Home() {
    return (
        <>
            <h1>Geek E-commerce</h1>
            <br />
            <br />
            <ProductList />
            <h3>Detalles del Producto:</h3>
            <ProductDetail productId="9H1ZbrozIEAmbgHRg3NR" />
        </>
    )
}


export default Home