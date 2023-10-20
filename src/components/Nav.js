import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Nav() {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }
    
  return (
    <>
        <div className="w-full border-b border-black bg-white fixed z-20 px-5">
            <div className="max-w-7xl mx-auto w-7xl flex justify-between my-[20px] text-[20px]">
                <div className="cursor-pointer">
                    <p>Oh-! ChangUk</p>
                </div>
                <div className="w-[500px] justify-between hidden lg:flex">
                    <p className='cursor-pointer'>About me</p>
                    <p className='cursor-pointer'>My Skills</p>
                    <p className='cursor-pointer'>My Project</p>
                </div>
                
                <div className="transition-all duration-1000 z-[100] cursor-pointer lg:hidden pr-3 pl-4 flex" onClick={() => {toggleNav() }}>
                    {
                        nav ?
                        <FontAwesomeIcon icon={faXmark} className='w-8 h-8 dark:text-white' />
                        :
                        <div className="w-8 flex flex-col justify-around cursor-pointer " onClick={()=>{toggleNav()}}>
                            <div className="bg-black h-1"></div>
                            <div className="bg-black h-1"></div>
                            <div className="bg-black h-1"></div>
                        </div>
                    }
                </div>
                <div className={`w-[280px] md:w-80 h-full fixed bg-[#e5f0f6]  z-50 p-8 md:p-12 top-0 box-border transition-all duration-500 lg:hidden ${nav ? 'right-0' : '-right-80'}`}></div>
            </div>
        </div>
        <div className="h-[70px]"></div>
    </>
  )
}

export default Nav