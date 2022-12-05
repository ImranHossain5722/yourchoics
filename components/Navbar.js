import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { IoIosCloseCircle, IoBagCheckOutline } from 'react-icons/io'


const Navbar = () => {

    const toggleCart = () => {

        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const ref = useRef()

    return (
        <div className=''>
            <div className='bg-white flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md my-1'>
                <div className='logo-container'>

                    <Link href={'/'}>
                        <Image width={150} height={50} src="/logo.png" alt='logo' /> </Link>
                </div>
                <div className='nav ' >
                    <ul className='text-black text-md flex space-x-3 font-semibold '>
                        <Link href={'/'}> <li>Home</li>  </Link>
                        <Link href={'/tshirt'}> <li>T-shirts</li> </Link>
                        <Link href={'/hoodies'} > <li>Hoodies</li> </Link>
                        <Link href={'/about'} > <li>About Us</li> </Link>
                        <Link href={'/contact'}>  <li>Contact us</li> </Link>
                    </ul>
                </div>

                {/* cart menu */}
                <div onClick={toggleCart} className='cart absolute  right-0 mx-5 cursor-pointer'>
                    <AiOutlineShoppingCart className='text-2xl text-black' />
                </div>
            </div>
            <div ref={ref} className='sidebar w-72 h-full  absolute top-14 right-0 bg-gray-100 p-7 transition-transform translate-x-full z-30 '> <h2 className='font-bold text-xl text-center mb-5'>Shopping cart</h2>
                <span onClick={toggleCart} className='absolute top-2 right-0 cursor-pointer'><IoIosCloseCircle className='' /></span>
                <ol className='list-decimal font-semibold'>
                    <li>
                        <div className='item flex my-5'>
                            <div className='w-2/3'> T-shirt-your choice</div>
                            <div className='w-1/3 flex items-center justify-center '><AiOutlinePlusCircle className='mx-1 text-lg cursor-pointer' />2<AiOutlineMinusCircle className='mx-1 text-lg cursor-pointer' /> </div>
                        </div>
                    </li>
                    <li>
                        <div className='item flex my-5'>
                            <div className='w-2/3'> T-shirt-your choice</div>
                            <div className='w-1/3 flex items-center justify-center '><AiOutlinePlusCircle className='mx-1 text-lg cursor-pointer' />2<AiOutlineMinusCircle className='mx-1 text-lg cursor-pointer' /> </div>
                        </div>
                    </li>
                    <li>
                        <div className='item flex my-5'>
                            <div className='w-2/3'> T-shirt-your choice</div>
                            <div className='w-1/3 flex items-center justify-center '><AiOutlinePlusCircle className='mx-1 text-lg cursor-pointer' />2<AiOutlineMinusCircle className='mx-1 text-lg cursor-pointer' /> </div>
                        </div>
                    </li>
                    <li>
                        <div className='item flex my-5'>
                            <div className='w-2/3'> T-shirt-your choice</div>
                            <div className='w-1/3 flex items-center justify-center '><AiOutlinePlusCircle className='mx-1 text-lg cursor-pointer' />2<AiOutlineMinusCircle className='mx-1 text-lg cursor-pointer' /> </div>
                        </div>
                    </li>
                    <li>
                        <div className='item flex my-5'>
                            <div className='w-2/3'> T-shirt-your choice</div>
                            <div className='w-1/3 flex items-center justify-center '><AiOutlinePlusCircle className='mx-1 text-lg cursor-pointer' />2<AiOutlineMinusCircle className='mx-1 text-lg cursor-pointer' /> </div>
                        </div>
                    </li>
                </ol>
                <div className="flex mt-2 ">

                <button className="flex mr-2  text-white bg-indigo-500 
                 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"> Checkout </button>

                <button className="flex mr-2  text-white bg-indigo-500 
                 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"> Clear Cart</button>

                 </div>
            </div>
        </div>
    );
};

export default Navbar;