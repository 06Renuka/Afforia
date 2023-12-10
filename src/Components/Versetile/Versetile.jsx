import React from 'react'
import landing10 from '../../Assets/laptop-landing-11.png'

const Versetile = () => {
  return (
    <div>
      <div className='container' style={{ display: 'flex', flexDirection: 'row', margin: '100px' }}>

        <div className='left_side' style={{ display: 'flex', flexDirection: 'column', padding: '5px', justifyContent: 'center', width: '50%',gap:'20px' }}>
          <div><button style={{ border: '1px solid', borderColor: 'blue', borderRadius: '5px', backgroundColor: 'white', color: 'blue' }}>Most versatile</button></div>
          <h2>Create multiple chatbots for different purposes</h2>
          <p>Legal documents? Summarising a book? Extracting data from a<br /> website? We allow you to create multiple chatbots at one time, so you<br /> can use Afforai for a whole range of purposes.
          </p>
          <div style={{ gap: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
            <button type="button" class="new-btn gray px-2 px-md-3 btn" style={{ backgroundColor: 'blue', color: 'white', padding: ' 0px 20px' }}>Try for free</button>
            <button type="button" class="try-button new-btn violet-fill px-2 px-md-3 btn" style={{ backgroundColor: 'white', fontWeight: '500' }}>View Pricing</button>
          </div>




        </div>
        <div className="rightSide" style={{ display: 'flex', padding: '20px', height: '500px', width: '50%' }}>

          <img src={landing10} alt='' />


        </div>
      </div>
    </div>
  )
}

export default Versetile