import React from "react";
import Link from "next/link";
import Image from "next/image";
import Product from "../models/Product";
import mongoose from "mongoose";

const tshirt = ({ products }) => {
  // console.log(products)
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="">
            <div className=" flex flex-wrap mx-auto justify-center ">
              {products.map((item) => {
                return (
                  <Link
                    key={item._id}
                    href={`/products/${item.id}`}
                    className="lg:w-1/5  md:w-1/2  w-full shadow-lg m-3"
                  >
                    <a className="block relative  rounded overflow-hidden">
                      <img alt="ecommerce"
                        className="m-auto h-[30vh] md:h-[35vh] blcok"
                        src={item.img} />
                    </a>
                    <div className="mt-4 p-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
        
                        {item.title}
                      </h2>
                      <p className="mt-1">${item.price}</p>
                      <p className="mt-1">{item.size}</p>
                      <p className="mt-1">{item.color}</p>
                      
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// data fetching
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({category:"t-shirt"});
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}
export default tshirt;
