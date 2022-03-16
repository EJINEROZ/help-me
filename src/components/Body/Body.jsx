import React from 'react'
import './Body.css'
import Button from '../Button'


const Body = () => {
  return (
    <>
    <div className='omoh'>
      <h1>Decentralized Fund Me!</h1>
      <p className='centp'>A new way for requesting <p className='fund'>funding</p>  from friends and the public.
        {/* No amount is too small or too big.it can actually go a long way. */}
        <p>To get started click the button below.</p> 
      </p>
    </div>
    <Button>Create a Request</Button>
    <p>We rise by lifitng others.</p>

    
    </>


    )
}

export default Body