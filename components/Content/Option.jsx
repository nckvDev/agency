import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import Image from 'next/image'
import { BookOpenCheck, DatabaseZap, Store, Tv } from 'lucide-react'
// import planingIcon from '/images/agency-option-icon1.png'

const Option = () => {
   const lists = [
      {
         title: 'Muti Planning',
         icons: '/images/agency-option-icon1.png',
         details: [
            'Market Research',
            'Media Plan',
            'Business Planning',
            'Marketing Plan',
            'Branding',
         ],
      },
      {
         title: 'Digital Markering',
         icons: '/images/agency-option-icon2.png',
         details: [
            'Digital Marketing & Social Media',
            'Chiness Marketing',
            'SEO',
            'CPAS',
            'Facebook',
            'Google Ads',
            'Instagram',
            'Twitter',
            'Toutube',
         ],
      },
      {
         title: 'Digital & Data Experience',
         icons: '/images/agency-option-icon3.png',
         details: [
            'Mobile Application',
            'Website',
            'Programing & System',
            'Data Visualization',
            'Data Analytics',
            'Data & Marketing Automation',
         ],
      },
      {
         title: 'Creative & content',
         icons: '/images/agency-option-icon4.png',
         details: [
            'Logo & Identiry Stationery Design',
            'Graphic Design',
            'Content',
            'Commercial Ads',
         ],
      },
   ]

   const TypographyList = ({ detail }) => {
      return (
         <ul className='my-4 ml-6 list-disc [&>li]:mt-2'>
            <li>{detail}</li>
         </ul>
      )
   }

   return (
      <div className='relative w-full py-10 md:py-12 lg:py-16 '>
         <div className='mx-auto max-w-7xl'>
            <div className='grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-6 lg:px-8'>
               {lists.map((list) => (
                  <Card
                     key={list.title}
                     className='backdrop-blur-xl bg-white/30 hover:cursor-pointer '
                  >
                     <CardHeader>
                        <CardTitle>{list.title}</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <div className='relative w-full h-56'>
                           <Image src={list.icons} alt='icon' fill objectFit='cover' />
                        </div>

                        {list.details.map((detail, index) => (
                           <TypographyList detail={detail} key={index} />
                        ))}
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Option
