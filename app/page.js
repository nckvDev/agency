import { Banner, Option, Present } from '@/components/Content'
import NewsArticle from '@/components/Content/NewsArticle'
import Footer from '@/components/Layout/Footer'
import Navbar from '@/components/Layout/Navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
   return (
      <main className='w-screen h-full'>
         <section>
            <Banner />
         </section>
         <section className='w-full'>
            <Option />
         </section>
         <section className='w-full'>
            <Present />
         </section>
         <section className='w-full'>
            <NewsArticle />
         </section>
      </main>
   )
}
