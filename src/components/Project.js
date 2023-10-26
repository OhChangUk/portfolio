import React from 'react'
import { NavLink } from 'react-router-dom'

function Project({domRef}) {
    const text = [
        {
            "project" : "puripuri",
            "project_period" : "2023.08.21 ~ 2023.10.09",
            "src" : "https://team-puri.vercel.app/",
            "Contribution" : "20%"
        },
        {
            "project" : "SUBWAY",
            "project_period" : "2023.7.20 ~ 2023.8.16",
            "src" : "https://github.com/OhChangUk/subway",
            "Contribution" : "100%"
        },
        {
            "project" : "MapleStory",
            "project_period" : "2023.07.04 ~ 2023.8.15",
            "src" : "https://github.com/OhChangUk/maple",
            "Contribution" : "100%"
        }
    ]
  return (
    <>
        <div ref={domRef} className="w-full py-24">
            <p className='text-center md:text-6xl text-4xl font-bold'>My Project</p>
            <div className="flex flex-wrap max-w-7xl mx-auto lg:pt-[150px] md:pt-[130px] pt-20 lg:gap-x-[0.5%] md:gap-x-[2%] px-[2%]">
                {
                    text.map((e,i)=>{
                        return(
                            <NavLink key={i} to={e.src} target='_blank' className=" lg:h-64 lg:basis-[33%] md:basis-[49%] basis-full md:mb-[2%] mb-[4%] cursor-pointer relative">
                                <div className="lg:h-full basis-full border border-[#ddd]">
                                    <img src={`./../images/project${i+1}.png`} alt={`project${i+1}`} className='lg:h-full w-full ' />
                                    <div className="lg:block hidden absolute inset-0 bg-slate-700 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                            <div className="text-center text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                                <p className="mb-2 text-2xl font-bold leading-10">{e.project}</p>
                                                <p className="leading-7">{e.project_period}</p>
                                                <p className="">기여도 : {e.Contribution}</p>
                                            </div>
                                    </div>
                                    <div className="lg:hidden font-bold  text-center flex flex-col justify-center bg-orange-50 py-[2%]">
                                        <p className="mb-2 text-2xl">{e.project}</p>
                                        <p className="leading-7">{e.project_period}</p>
                                        <p className="">기여도 : {e.Contribution}</p>
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