import React from 'react';
import './ChooseUs.css';
import twocards from '../../Assets/twocards'

import ChooseUsdata from '../../Assets/ChooseUsdata'; 

const ChooseUs = () => {
  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '100px' }}>
      <div className='chooseus'>
        <div className='row' style={{ marginBottom: '20px', display: 'flex', textAlign: 'center', justifyContent: 'center', flexDirection: 'column',gap:'10px' }}>
          <div><button style={{ border: '1px solid', borderColor: 'blue', borderRadius: '5px', backgroundColor: 'white', color: 'blue', alignItems: 'center' }}>Why choose us?</button></div>

          <h2>Built for the user</h2>
          <p>Afforai is where exceptional customer focus meets exceptional technology.</p>
        </div>

        <div className='container'>
          <div className='row' style={{ display: 'flex', flexDirection: 'row', margin:'10px', }}>
            {twocards.map((item) => (
              <div className='col' key={item.id} style={{ border: '1px solid', borderColor: 'whitesmoke', margin:'10px'}} >
                <img style={{  margin: '10px', width:'100%' }} src={item.image} alt='' />
                <span style={{fontWeight:'400', margin:'20px', borderColor: 'whitesmoke'}}>{item.describe}</span>
                <p style={{ margin:'12px'}}>{item.describe2}</p>
              </div>
            ))}
          </div>

          <div className='container' style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            {ChooseUsdata.map((item) => (
              <div className='col' key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className='row' style={{ display: 'flex', flexDirection: 'row' }}>
                  <div className='col' style={{ border: '1px solid', borderColor: 'whitesmoke', margin:'10px' }}>
                    <img style={{  margin: '10px',width:'100%' }} src={item.image} alt='' />
                    <span style={{fontWeight:'400', margin:'20px'}}>{item.describe}</span>
                    <p style={{ margin:'12px'}}>{item.describe2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
