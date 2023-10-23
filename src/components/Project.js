import React from 'react'
import { NavLink } from 'react-router-dom'

function Project() {
    const text = [
        {
            "project" : "푸리푸리",
            "project_period" : "2023.08.21 ~ 2023.10.09",
            "src" : "https://team-puri.vercel.app/"
        },
        {
            "project" : "써브웨이",
            "project_period" : "2023.7.20 ~ 2023.8.16",
            "src" : "https://github.com/OhChangUk/subway"
        },
        {
            "project" : "메이플스토리",
            "project_period" : "2023.07.04 ~ 2023.8.15",
            "src" : "https://github.com/OhChangUk/maple"
        }
    ]
  return (
    <>
        <div className="w-full pb-48">
            <p className='text-center md:text-5xl text-3xl'>My Project</p>
            <div className="flex flex-wrap max-w-7xl mx-auto lg:pt-[150px] md:pt-[130px] pt-20  md:gap-x-[2%] px-[2%]">
                {
                    Array(3).fill().map((_,i)=>{
                        return(
                            <NavLink to={text[i].src} className="lg:basis-[32%] md:basis-[49%] basis-full h-72 mb-[2%] cursor-pointer relative">
                                <div className="lg:basis-[32%] md:basis-[49%] basis-full h-72 mb-[2%] cursor-pointer relative border border-[#ddd]">
                                    <img src={`./../images/project${i+1}.png`} alt={`project${i+1}`} className='h-full' />
                                    <div className="absolute inset-0 bg-slate-700 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                            <div className="text-center text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                                <p className="mb-2 text-2xl font-bold">{text[i].project}</p>
                                                <p className="">{text[i].project_period}</p>
                                            </div>
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