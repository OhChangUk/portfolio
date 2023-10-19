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
        <div className="w-full py-48">
            <p className='text-center text-5xl'>My Skills</p>
            <div className="flex w-[1600px] mx-auto pt-[150px] basis-full justify-between">
                <p className='text-[150px] basis-[15%]'>Oh</p>
                <div className="flex justify-around basis-[82%]">
                    <Swiper className='w-[1300px]'
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
                                    <SwiperSlide key={i} className="overflow-hidden flex">
                                        <img src={`./../../images/skill${i + 1}.png`} alt="" className='w-[130px] h-[100px]' />
                                        <p className='w-[130px] h-[30px] bg-black mt-5 mb-14'></p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <p className='basis-[3%] text-[150px]'>!</p>
            </div>
        </div>
    </>
  )
}

export default Skills