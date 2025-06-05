import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { IoHomeSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";



export default function Header() {
    const {cartProducts} = useContext(CartContext);
    return (
        <div className="flex justify-between items-center p-3 mb-0 bg-[#FAFAFF] text-black">
            <Link href={'/'}>
              <img className="w-10 h-10" src={'/Images/ChatGPT Image Jun 5, 2025, 09_17_31 AM.png'}/>
            </Link>
            <nav className="flex gap-5">
                <Link href={'/'}>
                <IoHomeSharp className="text-gray-500 hover:text-purple-400 w-8 h-8"/>
                </Link>
                <Link className="flex gap-2 text-gray-500 hover:text-purple-400" href={'/cart'}>
                  <FaShoppingCart className="text-gray-500 hover:text-purple-400 w-8 h-8"/>
                 ({cartProducts.length})
                 </Link>
                 <Link className="text-gray-600 hover:text-purple-400" href={'/products'}>All Products</Link>
            </nav>
        </div>
    )
}