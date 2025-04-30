import ProductBox from "./ProductBox";

export default function NewProducts({products}) {
    return (
        <div className="">
          <h2 className="text-2xl py-3 px-2 bg-[#FAFAFF] text-black">New Arrivals</h2>
         <div className="grid grid-cols-4 gap-4 bg-white w-[93vw] mx-auto">
        {products?.length > 0 && products.map(product => (              
              <div key={product._id}>
                    <ProductBox {...product}/>
                </div>
            ))}
             </div>
        </div>
    )
}
