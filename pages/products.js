import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage({products}) {
    return (
        <div className="bg-[#FAFAFF]">
            <Header/>
            <h1 className="text-4xl m-5 text-[#30343F]">All Products</h1>
            <div className="w-[90vw] flex mx-auto gap-10 flex-wrap">
            {products?.length > 0 && products.map(product => (
                <div key={product._id} className="flex flex-col gap-2 items-center bg-slate-300 w-40 rounded-lg" >
                    <div className="text-xl text-[#30343F]">
                    {product.title}
                    </div>
                    
                    <Link href={'/product/'+product._id}>
                    <Image
                            src={product.images[0]}
                            alt={product.title}
                            width={120}
                            height={120}
                            className="max-w-30 object-cover"
                     />
                    </Link>
                    <div className='text-xl text-[#30343F]' >{product.price}$</div>
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
