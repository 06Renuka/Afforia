import React from 'react'
import payment from '../../Assets/payment-support.svg'

const HeaderPricing = () => {
  return (
    <div>
        <div className='row' style={{ marginBottom: '20px', display: 'flex', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }} >
        <div><button style={{ border: '1px solid', borderColor: 'blue', borderRadius: '5px', backgroundColor: 'white', color: 'blue' }}>Pricing</button></div>

          <span className="text-center" style={{ fontWeight: '600', fontSize: '30px', }}>Simple & Flexible Plans</span>
          <span className="text-center" style={{ fontWeight: '350', fontSize: '20px' }}>Start using Afforai for free, then continue your journey however you prefer</span>
          <div className=''>
          <img src={payment} alt=''/>
            
          </div>

          

        </div>
    </div>
  )
}

export default HeaderPricing