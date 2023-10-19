import React from 'react'

function AboutMe() {
  return (
    <>
        <div className="w-full py-[200px]">
            <p className='text-center text-[50px]'>About Me</p>
            <div className="flex w-[1200px] mx-auto pt-[150px] basis-full justify-between">
                <img src="./../../images/picture.jpg" alt="1" className='w-[300px] basis-[30%] mr-[100px]'/>
                <div className="basis-[50%] flex justify-around flex-col py-10">
                    <p className='text-[30px]'>프론트엔드 개발자</p>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, facilis ad recusandae nam animi delectus dignissimos esse hic aperiam praesentium officiis excepturi sapiente illo odit quia architecto. Inventore sunt eaque fugit minima deserunt. Eaque debitis quas iusto illum rem facere ullam, fugiat atque, saepe distinctio consequatur iste consectetur voluptates deleniti!</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe