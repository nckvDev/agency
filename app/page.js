import { Banner, Option, Present, NewsArticle } from '@/components/Content'

export default function Home() {
   return (
      <main className='w-screen h-full'>
         <section>
            <Banner />
         </section>
         <section>
            <Option />
         </section>
         <section>
            <Present>
               <div className='flex flex-col'>
                  <h1 className='mb-6 text-2xl text-center md:text-start md:text-3xl md:font-semibold md:leading-normal'>
                     <span className='text-sky-800'>IDEVFLOW</span> เราคือ Marketing Agency <br />{' '}
                     ที่บริการครบวงจร ตอบโจทย์ทุกธุรกิจ
                  </h1>
                  <div>
                     <p className='mb-4 text-sm md:text-base'>
                        ด้วยประสบการณ์ด้านการตลาดกว่า 500 ธุรกิจ
                        ทำให้เราได้เล็งเห็นถึงปัจจัยและองค์ประกอบสำคัญ <br /> ทางด้านการตลาด
                        ตลอดจนความต้องการของลูกค้า
                     </p>
                     <p className='mb-4 text-sm md:text-base'>
                        องค์ความรู้ที่เราได้พัฒนามาอย่างต่อเนื่อง รวมถึงประสบการณ์
                        ตลอดจนบุคลากรมืออาชีพ <br />
                        เกิดเป็นจุดแข็งที่ทำให้เราสามารถที่จะนำเสนอแนวทางที่ดีที่สุดและช่วยผลักดันให้ธุรกิจมุ่งเป้า{' '}
                        <br />
                        ไปสู่ความสำเร็จได้อย่างยั่งยืน
                     </p>
                  </div>
               </div>
            </Present>
         </section>
         <section>
            <NewsArticle />
         </section>
      </main>
   )
}
