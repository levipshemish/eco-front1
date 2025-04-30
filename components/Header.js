import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
    const {cartProducts} = useContext(CartContext);
    return (
        <div className="flex justify-between p-3 mb-0 bg-[#FAFAFF] text-black">
            <Link href={'/'}>Ecommerce</Link>
            <nav className="flex gap-3">
                <Link href={'/'}>Home</Link>
                <Link href={'/products'}>All Products</Link>
                <Link href={'/cart'}>Cart ({cartProducts.length})</Link>
            </nav>
        </div>
    )
}