import { CartContext } from "@/components/CartContext";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";


export default function ProductsPage({products}) {
    const {addProduct} = useContext(CartContext);
    return (
        <div className="bg-[#FAFAFF]">
            <Header/>
            <div className="w-[80vw] mx-auto bg-[#F0F3F2] h-30 rounded-md flex items-center  my-10">
                <div className="text-3xl px-9 roboto">All Products</div>
            </div>
            <div className="w-[80vw] flex mx-auto gap-10 flex-wrap">
            {products?.length > 0 && products.map(product => (
                <div key={product._id} className="flex flex-col gap-2 items-center bg-white border border-gray-400 hover:border-green-500 w-40 rounded-lg" >
                    <Link href={'/product/'+product._id}>
                    <Image
                            src={product.images[0]}
                            alt={product.title}
                            width={120}
                            height={120}
                            className="w-[120px] h-[120px] my-2 object-cover rounded-md"
                     />
                    </Link>
                    <div className="text-lg py-1 text-[#30343F]">
                     {product.title}
                     </div>
                    <div className="flex gap-2 items-center my-2 ">
                     <div>
                     <button className="bg-[#0AAD09] hover:bg-green-500 flex items-center gap-1 py-2 px-3 text-white text-sm rounded-md" onClick={() => addProduct(product._id)}>
                     <FaPlus />
                        Add
                </button>
                     </div>
                     <div className='text-md text-[#30343F]' >{product.price}$</div>
                    </div>
                  
                </div>
                
      ))}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, {sort:{'_id':-1}});
    return {
        props:{
            products: JSON.parse(JSON.stringify(products))
        }
    }
}
