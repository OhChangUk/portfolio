import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import WOW from 'wowjs'


function Skills() {
  return (
    <>
        <div className="w-full pb-48">
            <p className='text-center text-5xl'>My Skills</p>
            <div className="flex w-11/12 mx-auto pt-[150px] justify-between">
                <p className='text-[150px]'>Oh</p>
                <div className="flex justify-around">
                    <Swiper className='lg:w-[1300px] md:w-[800px]'
                        modules={[Autoplay, Navigation, Pagination]}
                        slidesPerView={7}
                        autoplay={{
                            delay : 1000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                      
                        onSlideChange={
                            ()=>{
                                new WOW.WOW({
                                    live: false
                            }).init()
                            }
                        }
                    >
                        {
                            Array(14).fill().map((_, i) => {
                                return (
                                    <SwiperSlide key={i} className="overflow-hidden">
                                        <img src={`./../../images/skill${i + 1}.png`} alt="" className='w-[130px] mx-auto h-[100px]' />
                                        <p className='w-[130px] h-[30px] bg-black mt-5  mb-14 mx-auto'></p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <p className='text-[150px]'>!</p>
            </div>
        </div>
    </>
  )
}

export default Skills