import React from 'react'

import image2 from '../../Assets/laptop-landing-4.png'
import check from '../../Assets/check-circle.svg';

const Usage = () => {
  return (
    <div className='Usage' style={{ display: 'flex', flexDirection: 'row', margin: '100px' }}>

      <div className='left_side' style={{ display: 'flex', flexDirection: 'column', padding: '5px', justifyContent: 'center', width: '50%' }}>
        <h2>Say goodbye to long, tiresome <br />documents</h2>
        <p>Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.</p>

        <div className='d-flex flex-column gap-3'>
          <div className='1stline d-flex flex-row align-item-center font-weight-500'>
            <img src={check} alt='' />
            <span>
              A whip smart research assistant
            </span>
          </div>
          <div className='1stline d-flex flex-row align-item-center font-weight-500'>
            <img src={check} alt='' />
            <span>
              We speak every language
            </span>
          </div>
          <div className='1stline d-flex flex-row align-item-center font-weight-500'>
            <img src={check} alt='' />
            <span>
              Reliable data citation for answers
            </span>
          </div>
          <div className='1stline d-flex flex-row align-item-center font-weight-500'>
            <img src={check} alt='' />
            <span>
              Fort-Knox level data security
            </span>
          </div>
        </div>


      </div>
      <div className="rightSide" style={{ display: 'flex', padding: '20px', height: '500px', width: '50%' }}>

        <img src={image2} alt='' />


      </div>
    </div>


  )
}

export default Usage