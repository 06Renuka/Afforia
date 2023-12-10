import React from 'react'
import './ChooseUs.css';
import col1 from '../../Assets/laptop-landing-6.png'
import col2 from '../../Assets/laptop-landing-7.png'
import col3 from '../../Assets/laptop-landing-8.png'
import col4 from '../../Assets/laptop-landing-10.png'
import col5 from '../../Assets/laptop-landing-9.png'
const ChooseUs = () => {
  return (
    <div className='container' style={{display:'flex', flexDirection:'column',justifyContent:'center',margin:'100px'}}>
      <div className='chooseus'>
      <div className='row' style={{marginBottom:'20px',display:'flex',textAlign:'center', justifyContent:'center', flexDirection:'column'}}>
        <div><button style={{border:'1px solid', borderColor:'blue',borderRadius:'5px',backgroundColor:'white', color:'blue',alignItems:'center'}}>Why choose us?</button></div>
          

            <h2>Built for the user</h2>
            <p>Afforai is where exceptional customer focus meets exceptional technology.</p>
        </div>
        <div className='container'>
          <div className='row' style={{ display: 'flex', flexDirection: 'row', }}>
            <img style={{ border: '1px solid', borderColor: 'blue',}} src={col1} alt='' />
            <img style={{ border: '1px solid', borderColor: 'blue',}}  src={col2} alt='' />
          </div>
          <div className='row' style={{ display: 'flex', flexDirection: 'row', gap:'10px' }}>
            <div className='left' style={{ display: 'flex', flexDirection: 'column' }}>
              <img  style={{ border: '1px solid', borderColor: 'blue',}} src={col3} alt='' />
              <img  style={{ border: '1px solid', borderColor: 'blue',}} src={col4} alt='' />
            </div>
            <div className='right' style={{}}>
              <img  style={{ border: '1px solid', borderColor: 'blue',}} src={col5} alt='' />

            </div>

          </div>


        </div>


      </div>

    </div>

  )
}

export default ChooseUs