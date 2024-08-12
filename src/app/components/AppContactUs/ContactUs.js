import React from 'react'
const Contactus = () => {
  return (
    <>
      <div style={{'backgroundColor':'#07736C', 'width':'100%', 'height':'145px','justifyContent':'center', 'alignItems':'center', 'textAlign':'center', 'display':'flex', 'flexDirection':'column','fontFamily':'Nunito, sans-serif', 'padding':'5px', 'color':'white'}}>
        <p style={{'fontWeight':'bold' }}>CONTACT US</p>
        <p style={{'fontWeight':'regular' }}>We'd love to hear from you! If you have any questions or need assistance, feel free to reach out to us: </p>
        <div style={{'fontWeight':'semiBold'}}>
          <p>Phone: 1234567890</p>
          <p>Email: company@email.com</p>
        </div>
      </div>
    </>
    
  )
}

export default Contactus