import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { AiOutlineShoppingCart, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { IoIosCloseCircle, IoBagCheckOutline } from 'react-icons/io'
import { MdAccountCircle } from 'react-icons/md'


const Navbar = ({ cart, addCart, removeFromCart, clearCart, subTotal }) => {
    // console.log(cart , addCart, removeFromCart, clearCart, subTotal)

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
        <div className='sticky top-0 z-10'>
            <div className='bg-white flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md my-1  ' >
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
                <div className='cart flex absolute  right-0 mx-5 cursor-pointer'>
                    <Link href={'/login'}><MdAccountCircle className='text-2xl text-black mr-3' />
                    </Link>
                    <AiOutlineShoppingCart onClick={toggleCart} className='text-2xl text-black' />

                </div>
            </div>
            <div ref={ref} className={`sidebar w-72 h-[100vh]  absolute top-14 right-0 bg-gray-100 p-7 transition-transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`} > <h2 className='font-bold text-xl text-center mb-5'>Shopping cart</h2>
                <span onClick={toggleCart} className='absolute top-2 right-0 cursor-pointer'><IoIosCloseCircle className='' /></span>

                <ol className='list-decimal font-semibold'>
                    {Object.keys(cart).length == 0 && <div className=''><p className='text-center text-sm'>Your cart is empty. Please add a few items to checkout </p></div>}
                    {Object.keys(cart).map((k) => {
                        return <li key={k} >
                            <div className='item flex my-5'>
                                <div className='w-2/3'> {cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                                <div className='w-1/3 flex items-center justify-center '><AiOutlinePlusCircle onClick={() => { addCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-1 text-lg cursor-pointer' />{cart[k].qty}<AiOutlineMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='mx-1 text-lg cursor-pointer' /> </div>
                            </div>
                        </li>
                    })}
                </ol>
                <span className='text-lg font-bold'>Subtotal: {subTotal} $</span>
                <div className="flex mt-2 ">

                    <Link href={'/checkout'}><button className="flex mr-2  text-white bg-indigo-500 
                 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"> Checkout </button> </Link>

                    <button onClick={clearCart} className="flex mr-2  text-white bg-indigo-500 
                 border-0 p-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"> Clear Cart</button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;