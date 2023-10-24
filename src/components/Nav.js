import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Nav() {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }
    const list = ["About Me", "My Skills", "My Project"]
    
  return (
    <>
        <div className="w-full border-b border-black bg-white fixed z-40">
            <div className="max-w-7xl mx-auto flex justify-between my-[20px] text-[20px]">
                <div className="cursor-pointer pl-5 z-30">
                    <p>Oh-! ChangUk</p>
                </div>
                <div className="w-[500px] justify-between hidden lg:flex">
                    {
                        Array(3).fill().map((_,i)=>{
                            return(
                                <p key={i} className='cursor-pointer'>{list[i]}</p>
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
                <div className={`w-full fixed bg-[#e5f0f6] top-[73px]  p-5 md:p-12 box-border lg:hidden navlist ${nav ? 'block' : 'hidden'}`}>
                    <ul>
                        {
                            Array(3).fill().map((_,i)=>{
                                return(
                                    <li key={i}>{list[i]}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        <div className="h-[70px]"></div>
    </>
  )
}

export default Nav