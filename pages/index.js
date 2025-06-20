//import Brands from "@/components/Brands";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({featuredProduct,newProducts}) {
  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      <Featured product={featuredProduct}/>
      
      <NewProducts products={newProducts}/>
      {/* <Brands/> */}
      <Footer/>
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '67e1af58c3732a54101f24ce';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    },
  }
}