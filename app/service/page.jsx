import InfiniteSlider from '@/components/Animation/InfiniteSlider'
import { Present } from '@/components/Content'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Check, MessageCircle, MessagesSquare, PenSquare, PhoneCall, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const metadata = {
   title: 'IDEVFLOW : DIGITAL BUSINESS SOLUTION',
   description: 'การตลาดออนไลน์ทางเลือกใหม่ ตอบโจทย์ทุกธุรกิจ',
}

const Service = () => {
   const socialLinks = [
      {
         link: 'https://www.facebook.com/idevflow',
         img: '/images/icons/facebook.png',
      },
      {
         link: 'https://line.me/R/ti/p/@823snnnf',
         img: '/images/icons/line.png',
      },
      {
         link: 'https://www.tiktok.com/@idev66',
         img: '/images/icons/tik-tok.png',
      },
      {
         link: 'https://www.youtube.com/@idevflow',
         img: '/images/icons/youtube.png',
      },
   ]

   const steps = [
      {
         title: 'ขั้นตอนที่ 01',
         desc: 'กรอกข้อมูลของคุณ หรือหากเร่งด่วนสามารถโทรได้เลยที่',
      },
      {
         title: 'ขั้นตอนที่ 02',
         desc: 'นักการตลาดโทรไปสรุปโจทย์ความต้องการ และปัญหาทางการตลาด',
      },
      {
         title: 'ขั้นตอนที่ 03',
         desc: 'นักการตลาดให้คำปรึกษาเบื้องต้น โดยไม่มีค่าใช้จ่าย',
      },
      {
         title: 'ขั้นตอนที่ 04',
         desc: 'ในกรณีใช้บริการต่อ เราจะส่งสรุปรายละเอียดงาน พร้อมเสนอราคา ในลำดับถัดไป',
      },
   ]

   const lists = [
      {
         title: 'Graphic Design',
         details: [
            {
               content: 'Logo',
               status: false,
            },
            {
               content: 'Artwork banner',
               status: true,
            },
            {
               content: 'Label packaging',
               status: false,
            },
            {
               content: 'Presentation',
               status: false,
            },
            {
               content: 'Report',
               status: false,
            },
            {
               content: 'Photoshop',
               status: false,
            },
         ],
      },
      {
         title: 'Content',
         details: [
            {
               content: 'Content Website',
               status: false,
            },
            {
               content: 'Quotes',
               status: false,
            },
            {
               content: 'Caption Ads',
               status: false,
            },
            {
               content: 'Lazada and Shopee',
               status: false,
            },
         ],
      },
      {
         title: 'Online Ads',
         details: [
            {
               content: 'Content',
               status: false,
            },
            {
               content: 'Digital marketing',
               status: true,
            },
            {
               content: 'Content Form',
               status: false,
            },
         ],
      },
      {
         title: 'Run Ads',
         details: [
            {
               content: 'Google',
               status: true,
            },
            {
               content: 'Youtube',
               status: false,
            },
            {
               content: 'Facebook',
               status: true,
            },
            {
               content: 'Instagram',
               status: false,
            },
            {
               content: 'Line',
               status: false,
            },
            {
               content: 'Tiktok',
               status: false,
            },
         ],
      },
      {
         title: 'Online Ads',
         details: [
            {
               content: 'Content',
               status: false,
            },
            {
               content: 'Digital marketing',
               status: true,
            },
            {
               content: 'Content Form',
               status: false,
            },
         ],
      },
      {
         title: 'Run Ads',
         details: [
            {
               content: 'Google',
               status: true,
            },
            {
               content: 'Youtube',
               status: false,
            },
            {
               content: 'Facebook',
               status: true,
            },
            {
               content: 'Instagram',
               status: false,
            },
            {
               content: 'Line',
               status: false,
            },
            {
               content: 'Tiktok',
               status: false,
            },
         ],
      },
   ]

   const TypographyList = ({ detail, status }) => {
      const styleList = status ? (
         <span className='relative flex'>
            <Star
               strokeWidth={3}
               color='#075985'
               className='absolute inline-flex w-full h-full opacity-75 animate-ping'
            />
            <Star strokeWidth={3} color='#075985' className='relative inline-flex' />
         </span>
      ) : (
         <Check strokeWidth={3} color='#075985' />
      )
      return (
         <ul className='my-4 [&>li]:mt-2'>
            <li className='flex items-center gap-3'>
               {styleList} {detail}
            </li>
         </ul>
      )
   }

   return (
      <div className='pt-24 md:py-14'>
         <Present>
            <div className='flex flex-col items-center justify-center mb-6 md:justify-start md:items-start md:mb-0'>
               <h1 className='mb-6 text-2xl text-center whitespace-normal border-b text-sky-800 md:text-start md:text-3xl lg:text-4xl md:font-semibold md:leading-normal w-max'>
                  การตลาดออนไลน์ บริการครบวงจร
               </h1>
               <p className='mb-4 text-lg md:text-xl lg:text-2xl'>
                  IDEVFLOW : DIGITAL BUSINESS SOLUTION <br /> การตลาดออนไลน์ทางเลือกใหม่
                  ตอบโจทย์ทุกธุรกิจ
               </p>
               <div>
                  <Button className='h-12 text-lg font-normal'>
                     <PhoneCall className='w-6 h-6 mr-4' /> ติดต่อ 086-533-2555
                  </Button>
                  <div className='flex items-center justify-center gap-4 mt-6 md:items-start md:justify-start'>
                     {socialLinks.map((social, index) => (
                        <a key={index} href={social.link} target='_blank'>
                           <Image src={social.img} alt='logo image' width={36} height={36} />
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </Present>
         <Present rtl image={'/images/mock/iphone-mockup.png'}>
            <div className='flex flex-col items-center justify-center mb-6 md:justify-start md:items-start md:mb-0'>
               <h1 className='mb-6 text-2xl text-center text-sky-800 md:text-start md:text-3xl lg:text-4xl md:font-semibold md:leading-normal'>
                  ลงทะเบียนปรึกษาการตลาดออนไลน์ฟรี
               </h1>
               <Button className='h-12 text-lg font-normal'>
                  <PenSquare className='w-6 h-6 mr-4' /> เริ่มต้นให้ข้อมูล
               </Button>
               <div className='mt-4'>
                  <p className='mb-4 text-base md:text-lg lg:text-xl'>
                     ยิ่งให้ข้อมูลละเอียดมาก เรายิ่งดูแลคุณได้ตรงจุด แก้ปัญหาได้ตรงใจ
                  </p>
                  <p className='mb-4 font-light'>
                     **นักการตลาดจะติดต่อกลับคุณภายใน 12 ชั่วโมงขั้นตอนการให้บริการ
                  </p>
               </div>
               <div>
                  {steps.map((step) => (
                     <p key={step.title} className='font-normal'>
                        <span className='font-semibold'>{step.title}</span> : {step.desc}
                     </p>
                  ))}
               </div>
            </div>
         </Present>
         <div className='flex flex-col items-center justify-center gap-6 mt-20'>
            <h1 className='text-2xl font-bold md:text-4xl text-sky-800'>ติดต่อเรา</h1>
            <div className='flex items-center justify-center gap-4'>
               <Button className='h-12 text-lg font-normal'>
                  <MessageCircle className='w-6 h-6 mr-4' /> คุยกับ IDEVFLOW ทาง LINE
               </Button>
               <Button className='h-12 text-lg font-normal'>
                  <MessagesSquare className='w-6 h-6 mr-4' /> คุยกับ IDEVFLOW ทาง Facebook
               </Button>
            </div>
         </div>
         <div className='flex flex-col items-center justify-center gap-6 mt-20'>
            <h1 className='text-2xl font-bold md:text-4xl text-sky-800'>Our Partners</h1>
            <InfiniteSlider />
         </div>
         <div className='px-4 mt-20 md:px-6 lg:px-8'>
            <h1 className='mb-6 text-2xl antialiased font-bold text-center md:text-4xl text-sky-800 '>
               บริการของเรา
            </h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
               {lists.map((list, index) => (
                  <Card
                     key={index}
                     className='transition border-sky-900 hover:shadow-lg hover:scale-105 hover:ring-2'
                  >
                     <CardHeader className='pb-4'>
                        <CardTitle className='text-xl'>{list.title}</CardTitle>
                     </CardHeader>
                     <CardContent>
                        {list.details.map((detail, index) => (
                           <TypographyList
                              key={index}
                              detail={detail.content}
                              status={detail.status}
                           />
                        ))}
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Service
