import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";

export default function ProductBox({_id,title,description,price,images}) {
    const {addProduct} = useContext(CartContext);
    return (

        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center gap-4 transition hover:shadow-lg hover:scale-[1.02] duration-200">
        <Link href={`/product/${_id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600 text-center">
          {title}
        </Link>
        
        <div className="w-full flex justify-center">
        <Image
            src={images[0]}
            alt={title}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        
        <div className="w-full text-center">
          <div className="text-xl font-medium text-gray-700 mb-2">
            ${price}
          </div>
          <button
            onClick={() => addProduct(_id)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    )
}