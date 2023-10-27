import React from 'react'

function AboutMe({domRef}) {
  return (
    <>
        <div ref={domRef} className="w-full md:pt-48 pt-32 lg:pb-32 pb-28 ">
            <p className='text-center md:text-6xl text-4xl font-bold'>About</p>
            <div className="lg:flex md:flex max-w-7xl mx-auto lg:pt-[150px] md:pt-[130px] pt-20 justify-between px-[2%]">
                <img src="./../../images/me.jpg" alt="1" className='lg:w-[350px] md:w-[300px] w-full  lg:mr-[100px] md:mr-[50px]'/>
                <div className="lg:basis-3/5 md:basis-3/5 w-full mx-auto flex justify-around flex-col py-10">
                    <p className='lg:text-4xl md:text-3xl text-2xl font-bold'>별처럼 밝게 빛나는 오창욱입니다.</p>
                    <p className='lg:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, facilis ad recusandae nam animi delectus dignissimos esse hic aperiam praesentium officiis</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe