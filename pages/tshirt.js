import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const tshirt = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap mx-auto">
                            <div className="lg:w-1/5  md:w-1/2  w-full shadow-lg m-3">
                            <Link href={'/products/the-code'}>
                                <a className="block relative  rounded overflow-hidden">
                                    <img alt="ecommerce" className=" m-auto    h-[30vh] md:h-[35vh]   blcok"  src="https://m.media-amazon.com/images/I/815neXEKmeL._AC_UL320_.jpg"/> </a>
                                <div className="mt-4 p-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Your choice tshirts</h2>
                                    <p className="mt-1">$16.00</p>
                                    <p className="mt-1">S, M, L, XL, XXL</p>
                                </div>
                                </Link>
                            </div>

                            <div className="lg:w-1/5 md:w-1/2 w-full shadow-lg m-3">
                            <Link href={'/products/the-code'}>
                                <a className="block relative  rounded overflow-hidden">
                                    <img alt="ecommerce" className=" m-auto    h-[30vh] md:h-[35vh]   blcok"  src="https://m.media-amazon.com/images/I/815neXEKmeL._AC_UL320_.jpg"/> </a>
                                <div className="mt-4 p-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Your choice tshirts</h2>
                                    <p className="mt-1">$16.00</p>
                                    <p className="mt-1">S, M, L, XL, XXL</p>
                                </div>
                                </Link>
                            </div>

                            <div className="lg:w-1/5 md:w-1/2 w-full shadow-lg m-3 ">
                            <Link href={'/products/the-code'}>
                                <a className="block relative  rounded overflow-hidden">
                                    <img alt="ecommerce" className=" m-auto    h-[30vh] md:h-[35vh]   blcok"  src="https://m.media-amazon.com/images/I/815neXEKmeL._AC_UL320_.jpg"/> </a>
                                <div className="mt-4 p-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Your choice tshirts</h2>
                                    <p className="mt-1">$16.00</p>
                                    <p className="mt-1">S, M, L, XL, XXL</p>
                                </div>
                                </Link>
                            </div>

                            <div className="lg:w-1/5 md:w-1/2 w-full shadow-lg m-3">
                            <Link href={'/products/the-code'}>
                                <a className="block relative  rounded overflow-hidden">
                                    <img alt="ecommerce" className=" m-auto    h-[30vh] md:h-[35vh]   blcok"  src="https://m.media-amazon.com/images/I/815neXEKmeL._AC_UL320_.jpg"/> </a>
                                <div className="mt-4 p-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Your choice tshirts</h2>
                                    <p className="mt-1">$16.00</p>
                                    <p className="mt-1">S, M, L, XL, XXL</p>
                                </div>
                                </Link>
                            </div>
                         

                           
                    </div>
                </div>
            </section>
        </div>
    );
};

export default tshirt;