import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
   return (
      <footer className='mt-16 bg-white  dark:bg-gray-900'>
         <div className='w-full'>
            <div className='grid max-w-screen-xl grid-cols-2 gap-8 px-4 py-6 mx-auto lg:py-8 md:grid-cols-4 md:px-6 lg:px-8'>
               <div className=''>
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
                  <div className='flex gap-4'>
                     <a
                        href='#'
                        className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
                     >
                        <Facebook />
                     </a>
                     <a
                        href='#'
                        className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
                     >
                        <Instagram />
                     </a>
                     <a
                        href='#'
                        className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
                     >
                        <Twitter />
                     </a>
                     <a
                        href='#'
                        className='text-gray-400 hover:text-gray-900 dark:hover:text-white'
                     >
                        <Youtube />
                     </a>
                  </div>
               </div>
               <div>
                  <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                     Menu link
                  </h2>
                  <ul className='font-medium text-gray-500 dark:text-gray-400'>
                     <li className='mb-4 border-b border-slate-400 hover:bg-slate-50'>
                        <a href='#'>Blog</a>
                     </li>
                     <li className='mb-4 border-b border-slate-400 hover:bg-slate-50'>
                        <a href='#'>About us</a>
                     </li>
                     <li className='mb-4 border-b border-slate-400 hover:bg-slate-50'>
                        <a href='#'>Contact us</a>
                     </li>
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
