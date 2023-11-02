import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Project({domRef}) {
    const [number] = useState(4)
    const text = [
        {
            "project" : "MapleStory",
            "type" : "클론 코딩",
            "project_period" : "2023.07.04 ~ 2023.08.02",
            "src" : "https://github.com/OhChangUk/maple",
            "Contribution" : "100%",
            "skill" : "HTML, CSS, Javascript"
        },
        {
            "project" : "SUBWAY",
            "type" : "클론 코딩",
            "project_period" : "2023.07.20 ~ 2023.07.22",
            "src" : "https://github.com/OhChangUk/subway",
            "Contribution" : "100%",
            "skill" : "HTML, CSS, Javascript"
        },
        {
            "project" : "puripuri",
            "type" : "팀 프로젝트",
            "project_period" : "2023.08.21 ~ 2023.10.09",
            "src" : "https://team-puri.vercel.app/",
            "Contribution" : "20%",
            "skill" : "React, tailwind"
        },
        {
            "project" : "Oh-! ChangUk",
            "type" : "포트폴리오",
            "project_period" : "2023.10.19 ~ 2023.11.01",
            "src" : "https://changuk-portfolio.vercel.app/",
            "Contribution" : "100%",
            "skill" : "React, tailwind"
        }
    ]
  return (
    <>
        <div ref={domRef} className="w-full md:pt-48 pt-32 lg:pb-32 pb-28 font-bold">
            <p className='text-center md:text-6xl text-4xl '>Projects</p>
            <div className="flex flex-wrap max-w-7xl mx-auto lg:pt-[150px] md:pt-[130px] pt-20 md:gap-x-[2%] px-[2%]">
                {
                    text.map((e,i)=>{
                        return(
                            <NavLink key={i} to={e.src} target='_blank' className=" lg:h-64 lg:basis-[32%] md:basis-[49%] basis-full md:mb-[2%] mb-[5%] cursor-pointer relative">
                                <div className="lg:h-full basis-full border border-[#ddd]">
                                    <img src={`./../images/project${number - i}.png`} alt={`project${number-i}`} className='lg:h-full w-full ' />
                                    <div className="lg:block hidden absolute inset-0 bg-slate-700 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                            <div className="text-center text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                                <p className="text-2xl">{e.project}</p>
                                                <p className='mb-2'>({e.type})</p>
                                                <p className="leading-7 whitespace-nowrap">{e.project_period}</p>
                                                <p className="">기여도 : {e.Contribution}</p>
                                                <p>기술 스택 : {e.skill}</p>
                                            </div>
                                    </div>
                                    <div className="lg:hidden text-center flex flex-col justify-center bg-orange-50 py-[2%]">
                                        <p className="mb-2 text-2xl">{e.project}</p>
                                        <p className="leading-7">{e.project_period}</p>
                                        <p className="">기여도 : {e.Contribution}</p>
                                        <p>기술 스택 : {e.skill}</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Project