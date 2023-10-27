import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className="bg-orange-50 py-14  w-full">
            <NavLink to={"https://github.com/OhChangUk"} target='_blank' className="">
                <img src="./../images/skill6.png" alt="github" className='w-10 mx-auto mb-5' />
            </NavLink>
            <p className='text-center'>ⓒ 2023. ChangUk Oh all rights reserved.</p>
        </div>
    </>
  )
}

export default Footer