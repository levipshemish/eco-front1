import ProductBox from "./ProductBox";

export default function NewProducts({products}) {
    return (
        <div className="">
          <h2 className="text-2xl py-5 px-2 w-[80vw] mx-auto bg-[#FFFFFF] text-[#21313C]">Popular Products</h2>
         <div className="grid grid-cols-2 gap-4 bg-white w-[80vw] mx-auto">
        {products?.length > 0 && products.map(product => (              
              <div key={product._id}>
                    <ProductBox {...product}/>
                </div>
            ))}
             </div>
        </div>
    )
}
