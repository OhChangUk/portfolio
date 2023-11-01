import React from 'react'

function AboutMe({domRef}) {
  return (
    <>
        <div ref={domRef} className="w-full md:pt-48 pt-32 lg:pb-32 pb-28 ">
            <p className='text-center md:text-6xl text-4xl font-bold'>About</p>
            <div className="lg:flex md:flex max-w-7xl mx-auto lg:pt-[150px] md:pt-[130px] pt-20 justify-between px-[2%]">
                <img src="./../../images/me.jpg" alt="1" className='lg:w-[350px] md:w-[300px] w-full  lg:mr-[100px] md:mr-[50px]'/>
                <div className="md:basis-3/5 w-full mx-auto flex  flex-col justify-around lg:py-0 py-10">
                    <p className='lg:text-4xl text-2xl font-bold '>별처럼 밝게 빛나는 오창욱입니다.</p>
                    <div className="mt-3">
                      <p className='lg:text-xl'>
                        안녕하세요! 밝고 배려심이 깊은 Front-end 개발자입니다.
                      </p>
                      <p className='lg:text-xl'>
                        직업훈련기관에서 프론트엔드 개발자로써 필요한 HTML, CSS, JavaScript, React 등의 기술을 배웠고, 팀 프로젝트를 통해 Tailwind를 사용하여 반응형 웹을 만드는 등의 경험을 쌓을 수 있었습니다.
                      </p>
                      <p className='lg:text-xl'>
                        새로운 기술을 배우고 적용하는 것을 즐기며, 항상 사용자의 입장에서 생각하여 더 나은 사용자 경험을 제공하기 위해 노력하고 있습니다. 지속적인 학습을 통해 더욱 발전해 나가는 프론트엔드 개발자로 성장해 나아갈 것 입니다.
                      </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe