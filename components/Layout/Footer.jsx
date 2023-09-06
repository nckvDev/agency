'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
   const pathname = usePathname()

   const socialLinks = [
      {
         link: 'https://www.facebook.com/idevflow',
         img: '/images/icons/facebook.png',
      },
      {
         link: 'https://line.me/R/ti/p/@823snnnf',
         img: '/images/icons/line.png',
      },
      {
         link: 'https://www.tiktok.com/@idev66',
         img: '/images/icons/tik-tok.png',
      },
      {
         link: 'https://www.youtube.com/@idevflow',
         img: '/images/icons/youtube.png',
      },
   ]

   const linkLists = [
      {
         name: 'Blog',
         link: '/blog',
      },
      {
         name: 'About us',
         link: '/about',
      },
      {
         name: 'Contact us',
         link: '/contact',
      },
   ]

   return (
      <footer className='mt-16 bg-white dark:bg-gray-900'>
         <div className='w-full'>
            <div className='grid max-w-screen-xl grid-cols-1 gap-4 px-4 py-6 mx-auto sm:gap-8 sm:grid-cols-2 lg:py-8 md:grid-cols-4 md:px-6 lg:px-8'>
               <div>
                  <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                     location
                  </h2>
                  <p className='font-medium text-gray-700 dark:text-gray-400'>
                     บริษัท ไอเดฟโฟลว์ จากัด
                  </p>
                  <p className='mb-6 font-medium text-gray-500 dark:text-gray-400'>
                     เลขที่ 66 ซอยมิตรภาพ 19 ตาบลในเมือง อำเภอเมืองนครราชสีมา จังหวัดนครราชสีมา
                     30000
                  </p>
               </div>
               <div>
                  <div>
                     <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                        Email
                     </h2>
                     <p className='mb-4 font-medium text-gray-500 md:mb-6 dark:text-gray-400'>
                        <a href='mailto:info@idevflow.com'>info@idevflow.com</a>
                     </p>
                  </div>
                  <div>
                     <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                        Call center
                     </h2>
                     <p className='mb-4 font-medium text-gray-500 md:mb-6 dark:text-gray-400'>
                        086-533-2555
                     </p>
                  </div>
               </div>
               <div>
                  <div>
                     <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                        Subscribe
                     </h2>
                     <p className='mb-4 font-medium text-gray-500 md:mb-6 dark:text-gray-400'>
                        รับข่าวสารบทความการตลาดออนไลน์ และโปรโมชั่นใหม่ๆ ก่อนใคร เพียงติดตาม
                        ผ่านช่องทาง
                     </p>
                  </div>
                  <div className='flex gap-4 mt-6'>
                     {socialLinks.map((social, index) => (
                        <a key={index} href={social.link} target='_blank'>
                           <Image
                              src={social.img}
                              alt='logo image'
                              width={24}
                              height={24}
                              // className='transition grayscale hover:grayscale-0'
                           />
                        </a>
                     ))}
                  </div>
               </div>
               <div>
                  <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                     Menu link
                  </h2>
                  <ul className='font-medium text-gray-500 dark:text-gray-400'>
                     {linkLists.map((list, index) => {
                        const isActive = pathname === list.link ? 'bg-slate-100' : ''
                        return (
                           <li
                              key={index}
                              className={`mb-4 transition-all border-b border-slate-400 hover:bg-slate-50 ${isActive}`}
                           >
                              <Link href={list.link}>{list.name}</Link>
                           </li>
                        )
                     })}
                     {/* <li className='mb-4 border-b border-slate-400 hover:bg-slate-50'>
                        <a href='#'>About us</a>
                     </li>
                     <li className='mb-4 border-b border-slate-400 hover:bg-slate-50'>
                        <a href='#'>Contact us</a>
                     </li> */}
                  </ul>
               </div>
            </div>
            <div className='px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between'>
               <span className='text-sm text-gray-500 dark:text-gray-300 sm:text-center'>
                  © 2023 <a href='https://idevflow.com/'>IDEVFLOW</a>. All Rights Reserved.
               </span>
            </div>
         </div>
      </footer>
   )
}

export default Footer
