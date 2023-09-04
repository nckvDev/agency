import Image from 'next/image'
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
   CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
const Blog = () => {
   const blogLists = [
      {
         title: 'เข้าร่วมงาน Hotels Meet Local Agents Event',
         img: '/images/bg-card.png',
         date: '7 กันยายน 2022',
      },
      {
         title: 'แผนการตลาด 2023 กับการเผชิญหน้ากับเศรษฐกิจ และสถานการณ์ต่าง ๆ ในยุคหลังโควิด',
         img: '/images/bg-card.png',
         date: '31 สิงหาคม 2022',
      },
      {
         title: 'แบรนด์ที่มาแทน STARBUCKS ในรัสเซีย',
         img: '/images/bg-card.png',
         date: '7 กันยายน 2022',
      },
      {
         title: 'การตลาดที่ SME อย่าหาทำ',
         img: '/images/bg-card.png',
         date: '7 กันยายน 2022',
      },
      {
         title: 'แบรนด์ที่มาแทน STARBUCKS ในรัสเซีย',
         img: '/images/bg-card.png',
         date: '7 กันยายน 2022',
      },
      {
         title: 'การตลาดที่ SME อย่าหาทำ',
         img: '/images/bg-card.png',
         date: '7 กันยายน 2022',
      },
      {
         title: 'เข้าร่วมงาน Hotels Meet Local Agents Event',
         img: '/images/bg-card.png',
         date: '7 กันยายน 2022',
      },
      {
         title: 'แผนการตลาด 2023 กับการเผชิญหน้ากับเศรษฐกิจ และสถานการณ์ต่าง ๆ ในยุคหลังโควิด',
         img: '/images/bg-card.png',
         date: '31 สิงหาคม 2022',
      },
      {
         title: 'เข้าร่วมงาน Hotels Meet Local Agents Event',
         img: '/images/bg-card.png',
         date: '7 กันยายน 2022',
      },
      {
         title: 'แผนการตลาด 2023 กับการเผชิญหน้ากับเศรษฐกิจ และสถานการณ์ต่าง ๆ ในยุคหลังโควิด',
         img: '/images/bg-card.png',
         date: '31 สิงหาคม 2022',
      },
   ]
   return (
      <div className='px-4 pt-24 mt-20 md:py-14 md:px-6 lg:px-8'>
         <div className='grid gap-4 py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {blogLists.map((blog, index) => (
               <Card key={index} className='flex flex-col'>
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
                     <CardTitle>{blog.title}</CardTitle>
                     {/* <CardDescription className='mt-2'>{blog.date}</CardDescription> */}
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
   )
}

export default Blog
