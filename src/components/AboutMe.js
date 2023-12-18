import { faCake, faCar, faCopy, faEnvelope, faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



function AboutMe({domRef, themeColor, theme}) {
  const copyEmail = async (email) => {
    await navigator.clipboard.writeText(email);
    alert("이메일 복사에 성공했습니다");
  };
  return (
    <>
      <div ref={domRef} className="w-full md:pt-48 pt-32 lg:pb-32 pb-28 px-[2%]">
        <p className='text-center md:text-6xl text-4xl font-bold pb-5'>About</p>
        <p className="text-center md:text-xl text-base font-bold">저를 소개하겠습니다.</p>
        <div className="lg:flex md:flex max-w-7xl mx-auto lg:pt-[150px] md:pt-[130px] pt-20 justify-between ">
          <img src="./../../images/me.jpg" alt="1" className='lg:w-[350px] md:w-[300px] w-full  lg:mr-[100px] md:mr-[50px]'/>
          <div className="md:basis-3/5 w-full mx-auto flex  flex-col justify-around lg:py-0 md:py-10 pt-10">
            <p className='text-2xl font-bold '>별처럼 밝게 빛나는 오창욱입니다.</p>
            <div className="mt-3">
              <p className='lg:!leading-8'>
                안녕하세요! 밝고 배려심이 깊은 Front-end 개발자입니다.
              </p>
              <p className='lg:!leading-8'>
                새로운 기술을 배우고 적용하는 것을 즐기며, 항상 사용자의 입장에서 생각하여 더 나은 사용자 경험을 제공하기 위해 노력하고 있습니다. 지속적인 학습을 통해 더욱 발전해 나가는 프론트엔드 개발자로 성장해 나아갈 것 입니다.
              </p>
              <div className={`${themeColor[theme].about} border-[3px] rounded-lg py-7 mt-3 justify-around basis-full hidden lg:flex `}>
                <ul className='gap-y-4 flex flex-col basis-[43%]'>
                  <li className='flex gap-x-2'>
                    <FontAwesomeIcon icon={faCake} className='lg:text-xl text-center' />
                    <p className=''>1999.07.27</p>
                  </li>
                  <li className='flex gap-x-2'>
                    <FontAwesomeIcon icon={faHome} className='lg:text-xl' />
                    <p className=''>경상북도 구미시</p>
                  </li>
                  <li className='flex gap-x-2 items-center'>
                    <FontAwesomeIcon icon={faEnvelope} className='lg:text-xl' />
                    <p className=''>o2556@naver.com</p>
                    <FontAwesomeIcon icon={faCopy} onClick={()=>{copyEmail("o2556@naver.com")}} className='cursor-pointer' />
                  </li>
                  <li className='flex gap-x-2'>
                    <FontAwesomeIcon icon={faCar} className='lg:text-xl' />
                    <p className=''>운전면허 1종 보통</p>
                  </li>
                </ul>
                <ul className='flex flex-col basis-[43%] leading-9'>
                  <li className='flex gap-x-2'>
                    <FontAwesomeIcon icon={faGraduationCap} className='lg:text-xl' />
                    <p className=''>
                      2023.06 ~ 2023.11
                      <br />그린컴퓨터아트학원 900H
                      <br />React를 활용한 프론트엔드 개발자 양성
                      <br />(SPA 프로젝트 개발)
                      <br />2018.03 ~ 2022.02
                      <br />대구보건대학교(호텔외식조리)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`${themeColor[theme].about} border-[3px] rounded-lg  py-10 mt-5 justify-around basis-full flex flex-wrap lg:hidden gap-y-4`}>
          <ul className='gap-y-4 flex flex-col md:basis-[43%] basis-[95%]'>
            <li className='flex gap-x-2'>
              <FontAwesomeIcon icon={faCake} className='lg:text-xl text-center' />
              <p className=''>1999.07.27</p>
            </li>
            <li className='flex gap-x-2'>
              <FontAwesomeIcon icon={faHome} className='lg:text-xl' />
              <p className=''>경상북도 구미시</p>
            </li>
            <li className='flex gap-x-2 items-center'>
              <FontAwesomeIcon icon={faEnvelope} className='lg:text-xl' />
              <p className=''>o2556@naver.com</p>
              <FontAwesomeIcon icon={faCopy} onClick={()=>{copyEmail("o2556@naver.com")}} className='cursor-pointer' />
            </li>
            <li className='flex gap-x-2'>
              <FontAwesomeIcon icon={faCar} className='lg:text-xl' />
              <p className=''>운전면허 1종 보통</p>
            </li>
          </ul>
          <ul className='flex flex-col md:basis-[43%] basis-[95%] leading-9'>
            <li className='flex gap-x-2'>
              <FontAwesomeIcon icon={faGraduationCap} className='lg:text-xl' />
              <p className=''>
                2023.06 ~ 2023.11
                <br />그린컴퓨터아트학원 900H
                <br />React를 활용한 프론트엔드 개발자 양성
                <br />(SPA 프로젝트 개발)
                <br />2018.03 ~ 2022.02
                <br />대구보건대학교(호텔외식조리)
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AboutMe