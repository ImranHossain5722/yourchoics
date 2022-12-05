import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineShoppingCart  } from 'react-icons/ai'
import { IoIosCloseCircle } from 'react-icons/io'

const Navbar = () => {
    return (
        <div className=''>
            <div className='bg-white flex flex-col md:flex-row md:justify-start justify-center items-center shadow-md my-1'>
                <div className='logo-container'>

                    <Link href={'/'}> 
                    <Image width={150} height={50} src="/logo.png" alt='logo'/> </Link>
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
                <div className='cart absolute  right-0 mx-5'>
                    <AiOutlineShoppingCart className='text-2xl text-black' />
                </div>
            </div>
            <div className='sidebar absolute top-14 right-0 bg-gray-200 p-10'> <h2 className='font-bold text-xl'>Shopping cart</h2> 
            <span className='absolute top-2 right-0'><IoIosCloseCircle/></span>
            <ol>
                <li>                
              <span> T-shirt-your choice</span>
                </li>

            </ol>
            </div>
        </div>
    );
};

export default Navbar;