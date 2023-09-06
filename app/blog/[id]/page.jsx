import React from 'react'
import { blogLists } from '../data'
import Image from 'next/image'

export async function generateMetadata({ params }) {
   const detail = blogLists.filter((blog) => blog.id === params.id)
   return {
      title: detail[0].title,
      description: detail[0].detail,
   }
}

export default function BlogDetail({ params }) {
   const detail = blogLists.filter((blog) => blog.id === params.id)
   return (
      <div className='max-w-screen-sm px-4 pt-24 mx-auto mt-20 md:py-14 md:px-6 lg:px-8'>
         <h1 className='mb-6 text-2xl font-semibold'>{detail[0].title}</h1>
         <div className='relative w-full aspect-video max-h-80'>
            <Image
               src={detail[0].img}
               alt={detail[0].title}
               fill
               sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
               className='object-cover rounded'
            />
         </div>
         <p className='my-2 text-sm text-muted-foreground'>{detail[0].date}</p>
         <p>{detail[0].detail}</p>
      </div>
   )
}
