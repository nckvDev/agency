import Image from 'next/image'
import React from 'react'

const Present = ({ children, rtl, video, image }) => {
   const styleRTL = rtl ? 'col-start-1 row-start-1' : null
   const styleLTR = rtl ? 'col-span-2 md:col-span-2 lg:ml-28' : 'col-span-2 md:col-span-2'
   return (
      <div className='w-full h-full mt-8 md:mt-14 lg:mt-20'>
         <div className='relative top-0 left-0 w-full h-full'>
            <div className='flex items-center justify-center flex-grow px-4 mx-auto max-w-7xl md:px-6 lg:px-8'>
               <div className='grid items-center w-full grid-cols-1 md:gap-4 md:grid-cols-3'>
                  <div className={styleLTR}>{children}</div>
                  <div className={styleRTL}>
                     <div className='md:pt-4'>
                        {image ? (
                           <div className='relative aspect-[9/16] hidden md:block'>
                              <Image
                                 src={image}
                                 alt='showcase'
                                 fill
                                 className='object-cover'
                                 sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              />
                           </div>
                        ) : (
                           <video
                              className='w-full rounded-xl'
                              controls
                              // src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
                              poster='/images/ban.png'
                              width='620'
                           >
                              Sorry, your browser does not support embedded videos, but do not
                              worry, you can
                              <a href='https://archive.org/details/BigBuckBunny_124'>download it</a>
                              and watch it with your favorite video player!
                           </video>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Present
