import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";
import Carousel from "./Carousel";

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart() {
        addProduct(product._id)
    } 
    return (
      <div className="text-[#30343F] min-h-screen px-7 py-6 bg-white pb-24">
      <div className="flex flex-col gap-5 mb-10 mt-10">
        <h1 className="text-5xl font-bold text-[#101517] font-inter">Coffee Palace</h1>
        <p className="text-xl">
        <span>Discover the perfect brew at Coffee Palace.</span> <br/>
        We offer a rich variety of premium coffee beans sourced from around the world — freshly roasted and delivered to your door.
        </p>
        <div className="flex gap-4">
          <Link
            href={`/products`}
            className="bg-[#873EFF] hover:bg-[#873EFF] text-white py-4 px-5 rounded-md transition"
            onClick={addFeaturedToCart}
          >
            Explore Products
          </Link>
        </div>
      </div>
    
      <div className="w-full h-auto max-h-[80vh]">
        <Carousel />
      </div>
    </div>
    
      
    )
}
