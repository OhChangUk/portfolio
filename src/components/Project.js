import React from 'react'

function Project() {
    const text = [
        {
            "project" : "푸리푸리",
            "project_period" : "2023.08.21 ~ 2023.10.09"
        },
        {
            "project" : "써브웨이",
            "project_period" : "2023.7.20 ~ 2023.8.16"
        },
        {
            "project" : "메이플스토리",
            "project_period" : "2023.07.04 ~ 2023.8.15"
        }
    ]
  return (
    <>
        <div className="w-full pb-48">
            <p className='text-center md:text-5xl text-3xl'>My Project</p>
            <div className="flex w-[1200px] mx-auto pt-[150px] basis-full justify-between">
                {
                    Array(3).fill().map((_,i)=>{
                        return(
                            <div className="basis-[32%] h-72 cursor-pointer relative" key={i}>
                                <img src={`./../images/project${i+1}.png`} alt={`project${i+1}`} className='h-full' />
                                <div className="absolute inset-0 bg-slate-700 opacity-0 transition-opacity duration-500 hover:opacity-100">

                                        <div className="text-center text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                            <p className="mb-2 text-2xl font-bold">{text[i].project}</p>
                                            <p className="">{text[i].project_period}</p>
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