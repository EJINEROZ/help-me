import React from 'react'
import Button from '../Button'

const Nav = () => {
  return (
    <>
      <div className='md: flex items-center justify-between bg-black opacity-25 py-4 md:px-10 px-7'>

      <span className=''>
      <ion-icon name="cash-outline"></ion-icon>
      
      </span>
      <h2 className= 'ppp'>DecFundMe</h2>
      <div className=''>
      <Button>CONNECT</Button>
      </div>
     
    </div>

    </>
  )
}

export default Nav