import { Figma, Framer, Github, Instagram, Linkedin, Twitter } from 'lucide-react'

const InfiniteSlider = () => {
   const LOGOS = [
      <Figma key={'figma'} className='w-6 h-6' />,
      <Framer key={'framer'} className='w-6 h-6' />,
      <Twitter key={'twitter'} className='w-6 h-6' />,
      <Github key={'github'} className='w-6 h-6' />,
      <Instagram key={'instagram'} className='w-6 h-6' />,
      <Linkedin key={'linkedin'} className='w-6 h-6' />,
   ]
   return (
      <div className="relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
         <div className='animate-infinite-slider flex w-[calc(250px*10)]'>
            {LOGOS.map((logo, index) => (
               <div className='slide flex w-[125px] items-center justify-center' key={index}>
                  {logo}
               </div>
            ))}
            {LOGOS.map((logo, index) => (
               <div className='slide flex w-[125px] items-center justify-center' key={index}>
                  {logo}
               </div>
            ))}
         </div>
      </div>
   )
}

export default InfiniteSlider
