import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import WOW from 'wowjs'


function Skills({domRef}) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (i) => {
        if (selectedImage === i) {
        setSelectedImage(null);
        } else {
        setSelectedImage(i);
        }
    }
    const skill = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind", "Github", "Figma", "Nodejs", "SCSS", "Styled-component", "MongoDB", "Firebase", "Notion", "Slack"]
  return (
    <>
        <div ref={domRef} className="w-full md:pt-48 pt-32 lg:pb-32 pb-28 bg-orange-50">
            <p className='text-center md:text-6xl text-4xl font-bold'>My Skills</p>
            <div className="flex max-w-7xl mx-auto lg:pt-[150px] md:pt-[130px] pt-20 justify-between px-[2%]">
                <p className='lg:text-[130px] md:text-[100px] text-[15vw] font-extrabold'>Oh</p>
                <div className="flex md:w-[75%] w-[70vw] justify-around">
                    <Swiper className=''
                        modules={[Autoplay, Navigation, Pagination]}
                        breakpoints={{
                            1024:{
                                slidesPerView:7
                            },
                            768:{
                                slidesPerView:6
                            },
                            1:{
                                slidesPerView:4
                            }
                        }}
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
                            skill.map((e, i) => {
                                return (
                                    <SwiperSlide key={i} className="relative ">
                                        <img src={`./../../images/skill${i + 1}.png`} alt="" className='md:w-[90%] w-[70%] mx-auto lg:h-[35%] md:h-[70px] h-[45%] lg:mt-5 cursor-pointer' onClick={() => handleImageClick(i)} />
                                        {selectedImage === i && (
                                            <div className='absolute whitespace-nowrap md:bottom-[15%] bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white'>
                                            {e}
                                            </div>
                                        )}
                                        <p className='md:w-[90%] w-[70%] lg:h-5 md:h-3 h-[8px] bg-black lg:mt-5 md:mt-3 mt-[10%] mx-auto'></p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <p className='lg:text-[130px] md:text-[100px] text-[15vw] font-extrabold'>!</p>
            </div>
        </div>
    </>
  )
}

export default Skills