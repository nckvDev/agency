import Image from 'next/image'

const Banner = () => {
   return (
      <div className='relative w-full h-screen'>
         {/* <div className='absolute top-0 left-0 w-full h-screen bg-black/40 -z-10'></div> */}
         <Image
            src='/images/bg-2.png'
            alt='cover image'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover'
            // className='absolute top-0 left-0 object-cover w-full h-screen overflow-auto -z-20'
         />
      </div>
   )
}

export default Banner
