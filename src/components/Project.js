import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Project({domRef, themeColor, theme}) {
    const [isActive, setIsActive] = useState(0)
    const [type, setType] = useState("전체")
    const menuArray = ["전체", "포트폴리오", "팀 프로젝트", "개인 프로젝트", "클론 코딩"]
    const text = [
        {
            "project" : "Oh-! ChangUk",
            "type" : "포트폴리오",
            "project_period" : "2023.10.19 ~ 2023.11.07",
            "github" : "https://github.com/OhChangUk/portfolio",
            "site" : "https://changuk-portfolio.vercel.app/",
            "Contribution" : "100%",
            "skill" : "React, TailwindCSS",
            "img" : "project6.png"
        },
        {
            "project" : "택배 조회",
            "type" : "개인 프로젝트",
            "project_period" : "2023.10.24 ~ 2023.10.26",
            "github" : "https://github.com/OhChangUk/parcel",
            "site" : "https://parcel-eight-hazel.vercel.app/",
            "Contribution" : "100%",
            "skill" : "React, Typescript, TailwindCSS",
            "img" : "project5.png"
        },
        {
            "project" : "puripuri",
            "type" : "팀 프로젝트",
            "project_period" : "2023.08.21 ~ 2023.10.09",
            "github" : "https://github.com/dldmswn0719/Team-Puri",
            "site" : "https://team-puri.vercel.app/",
            "Contribution" : "20%",
            "skill" : "React, TailwindCSS",
            "img" : "project4.png"
        },
        {
            "project" : "퀴즈",
            "type" : "개인 프로젝트",
            "project_period" : "2023.08.29",
            "github" : "https://github.com/OhChangUk/quiz",
            "site" : "https://quiz-eight-zeta.vercel.app/",
            "Contribution" : "100%",
            "skill" : "React, TailwindCSS",
            "img" : "project3.png"
        },
        {
            "project" : "SUBWAY",
            "type" : "클론 코딩",
            "project_period" : "2023.07.20 ~ 2023.07.22",
            "github" : "https://github.com/OhChangUk/subway",
            "site" : "https://subway-gray.vercel.app/",
            "Contribution" : "100%",
            "skill" : "HTML, CSS, Javascript",
            "img" : "project2.png"
        },
        {
            "project" : "MapleStory",
            "type" : "클론 코딩",
            "project_period" : "2023.07.04 ~ 2023.07.23",
            "github" : "https://github.com/OhChangUk/maple",
            "site" : "https://maple-theta.vercel.app/",
            "Contribution" : "100%",
            "skill" : "HTML, CSS, Javascript",
            "img" : "project1.png"
        }
    ]
    const FilterData = text && text.filter(e => {
        return type === "전체" || type === e.type
    })
  return (
    <>
        <div ref={domRef} className="w-full md:pt-48 pt-32 lg:pb-32 pb-28 font-bold">
            <p className='text-center md:text-6xl text-4xl pb-5'>Projects</p>
            <p className="text-center md:text-xl text-base">지금까지 진행한 프로젝트입니다.</p>
            <div className="max-w-7xl mx-auto px-[2%] lg:pt-[140px] md:pt-[130px] pt-20">
                <ul className="flex mb-4">
                    {
                        menuArray.map((e,i)=>{
                            return(
                                <li key={i} onClick={()=>{setIsActive(i); setType(menuArray[i])}} className={`${isActive === i ? `${themeColor[theme].buttonBg} text-white` : "bg-white text-black"} cursor-pointer md:mr-4 mr-2 border dark:bg-[#272929] dark:text-[#ebf4f1] md:block hidden py-2 px-5 rounded-md `}>{e}</li>
                            )
                        })
                    }
                    <li>
                        <select onChange={(e) => {setIsActive(e.target.value); setType(menuArray[e.target.value]);}} className='border border-black outline-none rounded-[5px] p-[6px] md:hidden bg-white'>
                            {
                                menuArray.map((e,i)=>{
                                    return(
                                        <option key={i} value={i}>{e}</option>
                                    )
                                })
                            }
                        </select>
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap max-w-7xl mx-auto pt-3 md:gap-x-[2%] px-[2%]">
                {
                    FilterData.map((e,i)=>{
                        return(
                            <div key={i} className=" lg:h-64 lg:basis-[32%] md:basis-[49%] basis-full md:mb-[2%] mb-[5%] relative">
                                <div className="lg:h-full basis-full border border-[#ddd]">
                                    <img src={`./../images/${e.img}`} alt={e.project} className='lg:h-full md:h-48 h-44 w-full ' />
                                    <div className={`${themeColor[theme].bg} lg:block hidden  absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100 border border-[#ddd]`}>
                                            <div className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                                <p className="text-2xl">{e.project}</p>
                                                <p className='mb-2 text-sm'>({e.type})</p>
                                                <p className="leading-7 whitespace-nowrap">{e.project_period}</p>
                                                <p className="">기여도 : {e.Contribution}</p>
                                                <p>기술 스택 : {e.skill}</p>
                                                <div className="flex mt-1 justify-around">
                                                    <NavLink to={e.github} target='_blank' className={`${themeColor[theme].hoverBg} py-1 basis-[40%] border bg-white border-[#ddd] rounded-md`}>Github</NavLink>
                                                    <NavLink to={e.site} target='_blank' className={`${themeColor[theme].hoverBg} py-1 basis-[40%] border bg-white border-[#ddd] rounded-md`}>Site</NavLink>
                                                </div>
                                            </div>
                                    </div>
                                    <div className={`${themeColor[theme].bg} lg:hidden text-center flex flex-col justify-center py-[2%]`}>
                                        <p className="text-2xl">{e.project}</p>
                                        <p className='mb-2 text-sm'>({e.type})</p>
                                        <p className="leading-7">{e.project_period}</p>
                                        <p className="">기여도 : {e.Contribution}</p>
                                        <p>기술 스택 : {e.skill}</p>
                                        <div className="flex w-[60%] mx-auto mt-1 justify-around">
                                            <NavLink to={e.github} target='_blank' className={`${themeColor[theme].hoverBg} py-1 basis-[40%] bg-white rounded-md border border-[#ddd]`}>Github</NavLink>
                                            <NavLink to={e.site} target='_blank' className={`${themeColor[theme].hoverBg} py-1 basis-[40%] bg-white rounded-md border border-[#ddd]`}>Site</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Project