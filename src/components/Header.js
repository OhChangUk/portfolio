import React from 'react'
import 'animate.css'

function Header() {
  return (
    <>
        <div className="w-full h-[800px] overflow-hidden relative flex">
            <p className='text-[700px] rotate-[10deg] text-[#FFBB54] pr-20 absolute -left-[200px] -bottom-[150px] tracking-widest custom-animation'>Oh-!</p>
            <p className="absolute bottom-[250px] left-[1090px] text-[40px] rotate-[10deg] custom-animation">chang-uk</p>
        </div>
    </>
  )
}

export default Header