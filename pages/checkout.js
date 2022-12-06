import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { IoIosCloseCircle, IoBagCheckOutline } from 'react-icons/io'

const checkout = ({cart , addCart, removeFromCart, clearCart}) => {
    return (
        <div className='container m-auto'>
            <h1 className='text-center font-bold'>Checkout</h1>
            <h2 className='font-bold text-xl mx-3'>1.Delivery Details</h2>
            <div className='flex mx-auto'>
                <div className="m-4 w-1/2">
                    <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="m-4 w-1/2">
                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className='flex mx-auto'>
                <div className="m-4 w-1/2">
                    <label for="Address" className="leading-7 text-sm text-gray-600">Address</label>
                    <textarea type="address" id="address" name="address" col="10" rows="1" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="m-4 w-1/2">
                    <label for="number" className="leading-7 text-sm text-gray-600">Phone Number</label>
                    <input type="text" id="number" name="number" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className='flex mx-auto'>
                <div className="m-4 w-1/2">
                    <label for="city" className="leading-7 text-sm text-gray-600">City</label>
                    <input type="text" id="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="m-4 w-1/2">
                    <label for="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
                    <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className='m-5'>
                <h2 className='font-bold text-xl my-3'>2.Review the cart items</h2>

                <div  className='sidebar w-full bg-gray-100 p-7 rounded-md shadow-sm '> <h2 className='font-bold text-xl text-center mb-5'>Shopping cart</h2>
                
                    <ol className='list-decimal font-semibold'>
                        {Object.keys(cart).length == 0 && <div className=''><p className='text-center text-sm'>Your cart is empty. Please add a few items to checkout </p></div>}
                        {Object.keys(cart).map((k) => {
                            return <li key={k} >
                                <div className='item flex my-5'>
                                    <div className='w-2/3'> {cart[k].name}</div>
                                    <div className='w-1/3 flex items-center justify-center '><AiOutlinePlusCircle onClick={() => { addCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-1 text-lg cursor-pointer' />{cart[k].qty}<AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-1 text-lg cursor-pointer' /> </div>
                                </div>
                            </li>
                        })}
                    </ol>
                    <div className="flex mt-2 ">

                        <Link href={'/checkout'}><button className="flex mr-2  text-white bg-indigo-500 
                 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"> Checkout </button> </Link>

                        <button onClick={clearCart} className="flex mr-2  text-white bg-indigo-500 
                 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"> Clear Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default checkout;