import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


function Skills({domRef, themeColor, theme}) {
    const [selectedImage, setSelectedImage] = useState(0);


    
    const skill = [
        {
            "name" : "HTML5",
            "explanation" : "HTML에 대한 깊은 이해를 바탕으로 웹페이지의 구조를 효과적으로 설계하며, 시맨틱 마크업을 통해 사용자 친화적이고 접근성이 높은 사이트를 만들 수 있습니다."
        }, 
        {
            "name" : "CSS3",
            "explanation" : "반응형 디자인을 구현할 수 있으며, 애니메이션과 트랜지션 등 다양한 효과를 통해 사용자 경험을 향상시키는 UI를 제작하는 데 능숙합니다."
        }, 
        {
            "name" : "JavaScript",
            "explanation" : "JavaScript를 이용해 동적인 웹페이지를 구현하는 데 능숙하며, 비동기 처리, 이벤트 핸들링 등을 통해 사용자와 상호작용하는 기능을 개발할 수 있습니다."
        }, 
        {
            "name" : "React",
            "explanation" : "React에 대한 깊은 이해와 경험을 바탕으로, 컴포넌트 기반의 UI 개발과 상태 관리를 능숙하게 수행할 수 있습니다. 또한, 최신 React 기능인 Hooks를 활용한 개발에도 익숙합니다."
        }, 
        {
            "name" : "TailwindCSS",
            "explanation" : "Tailwind CSS를 이용한 반응형 웹 디자인과 유틸리티 기반의 스타일링에 능숙합니다."
        }, 
        {
            "name" : "Styled-Component",
            "explanation" : "React 애플리케이션에서 컴포넌트 단위로 스타일을 정의하고 적용하는 라이브러리입니다."
        },
        {
            "name" : "SCSS",
            "explanation" : "컴포넌트 기반의 스타일링을 구현하는 데 능숙합니다. 동적으로 변화하는 스타일을 적용하거나, 테마를 통해 일관된 디자인 시스템을 관리할 수 있습니다."
        }, 
        {
            "name" : "Figma",
            "explanation" : "사용자 경험을 최우선으로 생각하며, 사용자 중심의 UI/UX 디자인을 구현할 수 있습니다."
        }, 
        {
            "name" : "Github",
            "explanation" : "깃허브를 통한 버전 관리 및 협업에 능숙하며, 이를 통해 효율적인 코드 리뷰와 팀원 간의 원활한 소통을 진행할 수 있습니다."
        }, 
        {
            "name" : "Node.js",
            "explanation" : "Node.js에 대해 기본적인 이해를 가지고 있으며, 간단한 서버 구축과 API 작성에 대한 경험이 있습니다."
        }, 
        {
            "name" : "MongoDB",
            "explanation" : "MongoDB에 대한 기본적인 이해를 가지고 있습니다. 간단한 데이터베이스 생성과 데이터 조작에 대한 경험이 있습니다."
        }, 
        {
            "name" : "Firebase",
            "explanation" : "Firebase에 대한 기본적인 이해를 가지고 있습니다. 간단한 데이터베이스 관리와 인증 기능에 대한 경험이 있습니다."
        }, 
        {
            "name" : "TypeScript",
            "explanation" : "기본적인 타입 정의와 인터페이스, 제네릭 등의 사용에 익숙하며, 타입스크립트를 활용한 간단한 코딩 경험도 있습니다. "
        }, 
        {
            "name" : "Next.js",
            "explanation" : "Next.js에 대해 어느 정도 이해하고 있습니다. 서버 사이드 렌더링(SSR)과 정적 사이트 생성(Static Site Generation, SSG) 등의 기능에 대한 기본적인 이해가 있으며, 간단한 게시판 제작에 활용해본 경험이 있습니다."
        }
    ]
    
  return (
    <>
        <div ref={domRef} className={`w-full md:pt-48 pt-32 lg:pb-32 pb-28 font-bold ${themeColor[theme].bg}`}>
            <p className='text-center md:text-6xl text-4xl pb-5'>Skills</p>
            <p className="text-center md:text-xl text-base">사용 가능한 기술 스택입니다.</p>
            <div className="flex max-w-7xl mx-auto lg:pt-[140px] md:pt-[130px] pt-20 justify-between px-[2%]">
                <p className='lg:text-[130px] md:text-[100px] text-[15vw]'>Oh</p>
                <div className="flex md:w-[75%] w-[70vw] justify-around">
                    <Swiper className='swiper-skill'
                        onSlideChange={(swiper) => {
                            setSelectedImage(swiper.realIndex);
                        }}
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
                            delay : 3000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                    >
                        {
                            skill.map((e, i) => {
                                return (
                                    <SwiperSlide key={i} onMouseOver={()=>{document.querySelector(".swiper-skill").swiper.autoplay.stop()}} onMouseOut={()=>{document.querySelector(".swiper-skill").swiper.autoplay.start()}} >
                                        <img src={`./../../images/skill${i + 1}.png`} alt={e.name} className='max-w-full mx-auto lg:h-[35%] md:h-[70px] h-[45%] lg:mt-5 cursor-pointer' />
                                        <p className='md:w-[90%] w-[70%] lg:h-5 md:h-3 h-[8px] bg-black lg:mt-5 md:mt-3 mt-[10%] mx-auto'></p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            
                <p className='lg:text-[130px] md:text-[100px] text-[15vw]'>!</p>
            </div>
            <div className="">
                {selectedImage !== null && (
                    <div className='px-[2%] mt-[2%] text-center md:text-xl text-base z-30'>
                        {skill[selectedImage].name} : {skill[selectedImage].explanation}
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default Skills