import React from 'react'
import Image from 'next/image'
const MeetFounder = () => {
  return (
    <>
    <div className='w-full flex md:flex-row flex-col justify-between justify-around items-start p-5' style={{'maxHeight':'331px', 'paddingTop':'46px',  'paddingLeft':'100px','paddingBottum':'46px', 'backgroundColor':'#ffffff'}}>
      <div style={{'backgroundColor':'#F5FDFD', 'maxHeight':'224px', 'borderRadius':'10px', 'padding':'40px'}} className='z-0'>
        <p className='font-bold'>MEET THE FOUNDERS</p>
        <p style={{'paddingTop':'10px', 'maxWidth':'665px'}}>Unibazar was founded in May 2024 by Amritesh and Rahul. With a shared vision to address the complexities faced by sellers in managing multiple e-commerce platforms, they combined their expertise to create a solution that would transform the e-commerce landscape</p>
        <Image src={require('../../../Assets/Group 21.png')} alt='meet_image' className='z-10'></Image>
      </div>
      <Image src={require('../../../Assets/meet.png')} alt='meet_image'></Image>
    </div>
    </>
  )
}

export default MeetFounder