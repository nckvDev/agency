import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/accordion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, ChevronsRight } from 'lucide-react'

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
            'หากแผนการตลาดปัจจุบันของคุณ ไม่สามารถให้ผลลัพธ์ที่พึงพอใจได้ นั่นอาจถึงเวลาที่คุณควรใช้บริษัทการตลาดอย่าง MAZMAKER เพื่อช่วยให้คุณได้ผลลัพธ์ที่เหนือกว่าเดิม เพราะเรามีทีมงานคุณภาพที่เชี่ยวชาญเฉพาะด้าน ให้ความช่วยเหลือคุณ',
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
                                 objectFit='cover'
                                 className='rounded'
                              />
                           </div>
                        </CardHeader>
                        <CardContent className='grow'>
                           <CardTitle>{blog.title}</CardTitle>
                           <CardDescription className='mt-2'>{blog.date}</CardDescription>
                        </CardContent>
                        <CardFooter>
                           <Button>
                              อ่านเพิ่มเติม <ArrowUpRight className='w-4 h-4 ml-1.5' />
                           </Button>
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
