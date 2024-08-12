import Image from 'next/image'
import React from 'react'

const Joinus = () => {
  return (
    <>
    <div className='w-full justify-around items-start p-5' style={{'height':'320px', 'paddingRight':'148px','paddingTop':'46px',  'paddingLeft':'148px','paddingBottum':'46px', 'backgroundColor':'#ffffff'}}>
      <p className='font-bold'>JOIN US</p>
      <div className='font-normal  flex md:flex-row justify-between'>
        <div>
          <p style={{'paddingTop':'10px', 'maxWidth':'494px'}}>Join the growing community of successful sellers who have chosen Unibazar to enhance their e-commerce operations. Together, we can transform the way you manage your online business.</p>
          <button type='button' className='pb-5' style={{'color':'white', 'backgroundColor':'#07736C', 'width':'200px', 'height':'51px', 'borderRadius':'10px', 'padding':'1px', 'marginTop':'40px'}}>Signup for free</button>
        </div>
        <Image src={require('../../../Assets/joinUs.png')} alt='joinUs_image'></Image>
      </div>
    </div>
    </>
  )
}

export default Joinus