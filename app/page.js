import Banner from '@/components/Content/banner'
import Navbar from '@/components/Layout/navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
   return (
      <main className='min-h-screen'>
         <Navbar />
         <section>
            <Banner />
         </section>
      </main>
   )
}
