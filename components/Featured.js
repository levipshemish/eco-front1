import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart() {
        addProduct(product._id)
    } 
    return (
        <div className="text-[#30343F] h-80 flex justify-between items-center px-10 py-6 bg-white shadow-lg rounded-2xl">
        <div className="flex flex-col max-w-xl">
          <h1 className="text-3xl font-semibold uppercase mb-4">MacBook Air 2025</h1>
          <p className="text-base mb-6">
            The MacBook Air combines powerful performance with a lightweight design, making it ideal for work, creativity, and everyday use.
          </p>
          <div className="flex gap-4">
            <Link href={`/product/${product._id}`} className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition">
              Read More
            </Link>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition"
              onClick={addFeaturedToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="w-56 h-56 flex-shrink-0">
         <Image
            src="/Images/macbook_image.jpeg"
            alt="MacBook Air 2025"
            width={800}  // adjust to your layout
            height={600} // adjust to your layout
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>
      
    )
}
