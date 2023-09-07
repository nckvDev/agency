import { Inter, Prompt } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

import Navbar from '@/components/Layout/navbar'
import Footer from '@/components/Layout/Footer'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const prompt = Prompt({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600'],
   variable: '--font-prompt',
})

export const metadata = {
   title: 'idev agency',
   description: 'the master idev agency',
}

export default function RootLayout({ children }) {
   return (
      <html lang='en' className='scroll-smooth'>
         <body className={`${inter.className} ${prompt.className}`}>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
         </body>
         {/* <Script strategy="beforeInteractive"  /> */}
      </html>
   )
}
