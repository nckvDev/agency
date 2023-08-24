import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
   return (
      <header className='flex items-center justify-between w-full px-6 py-4 '>
         <nav>
            <Link href='/'>
               <Image src='/images/idev-logo.png' width={120} height={100} alt='logo idev' />
            </Link>
         </nav>

         <ul className='flex gap-6 text'>
            <li className='transition-colors cursor-pointer hover:text-blue-600'>Home</li>
            <li className='transition-colors cursor-pointer hover:text-blue-600'>Service</li>
            <li className='transition-colors cursor-pointer hover:text-blue-600'>Blog</li>
            <li className='transition-colors cursor-pointer hover:text-blue-600'>About Us</li>
            <li className='transition-colors cursor-pointer hover:text-blue-600'>Contact Us</li>
         </ul>
      </header>
   )
}

export default Navbar
