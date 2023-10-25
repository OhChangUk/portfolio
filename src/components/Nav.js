import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Nav({scrollToComponent, AboutRef, SkillsRef, ProjectRef}) {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }
    const list = [
        {
            "title" : "About Me",
            "ref" : AboutRef,
        },
        {
           "title" : "My Skills",
           "ref" : SkillsRef,
        }, 
        {
            "title" : "My Project",
            "ref" : ProjectRef,
        }
    ]

    
    const NavClick = (ref) => {
        scrollToComponent(ref)
        setNav(false)
    }

    
    
  return (
    <>
        <div className="w-full border-b border-black bg-white py-5 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto flex justify-between text-[20px]">
                <div className="cursor-pointer pl-[2%] z-30">
                    <p onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>Oh-! ChangUk</p>
                </div>
                <div className="w-[500px] justify-between hidden lg:flex pr-[2%] ">
                    {
                        list.map((e,i)=>{
                            return(
                                <p onClick={()=>{NavClick(e.ref)}} key={i} className='cursor-pointer hover:text-orange-100'>{e.title}</p>
                            )
                        })
                    }
                </div>
                
                <div className="transition-all duration-1000 z-[100] cursor-pointer lg:hidden pr-5 flex" onClick={() => {toggleNav() }}>
                    {
                        nav ?
                        <FontAwesomeIcon icon={faXmark} className='w-8 h-8 dark:text-white' />
                        :
                        <div className="w-8 h-8 flex flex-col justify-around cursor-pointer " onClick={()=>{toggleNav()}}>
                            {
                                Array(3).fill().map((_,i)=>{
                                    return(
                                        <div className="bg-black h-1 rounded-lg" key={i}></div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                <div className={`w-full fixed bg-[#e5f0f6] top-[73px]  px-[2%]  box-border lg:hidden navlist ${nav ? 'block' : 'hidden'}`}>
                    <ul>
                        {
                            list.map((e,i)=>{
                                return(
                                    <li onClick={()=>{NavClick(e.ref)}} key={i} className='my-8  cursor-pointer hover:text-orange-100'>{e.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav