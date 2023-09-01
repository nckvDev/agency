import Image from 'next/image'
import React from 'react'

const Banner = () => {
   return (
      <div className='relative w-full h-screen'>
         {/* <div className='absolute top-0 left-0 w-full h-screen bg-black/40 -z-10 '></div> */}
         <img
            src='/images/bg-1.png'
            alt='cover image'
            className='absolute top-0 left-0 object-cover w-full h-screen overflow-auto -z-20'
         />
      </div>
   )
}

export default Banner
