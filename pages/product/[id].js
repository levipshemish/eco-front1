import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext, useState } from "react";

export default function ProductPage({product}) {
    const {addProduct} = useContext(CartContext);
    const [activeImage,setActiveImage] = useState(product.images?.[0]);


    return (
        <div>
         <Header/>
         <div className="bg-white flex justify-around">
            <div className="mb-5">
                <div><img  className='w-50 m-5' src={activeImage}/></div>
                 <div className="flex gap-7 px-7">
                    {product.images.map(image => (
                        <div key={image}
                        className={image === activeImage ? "border-2 rounded-sm border-blue-500" : ""}
                            onClick={() => setActiveImage(image)}>
                            <img className="max-w-18 h-12" src={image}/>   
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="flex flex-col gap-6 text-black px-8 py-6">
                <div className="text-black text-4xl mb-7">{product.title}</div>
                <p className="text-xl mb-10">{product.description}</p>
                <div className="flex items-center gap-4 mb-5">
                <div className="text-2xl">
                    ${product.price}
                </div>
                <button className="bg-purple-300 py-2 px-3 text-gray-700 rounded-md" onClick={() => addProduct(product._id)}>
                    Add to Cart
                </button>
                </div>
            </div>
           
            </div>
           
         </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
      }
    }
  }