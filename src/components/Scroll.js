import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



function Scroll({themeColor, theme}) {
    const ScrollTop = () => {
        window.scrollTo({
            top:0,behavior:'smooth'
        })
    }
  return (
    <>
        <div className="fixed z-10 right-[3%] bottom-[5%] opacity-80">
            <div className={`text-center rounded-full ${themeColor[theme].buttonBg} ${themeColor[theme].hoverBtn}`}>
                <button className='lg:py-3.5 py-2.5 lg:px-4 px-3' onClick={ScrollTop}>
                    <FontAwesomeIcon icon={faAngleUp} size='xl' color='white'/>
                </button>
            </div>
        </div>
    </>
  )
}

export default Scroll