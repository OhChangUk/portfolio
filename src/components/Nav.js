import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Nav({scrollToComponent, AboutRef, SkillsRef, ProjectRef, themeColor, buttons, theme, setTheme}) {
    const [nav, setNav] = useState(false)
    

    const toggleNav = () => {
        setNav(!nav)
    }
    const list = [
        {
            "title" : "About",
            "ref" : AboutRef,
        },
        {
           "title" : "Skills",
           "ref" : SkillsRef,
        }, 
        {
            "title" : "Projects",
            "ref" : ProjectRef,
        }
    ]
    
    
    const NavClick = (ref) => {
        scrollToComponent(ref)
        setNav(false)
    }

    
    
  return (
    <>
        <div className="w-full border-b border-black dark:bg-black bg-white py-5 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-xl font-bold lg:px-[2%] px-5">
                <div className="cursor-pointer z-30">
                    <p onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>Oh-! ChangUk</p>
                </div>
                <div className="w-[500px] justify-between items-center hidden lg:flex ">
                    {
                        list.map((e,i)=>{
                            return(
                                <p onClick={()=>{NavClick(e.ref)}} key={i} className={`${themeColor[theme].hover} cursor-pointer`}>{e.title}</p>
                            )
                        })
                    }
                    <div className='flex items-center text-base'>
                        <p>테마 색상 : </p>
                        <div className="flex justify-around w-24">
                            {
                                buttons.map((e,i)=>{
                                    return(
                                        <div className={`${themeColor[e.theme].theme} ${themeColor[e.theme].hoverTheme} w-6 h-6 rounded-full cursor-pointer`} key={i} onClick={() => setTheme(e.theme)}></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
                <div className="transition-all duration-1000 z-[100] cursor-pointer lg:hidden flex" onClick={() => {toggleNav() }}>
                    {
                        nav ?
                        <FontAwesomeIcon icon={faXmark} className='w-8 h-8 dark:text-white' />
                        :
                        <div className="w-8 h-8 flex flex-col justify-around cursor-pointer " onClick={()=>{toggleNav()}}>
                            {
                                Array(3).fill().map((_,i)=>{
                                    return(
                                        <div className="bg-black h-[5px] rounded-lg" key={i}></div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                <div className={`${themeColor[theme].mobileNav} w-full fixed  top-[73px] left-0  px-[2%]  box-border lg:hidden navlist ${nav ? 'block' : 'hidden'}`}>
                    <ul>
                        {
                            list.map((e,i)=>{
                                return(
                                    <li onClick={()=>{NavClick(e.ref)}} key={i} className={`${themeColor[theme].hover} my-8 cursor-pointer`}>{e.title}</li>
                                )
                            })
                        }
                        <li className='flex gap-x-2 items-center my-8 text-base'>
                            <p>테마 색상 : </p>
                            <div className="flex justify-around w-24">
                                {
                                    buttons.map((e,i)=>{;
                                        return(
                                            <div className={`${themeColor[e.theme].theme} ${themeColor[e.theme].hoverTheme} w-6 h-6 rounded-full cursor-pointer`} key={i} onClick={() => setTheme(e.theme)}></div>
                                        )
                                    })
                                }
                            </div>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav