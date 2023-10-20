import React from 'react'

function AboutMe() {
  return (
    <>
        <div className="w-full py-[200px]">
            <p className='text-center text-[50px]'>About Me</p>
            <div className="flex lg:w-3/4 md:w-3/4  mx-auto pt-[150px] basis-full justify-between">
                <img src="./../../images/picture.jpg" alt="1" className='lg:w-[300px] md:w-[200px] lg:basis-1/5 md:basis-1/5 lg:mr-[100px]'/>
                <div className="lg:basis-[60%] md:basis-3/5  flex justify-around flex-col py-10">
                    <p className='text-[30px]'>프론트엔드 개발자</p>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, facilis ad recusandae nam animi delectus dignissimos esse hic aperiam praesentium officiis</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe