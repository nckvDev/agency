import Navbar from '@/components/Layout/Navbar'
import './globals.css'
import { Inter, Prompt } from 'next/font/google'
import Footer from '@/components/Layout/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })
const prompt = Prompt({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600'],
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
      </html>
   )
}
