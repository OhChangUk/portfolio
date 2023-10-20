import React from 'react'
import 'animate.css'


function Header() {
  return (
    <>
        <div className="w-full lg:h-[800px] md:h-[600px] h-[400px] overflow-hidden relative flex cursor-default">
            <p className='lg:text-[700px] md:text-[500px] text-[300px] rotate-[10deg] text-[#FFBB54] pr-20 absolute lg:-left-[200px] md:-left-[150px] -left-[80px] lg:-bottom-[150px] md:-bottom-[100px] -bottom-[40px] tracking-widest custom-animation'>Oh-!</p>
            <p className="absolute lg:bottom-[250px] md:bottom-[195px] bottom-[140px]  lg:left-[1090px] md:left-[775px] left-[480px] lg:text-[40px] md:text-[30px] rotate-[10deg] custom-animation">chang-uk</p>
        </div>
    </>
  )
}

export default Header