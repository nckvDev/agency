import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import {
   Accordion,
   AccordionItem,
   AccordionTrigger,
   AccordionContent,
} from '@/components/ui/accordion'
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
   CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { blogLists } from '@/app/blog/data'

const NewsArticle = () => {
   const articleList = [
      {
         title: 'Marketing Agency คืออะไร?',
         description: [
            'Marketing Agency คือ เอเจนซี่ที่ให้บริการด้านการตลาดแบบครบวงจรตั้งแต่วางแผนธุรกิจ, ทำการตลาดผ่านช่องทางออนไลน์, ออกแบบเว็บไซต์ ไปจนถึงบริการด้าน SEO ซึ่งบริการเหล่านี้ช่วยยกระดับธุรกิจของคุณสู่ความสำเร็จอย่างยั่งยืน',
         ],
      },
      {
         title: 'ควรเลือกบริษัทการตลาดอย่างไร?',
         description: [
            'หากแผนการตลาดปัจจุบันของคุณ ไม่สามารถให้ผลลัพธ์ที่พึงพอใจได้ นั่นอาจถึงเวลาที่คุณควรใช้บริษัทการตลาดอย่าง iDev Agency เพื่อช่วยให้คุณได้ผลลัพธ์ที่เหนือกว่าเดิม เพราะเรามีทีมงานคุณภาพที่เชี่ยวชาญเฉพาะด้าน ให้ความช่วยเหลือคุณ',
         ],
      },
      {
         title: 'ทำไมจึงควรเลือกเอเจนซี่รับทำการตลาดออนไลน์ที่เป็นมืออาชีพ?',
         description: [
            'หากคุณได้ร่วมงานกับเอเจนซี่รับทำการตลาดออนไลน์ที่มีประสบการณ์และมีคุณภาพ เชี่ยวชาญเฉพาะทาง จะช่วยให้ประหยัดเวลาและงบประมาณ อีกทั้งได้ผลลัพธ์เร็วยิ่งขึ้น',
         ],
      },
      {
         title: 'Digital Marketing Agency ให้บริการอะไรบ้าง?',
         description: [
            'Muti Planning',
            'Digital Marketing',
            'Digital & Data Experience',
            'Creativeท & Content',
         ],
      },
   ]

   return (
      <div className='mx-auto max-w-7xl pt-14'>
         <div className='px-4 md:px-6 lg:px-8'>
            <div className='mb-10'>
               <h2 className='py-4 mb-6 text-xl font-bold border-b border-b-slate-500'>
                  คำถามที่พบบ่อย
               </h2>
               {articleList.map((list, index) => (
                  <Accordion key={index} type='single' collapsible className='w-full'>
                     <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className='py-6 text-lg font-semibold'>
                           {list.title}
                        </AccordionTrigger>
                        <AccordionContent className='text-base list-decimal'>
                           {list.description.length === 1
                              ? list.description[0]
                              : list.description.map((desc, index) => <li key={index}>{desc}</li>)}
                        </AccordionContent>
                     </AccordionItem>
                  </Accordion>
               ))}
            </div>
            <div>
               <h2 className='py-4 mb-6 text-xl font-bold border-b border-b-slate-500'>ข่าวสาร</h2>
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
                           <Link href={`blog/${blog.id}`}>
                              <CardTitle>{blog.title}</CardTitle>
                           </Link>
                           <CardDescription className='mt-2'>{blog.date}</CardDescription>
                        </CardContent>
                        <CardFooter>
                           <Link href={`blog/${blog.id}`}>
                              <Button>
                                 อ่านเพิ่มเติม <ArrowUpRight className='w-4 h-4 ml-1.5' />
                              </Button>
                           </Link>
                        </CardFooter>
                     </Card>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default NewsArticle
