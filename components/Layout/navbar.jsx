'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/components/ui/sheet'

const Navbar = () => {
   const [scrolled, setScrolled] = useState(false)

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
   }, [])

   const handleScroll = () => {
      setScrolled(window.scrollY > 100)
   }

   const styleScroll = scrolled ? 'h-10' : 'h-12'
   const styleScrolled = scrolled ? 'py-4' : 'py-6'

   const menus = [
      { name: 'Home', link: '/' },
      { name: 'Service', link: '/service' },
      { name: 'Blog', link: '/blog' },
      { name: 'About Us', link: '/about' },
      { name: 'Contact Us', link: '/contact' },
   ]

   return (
      <header className='relative z-10'>
         <div
            className={`fixed top-0 left-0 right-0 px-4 ${styleScrolled} bg-white border-b sm:px-6 md:px-8 border-b-slate-200 transition-all`}
         >
            <nav className='flex items-center justify-between mx-auto max-w-7xl'>
               <Link href='/'>
                  <div className={`relative w-40 ${styleScroll} transition-all`}>
                     <Image
                        src='/images/idev-logo.png'
                        fill
                        alt='logo idev'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='object-contain'
                     />
                  </div>
               </Link>
               <ul className='flex gap-6 text max-md:hidden'>
                  <NavigationMenu className='gap-4 '>
                     {menus.map((menu) => (
                        <NavigationMenuItem key={menu.name} className='text-base'>
                           <Link href={menu.link} legacyBehavior passHref>
                              <NavigationMenuLink
                                 className={`${navigationMenuTriggerStyle()} text-base`}
                              >
                                 {menu.name}
                              </NavigationMenuLink>
                           </Link>
                        </NavigationMenuItem>
                     ))}
                  </NavigationMenu>
               </ul>

               <Sheet>
                  <SheetTrigger asChild>
                     <Button variant='outline' size='icon' className='md:hidden'>
                        <HamburgerMenuIcon className='w-4 h-4' />
                     </Button>
                  </SheetTrigger>
                  <SheetContent className='w-96'>
                     <SheetHeader>
                        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                        <SheetDescription>
                           This action cannot be undone. This will permanently delete your account
                           and remove your data from our servers.
                        </SheetDescription>
                     </SheetHeader>
                  </SheetContent>
               </Sheet>
            </nav>
         </div>
      </header>
   )
}

export default Navbar
