import ContactForm from '@/components/Form/ContactForm'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

const Contact = () => {
   return (
      <div className='max-w-screen-xl px-4 mx-auto mt-20 pt-14 md:px-6 lg:px-8'>
         <div className='flex flex-wrap gap-4 md:flex-nowrap'>
            <div className='w-full space-y-4 md:w-1/2'>
               <div>
                  <h1 className='mb-4 text-xl font-bold uppercase'>บริษัท ไอเดฟโฟลว์ จำกัด</h1>
                  <p>
                     เลขที่ 66 ซอยมิตรภาพ 19 ตาบลในเมือง <br /> อำเภอเมืองนครราชสีมา
                     จังหวัดนครราชสีมา 30000
                  </p>
               </div>
               <div>
                  <h2 className='mb-2 text-lg font-semibold uppercase'>call</h2>
                  <p>086-533-2555</p>
               </div>
               <div>
                  <h2 className='mb-2 text-lg font-semibold uppercase'>Mail</h2>
                  <p>info@idevflow.com</p>
               </div>
            </div>
            <div className='w-full md:w-1/2 max-md:mt-4'>
               <Card>
                  <CardHeader>
                     <h1 className='text-2xl font-semibold md:text-xl'>Contact form</h1>
                  </CardHeader>
                  <CardContent>
                     <ContactForm />
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
   )
}

export default Contact
