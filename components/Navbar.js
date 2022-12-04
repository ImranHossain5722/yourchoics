import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className=''>
            <div className='bg-white flex flex-col md:flex-row md:justify-start justify-center items-center'>
                <div className='logo-container'>

                    <Image width={150} height={50} src="/logo.png" alt='logo' />
                </div>
                <div className='nav ' >
                    <ul className='text-black flex space-x-3 font-semibold '>
                        <Link href={'/'}> <li>Home</li>  </Link>
                        <Link href={'/'}> <li>T-shirts</li> </Link>
                        <Link href={'/'} > <li>Hoodies</li> </Link>
                        <Link href={'/'} > <li>About Us</li> </Link>
                        <Link href={'/'}>  <li>Contact us</li> </Link>
                    </ul>
                </div>
                <div className='cart absolute  right-0 mx-5'>
                    <AiOutlineShoppingCart className='text-2xl text-black'  />

                </div>
            </div>
        </div>
    );
};

export default Navbar;