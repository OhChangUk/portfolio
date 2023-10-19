import React from 'react'

function Nav() {
  return (
    <>
        <div className="w-full border-b border-black bg-white fixed z-20">
            <div className="w-[1200px] mx-auto flex justify-between my-[20px] text-[20px]">
                <div className="cursor-pointer">
                    <p>Oh-! ChangUk</p>
                </div>
                <div className="flex w-[500px] justify-between">
                    <p className='cursor-pointer'>About me</p>
                    <p className='cursor-pointer'>My Skills</p>
                    <p className='cursor-pointer'>My Project</p>
                </div>
            </div>
        </div>
        <div className="h-[70px]">

        </div>
    </>
  )
}

export default Nav