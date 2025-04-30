import { CartContext } from "@/components/CartContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";


export default function CartPage() {
    const {cartProducts,addProduct,removeProduct,clearCart} = useContext(CartContext);
    //display products in cart
    const [products, setProducts] = useState([]);
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [country, setCountry] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    
    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', {ids:cartProducts})
            .then(response => {
                setProducts(response.data)
            })
        } else {
            setProducts([]);
        }
    }, [cartProducts]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        if (window?.location.href.includes('success')) {
            setIsSuccess(true)
            clearCart();
        }
    }, [clearCart])

    function moreOfThisProduct(id) {
        addProduct(id);
    }

    function lessOfThisProduct(id) {
        removeProduct(id)
    }

    async function goToPayment() {
        const response  = await axios.post('/api/checkout', {
            name,email,city,postalCode,streetAddress,country,cartProducts,
        });
        if (response.data.url) {
            window.location = response.data.url;
        }
    }
    let total = 0;
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0;
        total += price
    }

    if (isSuccess) {
        return (
            <div>
                <Header/>
                <div>
                    <h2>thanks for your order.</h2>
                    <p>We will email you shortly</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header/>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <h2 className="text-3xl p-3 mb-2">Cart</h2>
                    {!cartProducts?.length && (
                        <div className="px-4 py-4 text-2xl">Your Cart is empty</div>
                    )}    
                    {products?.length > 0 && (
                        <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-gray-100 text-lg text-gray-800">
                            <th className="px-4 py-3">Product</th>
                            <th className="px-4 py-3">Quantity</th>
                            <th className="px-4 py-3">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map(product => (
                            <tr key={product._id} className="border-t">
                              <td className="px-4 py-3 flex items-center gap-4">
                                <img src={product.images[0]} alt={product.title} className="w-20 h-20 object-cover rounded" />
                                <span className="font-medium text-gray-700">{product.title}</span>
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <button 
                                    onClick={() => lessOfThisProduct(product._id)} 
                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                  >-</button>
                                  <label>{cartProducts.filter(id => id === product._id).length}</label>
                                  <button 
                                    onClick={() => moreOfThisProduct(product._id)} 
                                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                  >+</button>
                                </div>
                              </td>
                              <td className="px-4 py-3">
                                ${cartProducts.filter(id => id === product._id).length * product.price}
                              </td>
                            </tr>
                          ))}
                          <tr className="font-semibold border-t">
                            <td className="px-4 py-3"></td>
                            <td className="px-4 py-3 text-right">Total:</td>
                            <td className="px-4 py-3">${total}</td>
                          </tr>
                        </tbody>
                      </table>
                      
                    )}
                </div>
                {!!cartProducts?.length && (
                      <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto mt-8 space-y-4">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Information</h2>
                    
                      <div className="space-y-3">
                        <input 
                          type="text"
                          placeholder="Name"
                          value={name}
                          name="name"
                          onChange={ev => setName(ev.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input 
                          type="text"
                          placeholder="Email"
                          value={email}
                          name="email"
                          onChange={ev => setEmail(ev.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input 
                          type="text"
                          placeholder="City"
                          value={city}
                          name="city"
                          onChange={ev => setCity(ev.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input 
                          type="text"
                          placeholder="Postal Code"
                          value={postalCode}
                          name="postalCode"
                          onChange={ev => setPostalCode(ev.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input 
                          type="text"
                          placeholder="Street Address"
                          value={streetAddress}
                          name="street address"
                          onChange={ev => setStreetAddress(ev.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input 
                          type="text"
                          placeholder="Country"
                          value={country}
                          name="country"
                          onChange={ev => setCountry(ev.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                    
                      <button 
                        onClick={goToPayment}
                        className="w-full py-3 mt-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
                      >
                        Continue to Payment
                      </button>
                    </div>
                    
                )}
              
            </div>
        </div>
    )
}