import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Nav({scrollToComponent, AboutRef, SkillsRef, ProjectRef}) {
    const [nav, setNav] = useState(false)
    const [theme, setTheme] = useState("orange")

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
    const themeColor = {
        "orange":{
            "bg" : "bg-orange-500",
            "hover" : "hover:text-orange-300",
            "img" : "./../images/main.jpg"
        },
        "green":{
            "bg" : "bg-green-400",
            "hover" : "hover:text-green-300",
            "img" : "./../images/main2.jpg"
        },
        "blue":{
            "bg" : "bg-blue-400",
            "hover" : "hover:text-blue-300",
            "img" : "./../images/main1.jpg"
        }
    }
    const buttons = [
        {name: "오렌지", theme: "orange"},
        {name: "그린", theme: "green"},
        {name: "블루", theme: "blue"}
    ]
    
    const NavClick = (ref) => {
        scrollToComponent(ref)
        setNav(false)
    }

    
    
  return (
    <>
        <div className="w-full border-b border-black bg-white py-5 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto flex justify-between text-[20px] font-bold px-[2%]">
                <div className="cursor-pointer  z-30">
                    <p onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}>Oh-! ChangUk</p>
                </div>
                <div className="w-[500px] justify-between hidden lg:flex ">
                    {
                        list.map((e,i)=>{
                            return(
                                <p onClick={()=>{NavClick(e.ref)}} key={i} className={`${themeColor[theme].hover} cursor-pointer`}>{e.title}</p>
                            )
                        })
                    }
                    {
                        buttons.map((e,i)=>{
                            return(
                                <p key={i} onClick={()=>setTheme(e.theme)}>{e.name}</p>
                            )
                        })
                    }
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
                <div className={`w-full fixed bg-orange-100 top-[73px] left-0  px-[2%]  box-border lg:hidden navlist ${nav ? 'block' : 'hidden'}`}>
                    <ul>
                        {
                            list.map((e,i)=>{
                                return(
                                    <li onClick={()=>{NavClick(e.ref)}} key={i} className='my-8  cursor-pointer'>{e.title}</li>
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