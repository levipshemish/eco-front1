import "@/styles/globals.css";
import {CartContextProvider} from '@/components/CartContext';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return  (
    <>
       <CartContextProvider>
        <main className={inter.className}>
        <Component  {...pageProps} />
        </main>
   </CartContextProvider>
    </>
 
  )
  
}
