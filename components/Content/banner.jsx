import Image from 'next/image'
import React from 'react'

const Banner = () => {
   return (
      <div className='w-full'>
         <Image
            src='/images/background.png'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            alt='cover image'
         />
      </div>
   )
}

export default Banner
