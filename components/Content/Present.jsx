import React from 'react'

const Present = () => {
   return (
      <div className='w-full h-full mt-8 md:mt-14 lg:mt-20'>
         <div className='relative top-0 left-0 w-full h-full'>
            <div className='flex items-center justify-center flex-grow px-4 mx-auto max-w-7xl md:px-6 lg:px-8'>
               <div className='grid items-center w-full gap-4 md:grid-cols-3'>
                  <div className='col-span-1 md:col-span-2'>
                     <div className='flex flex-col'>
                        <h1 className='mb-6 text-2xl text-center md:text-start md:text-3xl md:font-semibold md:leading-normal'>
                           MAZMAKER เราคือ Marketing Agency <br /> ที่บริการครบวงจร
                           ตอบโจทย์ทุกธุรกิจ
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
                  </div>
                  <div className=''>
                     <div className='md:py-4'>
                        {/* <video
                           className='w-full rounded-xl'
                           src='https://mazmaker.com/wp-content/uploads/2023/06/All-Service-v1.mp4'
                           loop=''
                           controls=''
                           preload='metadata'
                           controlslist='nodownload'
                           poster='https://mazmaker.com/wp-content/uploads/2023/06/Screenshot_2.png'
                           data-kmt='1'
                        ></video> */}
                        <video
                           className='w-full rounded-xl'
                           controls
                           src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
                           poster='/images/ban.png'
                           width='620'
                        >
                           Sorry, your browser does not support embedded videos, but do not worry,
                           you can
                           <a href='https://archive.org/details/BigBuckBunny_124'>download it</a>
                           and watch it with your favorite video player!
                        </video>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Present
