import ProductCard from "../ProductCard"

function ProductsGrid({products}) {
  let productsTest = []
  for (let i = 0; i < 6; i++) {
    products.forEach(e => {
      productsTest.push(e)
    });
  }
  
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-y-5 gap-x-8 grid-flow-row min-w-max mb-20">
      {/* {products.map((product)=>(
        <ProductCard
          key={product.id}
          product={product}
        />
      ))} */}
      {/* para testear con 12 elementos */}
      {products.map((product)=>(
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  )
}

export default ProductsGrid