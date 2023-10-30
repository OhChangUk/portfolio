import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


function Skills({domRef}) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (i) => {
        if (selectedImage === i) {
        setSelectedImage(null);
        } else {
        setSelectedImage(i);
        }
    }
    const skill = [
        {
            "name" : "HTML5",
            "explanation" : "웹 페이지의 구조와 내용을 정의하는 마크업 언어입니다."
        }, 
        {
            "name" : "CSS3",
            "explanation" : "웹 페이지의 디자인, 레이아웃, 스타일을 정의하는 언어입니다."
        }, 
        {
            "name" : "JavaScript",
            "explanation" : "웹 페이지를 동적으로 제어하고 상호 작용을 가능하게 하는 프로그래밍 언어입니다."
        }, 
        {
            "name" : "React",
            "explanation" : "사용자 인터페이스를 만들기 위한 JavaScript 라이브러리입니다."
        }, 
        {
            "name" : "Tailwind",
            "explanation" : "클래스 기반의 스타일링 프레임워크입니다."
        }, 
        {
            "name" : "Github",
            "explanation" : " 소프트웨어 개발자들이 버전 관리와 협업을 할 수 있는 플랫폼입니다."
        }, 
        {
            "name" : "Figma",
            "explanation" : "웹 기반의 협업 디자인 툴입니다."
        }, 
        {
            "name" : "Node.js",
            "explanation" : "비동기적인 이벤트 처리를 갖추어 빠르고 확장 가능한 네트워크 애플리케이션을 만들 수 있게 해줍니다."
        }, 
        {
            "name" : "SCSS",
            "explanation" : "스타일을 보다 효율적으로 작성할 수 있는 CSS 전처리기 언어입니다."
        }, 
        {
            "name" : "Styled-Component",
            "explanation" : "React 애플리케이션에서 컴포넌트 단위로 스타일을 정의하고 적용하는 라이브러리입니다."
        },
        {
            "name" : "MongoDB",
            "explanation" : "NoSQL 데이터베이스로, 데이터 저장 및 관리를 제공하는 데이터베이스 시스템입니다."
        }, 
        {
            "name" : "Firebase",
            "explanation" : "실시간 데이터베이스, 인증, 호스팅 등 다양한 기능을 제공해주는 서비스입니다."
        }, 
        {
            "name" : "Notion",
            "explanation" : "문서, 테이블, 프로젝트 등을 효과적으로 관리하고 공유할 수 있는 툴입니다."
        }, 
        {
            "name" : "Next.js",
            "explanation" : "React 기반의 SSR(서버사이드 렌더링) 및 정적 사이트 생성을 지원하는 웹 프레임워크입니다."
        }
    ]
  return (
    <>
        <div ref={domRef} className="w-full md:pt-48 pt-32 lg:pb-32 pb-28 bg-orange-50">
            <p className='text-center md:text-6xl text-4xl font-bold pb-5'>Skills</p>
            <p className="text-center md:text-xl text-base ">제가 사용할 수 있는 기술 스택입니다.</p>
            <div className="flex max-w-7xl mx-auto lg:pt-[140px] md:pt-[130px] pt-20 justify-between px-[2%]">
                <p className='lg:text-[130px] md:text-[100px] text-[15vw] font-bold'>Oh</p>
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
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                    >
                        {
                            skill.map((e, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <img src={`./../../images/skill${i + 1}.png`} alt="" className='md:w-[90%] w-[70%] mx-auto lg:h-[35%] md:h-[70px] h-[45%] lg:mt-5 cursor-pointer' onClick={() => handleImageClick(i)} />
                                        <p className='md:w-[90%] w-[70%] lg:h-5 md:h-3 h-[8px] bg-black lg:mt-5 md:mt-3 mt-[10%] mx-auto'></p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <p className='lg:text-[130px] md:text-[100px] text-[15vw] font-bold'>!</p>
            </div>
            {selectedImage !== null && (
                <div className='px-[2%] mt-[2%] text-center md:text-xl text-base font-bold z-30'>
                    {skill[selectedImage].name} : {skill[selectedImage].explanation}
                </div>
            )}
        </div>
    </>
  )
}

export default Skills