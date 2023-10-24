import React from 'react'

function AboutMe() {
  return (
    <>
        <div className="w-full pt-48 pb-24">
            <p className='text-center md:text-5xl text-3xl'>About Me</p>
            <div className="lg:flex md:flex max-w-7xl mx-auto lg:pt-[150px] md:pt-[130px] pt-20 justify-between px-[2%]">
                <img src="./../../images/picture.jpg" alt="1" className='lg:w-[300px] md:w-[250px] w-full mx-auto lg:mr-[100px] md:mr-[50px]'/>
                <div className="lg:basis-3/5 md:basis-3/5 w-full mx-auto flex justify-around flex-col py-10">
                    <p className='lg:text-3xl md:text-3xl text-2xl'>프론트엔드 개발자</p>
                    <p className='lg:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, facilis ad recusandae nam animi delectus dignissimos esse hic aperiam praesentium officiis</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe