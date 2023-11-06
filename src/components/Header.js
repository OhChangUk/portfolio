import React from 'react'
import 'animate.css'


function Header({themeColor, theme}) {
  return (
    <>
      <div className="w-full overflow-hidden">
        <img src={`${themeColor[theme].img}`} alt="main" className='w-full custom-animation ' />
      </div>
    </>
  )
}

export default Header