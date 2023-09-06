'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/components/ui/sheet'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
   const [scrolled, setScrolled] = useState(false)
   const router = useRouter
   const pathname = usePathname()

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
   }, [])

   console.log('pathname', pathname)

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

               <NavigationMenu className='max-md:hidden max-w-max'>
                  <NavigationMenuList className='gap-6'>
                     {menus.map((menu) => {
                        const isActive = pathname === menu.link ? 'active' : ''
                        return (
                           <NavigationMenuItem key={menu.name}>
                              <Link href={menu.link} legacyBehavior passHref>
                                 <NavigationMenuLink
                                    className={`text-base transition-none ${isActive}`}
                                 >
                                    {menu.name}
                                 </NavigationMenuLink>
                              </Link>
                           </NavigationMenuItem>
                        )
                     })}
                  </NavigationMenuList>
               </NavigationMenu>

               <Sheet>
                  <SheetTrigger asChild>
                     <Button variant='outline' size='icon' className='md:hidden'>
                        <HamburgerMenuIcon className='w-4 h-4' />
                     </Button>
                  </SheetTrigger>
                  <SheetContent className='w-full xs:w-96'>
                     {/* <SheetHeader>
                        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                        <SheetDescription>
                           This action cannot be undone. This will permanently delete your account
                           and remove your data from our servers.
                        </SheetDescription>
                     </SheetHeader> */}

                     <div>
                        <NavigationMenu className='w-full mt-4'>
                           <NavigationMenuList className='flex-col w-full gap-4'>
                              {menus.map((menu) => {
                                 const isActive = pathname === menu.link ? 'active' : ''
                                 return (
                                    <NavigationMenuItem key={menu.name} className='w-full'>
                                       <Link href={menu.link} legacyBehavior passHref>
                                          <NavigationMenuLink
                                             className={`text-xl w-full block text-center ${isActive}`}
                                          >
                                             {menu.name}
                                          </NavigationMenuLink>
                                       </Link>
                                    </NavigationMenuItem>
                                 )
                              })}
                           </NavigationMenuList>
                        </NavigationMenu>
                     </div>
                  </SheetContent>
               </Sheet>
            </nav>
         </div>
      </header>
   )
}

export default Navbar
