import Link from 'next/link'
import Image from 'next/image'
import { blogLists } from './data'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const Blog = () => {
   return (
      <div className='px-4 pt-24 mt-20 md:py-14 md:px-6 lg:px-8'>
         <div className='grid gap-4 py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {blogLists.map((blog) => (
               <Card key={blog.id} className='flex flex-col'>
                  <CardHeader>
                     <div className='relative w-full aspect-video'>
                        <Image
                           src={blog.img}
                           alt={blog.title}
                           fill
                           sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                           className='object-cover rounded'
                        />
                     </div>
                  </CardHeader>
                  <CardContent className='grow'>
                     <Link href={`blog/${blog.id}`}>
                        <CardTitle className='tracking-normal'>{blog.title}</CardTitle>
                     </Link>
                     {/* <CardDescription className='mt-2'>{blog.date}</CardDescription> */}
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
   )
}

export default Blog
