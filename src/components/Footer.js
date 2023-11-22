import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom'


function Footer({themeColor, theme}) {
  const copyEmail = async (email) => {
    await navigator.clipboard.writeText(email);
    alert("이메일 복사에 성공했습니다");
  };
  return (
    <>
        <div className={`${themeColor[theme].bg} py-14  w-full`}>
          <div className="flex justify-around mb-5 w-40 mx-auto">
            <NavLink to={"https://github.com/OhChangUk"} target='_blank' className="">
                <img src="./../images/skill9.png" alt="github" className='w-14 mx-auto' />
            </NavLink>
            <FontAwesomeIcon icon={faEnvelope} onClick={()=>{copyEmail("o2556@naver.com")}} className='w-14 h-full cursor-pointer' />
          </div>
          <p className='text-center'>ⓒ 2023. ChangUk Oh all rights reserved.</p>
        </div>
    </>
  )
}

export default Footer